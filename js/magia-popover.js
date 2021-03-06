// $(".magias-hover").mouseover(function () {
//     console.log("passou aqui");
//     var magiaNomeUrl = $(this).attr("id");
//     loadMPopIntoPage("/data/magias.json", magiaNomeUrl);
// });
$(document).on("mouseover", ".magias-hover", function (){
    // console.log("passou aqui");
    var magiaNomeUrl = $(this).attr("id");
    
    loadMPopIntoPage("/data/magias.json", magiaNomeUrl);
    
})

function loadMPopIntoPage(data, id) {
    
    
    
    $.getJSON(data, function (magias) {
        // Achar os dados dentro do json e definir uma variavel para cada informação relevante
        const DATA_MAGIAS = Object.values(magias);
        const NOME_MAGIA = DATA_MAGIAS[0][id].nome;

        var magiaCirculo = "";
        if (DATA_MAGIAS[0][id].circulo != 0) {
        var magiaCirculo = DATA_MAGIAS[0][id].circulo + "º círculo";
        } else {
        var magiaCirculo = "Truque";
        }

        var magiaEscola = DATA_MAGIAS[0][id].escola;
        if (DATA_MAGIAS[0][id].ritual == true) {
        magiaEscola += " (ritual)";
        }

        var magiaConjuracao = DATA_MAGIAS[0][id].tempo_conjuracao;
        
        var magiaAlcance = DATA_MAGIAS[0][id].alcance;
        
        var magiaDuracao = DATA_MAGIAS[0][id].duracao;
        
        var magiaComponentes = DATA_MAGIAS[0][id].componentes;
        if (typeof DATA_MAGIAS[0][id].componentes_extra !== "undefined") {
        magiaComponentes += " *";
        }
        
        var magiaDescricao =
        DATA_MAGIAS[0][id].descricao.substring(0, 1000) + "[...]";
        
        var magiaComponentesExtra = "";
        if (typeof DATA_MAGIAS[0][id].componentes_extra !== "undefined") {
        magiaComponentesExtra = " " + DATA_MAGIAS[0][id].componentes_extra;
        }

        // Array para criação do tooltip com as infos do json
        var r = new Array();
        r[0] = '<div class="magias-hover-popup">'
        r[1] = '<div class="tooltiptext">'
        r[2] = '<div id="popover_html" class="popover">';
        r[3] = '<div class="popover-header">';
        r[4] = '<h4>' + NOME_MAGIA + '</span></h4>';
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
        //console.log(r);
    });
};

// Solução para Tooltips de Magia usando o Bootstrap 5
// $(function () {
//     $('.magias-hover').tooltip({
//         template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
//         position: "bottom"
//     });
// });