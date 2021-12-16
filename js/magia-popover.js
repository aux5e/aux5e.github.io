$(".magia-hover").mouseover(function () {
    var magiaNomeUrl = $(this).attr("id");
    loadIntoPage("/data/magias.json", magiaNomeUrl);
});

function loadIntoPage(data, id) {
    $.getJSON(data, function (magias) {
        // Achar os dados dentro do json e definir uma variavel para cada informação relevante
        const magiasNomes = Object.values(magias);
        const magiaName = magiasNomes[0][id].nome;
        var magiaCirculo = "";
        if (magiasNomes[0][id].circulo != 0) {
        var magiaCirculo = magiasNomes[0][id].circulo + "º círculo";
        } else {
        var magiaCirculo = "Truque";
        }
        var magiaEscola = magiasNomes[0][id].escola;
        if (magiasNomes[0][id].ritual == true) {
        magiaEscola += " (ritual)";
        }
        const magiaConjuracao = magiasNomes[0][id].tempo_conjuracao;
        const magiaAlcance = magiasNomes[0][id].alcance;
        const magiaDuracao = magiasNomes[0][id].duracao;
        var magiaComponentes = magiasNomes[0][id].componentes;
        if (typeof magiasNomes[0][id].componentes_extra !== "undefined") {
        magiaComponentes += " *";
        }
        const magiaDescricao =
        magiasNomes[0][id].descricao.substring(0, 1000) + "[...]";
        var magiaComponentesExtra = "";
        if (typeof magiasNomes[0][id].componentes_extra !== "undefined") {
        magiaComponentesExtra = " (" + magiasNomes[0][id].componentes_extra + ")";
        }

        var r = new Array();
        r[0] = '<div id="popover_html" class="popover">';
        r[1] = '<div class="popover-header">';
        r[2] = '<h4>' + magiaName + '</span></h4>';
        r[3] = ' <h6 class="popover-subtitle">' + magiaCirculo + ', ' + magiaEscola + '</h6>';
        r[4] = '</div><div class="popover-body">';
        r[5] = '<div class="popover-infos popover-magias">';
        r[6] = '<b>Tempo de Conjuração:</b> ' + magiaConjuracao + '<br>';
        r[7] = '<b>Alcance:</b> ' + magiaAlcance + '<br>';
        r[8] = '<b>Componentes:</b> ' + magiaComponentes + magiaComponentesExtra + '<br>';
        r[9] = '<b>Duração:</b> ' + magiaDuracao + '</div>';
        r[10] = magiaDescricao + '<br>';
        r[11] = '<p><span class="badge badge-spells" style="padding:8px;font-size:14px;">ACESSE A PÁGINA PARA VER MAIS</span></p>';
        r[12] = '</div></div></div>';
        $("#pop").html(r.join(''));
    
        // Renderizar dado na página
        // document.getElementById("magiaNome").innerHTML = magiaName;
        // document.getElementById("magiaCirculo").innerHTML = magiaCirculo;
        // document.getElementById("magiaEscola").innerHTML = magiaEscola;
        // document.getElementById("magiaConjuracao").innerHTML = magiaConjuracao;
        // document.getElementById("magiaAlcance").innerHTML = magiaAlcance;
        // document.getElementById("magiaDuracao").innerHTML = magiaDuracao;
        // document.getElementById("magiaComponentes").innerHTML = magiaComponentes;
        // document.getElementById("magiaDescricao").innerHTML = magiaDescricao;
        // document.getElementById("magiaComponentesExtra").innerHTML = magiaComponentesExtra;
    });
};

$('document').ready(function(){
    $(function () {
        $(".magia-hover").tooltip({
            show: {
            delay: 300,
            effect: "fade",
            duration: 100,
            },
            open: function (event, ui) {
            var userid = this.id;

            $.ajax({
                url: "/data/magias-popover.html",
                type: "get",
                success: function (response) {
                // Setting content option
                $("#" + userid).tooltip("option", "content", response);
                },
            });
            },
        });

        $(".magia-hover").mouseout(function () {
            // re-initializing tooltip
            $(this).tooltip("close");
            $(this).tooltip("disable");
            $(this).attr("title", "Carregando...");
            $(this).tooltip();
            $(this).tooltip("enable");
            $(".ui-helper-hidden-accessible").hide();
        });
    });
});