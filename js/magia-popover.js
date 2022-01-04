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
        magiaComponentesExtra = " " + magiasNomes[0][id].componentes_extra;
        }

        // Array para criação do tooltip com as infos do json
        var r = new Array();
        r[0] = '<div class="magia-hover-popup">'
        r[1] = '<div class="tooltiptext">'
        r[2] = '<div id="popover_html" class="popover">';
        r[3] = '<div class="popover-header">';
        r[4] = '<h4>' + magiaName + '</span></h4>';
        r[5] = ' <h6 class="popover-subtitle">' + magiaCirculo + ', ' + magiaEscola + '</h6>';
        r[6] = '</div><div class="popover-body">';
        r[7] = '<div class="popover-infos popover-magias">';
        r[8] = '<b>Tempo de Conjuração:</b> ' + magiaConjuracao + '<br>';
        r[9] = '<b>Alcance:</b> ' + magiaAlcance + '<br>';
        r[10] = '<b>Componentes:</b> ' + magiaComponentes + magiaComponentesExtra + '<br>';
        r[11] = '<b>Duração:</b> ' + magiaDuracao + '</div>';
        r[12] = magiaDescricao + '<br>';
        r[13] = '<p><span class="badge badge-spells" style="padding:8px;font-size:14px;">ACESSE A PÁGINA PARA VER MAIS</span></p>';
        r[14] = '</div></div></div></div></div>';
        $(".tooltip-inner").html(r.join(''));
    });
};

// Solução para Tooltips Magia usando Bootstrap

$(function () {
    $('.magia-hover').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        position: "bottom"
    });
});

// Solução para Tooltips Magia usando jQuery UI + ajax (não funciona super bem no GitHub Pages)
// $('document').ready(function(){
//     $(function () {
//         $(".magia-hover").tooltip({
//             show: {
//             delay: 300,
//             effect: "fade",
//             duration: 100,
//             },
//             open: function (event, ui) {
//             var userid = this.id;

//             // $.ajax({
//             //     url: "/data/magias-popover.html",
//             //     type: "get",
//             //     success: function (response) {
//             //     // Setting content option
//             //     $("#" + userid).tooltip("option", "content", response);
//             //     },
//             // });
//             },
//         });

//         $(".magia-hover").mouseout(function () {
//             // re-initializing tooltip
//             $(this).tooltip("close");
//             $(this).tooltip("disable");
//             $(this).attr("title", "Carregando...");
//             $(this).tooltip();
//             $(this).tooltip("enable");
//             $(".ui-helper-hidden-accessible").hide();
//         });
//     });
// });