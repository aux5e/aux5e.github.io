"use strict";
const BG_JSON_URL = "/data/antecedentes.json";

async function loadAntecedentesIntoPage(url) {
    const SECTION_BODY = document.getElementById("antecedentes");
    const SIDEMENU = document.getElementById("side-menu");
    const MENU_MOBILE = document.getElementById("side-menu-mobile");

    await $.getJSON(url, function (bgDt) {
        const ANTECEDENTES = Object.values(bgDt.background);
        const ANTECEDENTES_LENGHT = ANTECEDENTES.length;
        console.log(ANTECEDENTES);
        console.log(ANTECEDENTES_LENGHT);

        // Limpa o corpo da pagina
        SECTION_BODY.innerHTML = "";
        SIDEMENU.innerHTML = "";
        MENU_MOBILE.innerHTML = "";

        // ======================= Popular o conteudo da página ======================= //
        var bgContent = [];
        var bgIncrement = -1;
        for (var antecedente = 0; antecedente < ANTECEDENTES_LENGHT; antecedente++) {
            // abre section de antecedente (INICIO)
            bgContent[++bgIncrement] = '<section id="' + ANTECEDENTES[antecedente].id + '" style="margin-top: 22px;">';

            // nome do antecedente
            bgContent[++bgIncrement] = '<h3 class="subtitulo">';
            bgContent[++bgIncrement] = ANTECEDENTES[antecedente].name;
            bgContent[++bgIncrement] = '<span class="talentos__source">';
            bgContent[++bgIncrement] = ANTECEDENTES[antecedente].source + ', ';
            bgContent[++bgIncrement] = 'pg ' + ANTECEDENTES[antecedente].page + '</span>';
            bgContent[++bgIncrement] = '</h3>';

            // entries de tipo string nos antecedentes
            if (ANTECEDENTES[antecedente].entries) {
                for (var i = 0; i < ANTECEDENTES[antecedente].entries.length; i++) {
                    if (typeof ANTECEDENTES[antecedente].entries[i] === 'string') {
                        bgContent[++bgIncrement] = '<p>' + ANTECEDENTES[antecedente].entries[i] + '</p>';
                    }

                    // entries de tipo listas nos antecedentes
                    if (typeof ANTECEDENTES[antecedente].entries[i] === 'object' && ANTECEDENTES[antecedente].entries[i].type === "list") {
                        
                        bgContent[++bgIncrement] = '<ul class="' + ANTECEDENTES[antecedente].entries[i].style + '">'
                        for (var j = 0; j < ANTECEDENTES[antecedente].entries[i].items.length; j++) {
                            bgContent[++bgIncrement] = '<li>'
                            bgContent[++bgIncrement] = '<b>' + ANTECEDENTES[antecedente].entries[i].items[j].name + ': </b>';
                            bgContent[++bgIncrement] = ANTECEDENTES[antecedente].entries[i].items[j].entry;
                            bgContent[++bgIncrement] = '</li>';
                        }
                        bgContent[++bgIncrement] = '</ul>';
                    }

                    // entries de tipo entries nos antecedentes
                    if (typeof ANTECEDENTES[antecedente].entries[i] === 'object' && ANTECEDENTES[antecedente].entries[i].type === "entries") {
                        
                        bgContent[++bgIncrement] = '<h4>' + ANTECEDENTES[antecedente].entries[i].name + '</h4>'
                        for (var j = 0; j < ANTECEDENTES[antecedente].entries[i].entries.length; j++) {
                            // se a entry dentro das entries for string
                            if (typeof ANTECEDENTES[antecedente].entries[i].entries[j] === 'string') {
                                bgContent[++bgIncrement] = '<p>' + ANTECEDENTES[antecedente].entries[i].entries[j] + '</p>';
                            }

                            // se exister tabelas dentro da entry
                            if (typeof ANTECEDENTES[antecedente].entries[i].entries[j] === 'object' && ANTECEDENTES[antecedente].entries[i].entries[j].type === 'table') {
                                bgContent[++bgIncrement] = '<table class="table table-bordered table-striped compact-table" style="font-size: 0.9em; margin-bottom: 35px">';
                                bgContent[++bgIncrement] = '<thead><tr>';

                                // Cabeçalho da tabela
                                var colLabelsLenght = ANTECEDENTES[antecedente].entries[i].entries[j].colLabels.length;
                                for (var l = 0; l < colLabelsLenght; l++) {
                                    bgContent[++bgIncrement] = '<th class="' + ANTECEDENTES[antecedente].entries[i].entries[j].colStyles[l] + '" style="padding: 1.2rem 1rem;" scope="col">';
                                    bgContent[++bgIncrement] = ANTECEDENTES[antecedente].entries[i].entries[j].colLabels[l];
                                    bgContent[++bgIncrement] = '</th>';
                                }
                                bgContent[++bgIncrement] = '</tr></thead><tbody>';

                                var tableRowsLenght = ANTECEDENTES[antecedente].entries[i].entries[j].rows.length;
                                for (var m = 0; m < tableRowsLenght; m++) {
                                    bgContent[++bgIncrement] = '<tr>';
                                    var tableRowColLenght = ANTECEDENTES[antecedente].entries[i].entries[j].rows[m].length;
                                    for (var n = 0; n < tableRowColLenght; n++) {
                                        bgContent[++bgIncrement] = '<td class="' + ANTECEDENTES[antecedente].entries[i].entries[j].colStyles[n] + '">';
                                        bgContent[++bgIncrement] = ANTECEDENTES[antecedente].entries[i].entries[j].rows[m][n];
                                        bgContent[++bgIncrement] = '</td>';
                                    }
                                    bgContent[++bgIncrement] = '</tr>';
                                }

                                bgContent[++bgIncrement] = '</tbody>';
                                bgContent[++bgIncrement] = '</table>';
                            }
                        }

                    }

                }
            }

            // fecha section de antecedente (FIM)
            bgContent[++bgIncrement] = '</section>';
        }

        // ======================= Popular o menu para mobile ======================= //
        var bgSideMenuMobile = [];
        var bgSMMIncrement = -1;

        // abre div do menu mobile (INICIO)
        bgSideMenuMobile[++bgSMMIncrement] = '<div class="select-menu-jump">';
        bgSideMenuMobile[++bgSMMIncrement] = '<select class="select-nav" name="forma" onchange="location = this.value;">';
        bgSideMenuMobile[++bgSMMIncrement] = '<option value selected>Selecione um Antecedente...</option>';

        // popular menu com os nomes dos antecedentes
        for (var antecedente = 0; antecedente < ANTECEDENTES_LENGHT; antecedente++) {
            
            bgSideMenuMobile[++bgSMMIncrement] = '<option value="#' + ANTECEDENTES[antecedente].id + '">';

            if (ANTECEDENTES[antecedente].isVariant === true) {
                bgSideMenuMobile[++bgSMMIncrement] = ANTECEDENTES[antecedente].menuName;
            } else {
                bgSideMenuMobile[++bgSMMIncrement] = ANTECEDENTES[antecedente].name;
            }
            
            bgSideMenuMobile[++bgSMMIncrement] = '</option>';
            
        }

        // fecha div do menu mobile (FIM)
        bgSideMenuMobile[++bgSMMIncrement] = '</select>';
        bgSideMenuMobile[++bgSMMIncrement] = '</div>';

        // ======================= Popular o menu para desktop menu ======================= //
        var bgSideMenu = [];
        var bgSMIncrement = -1;

        // abre div do menu (INICIO)
        bgSideMenu[++bgSMIncrement] = '<nav class="sidebar-menu" style="top: auto; position: unset;">';
        bgSideMenu[++bgSMIncrement] = '<ul id="quick-menu" class="quick-menu-tier-1">';
        bgSideMenu[++bgSMIncrement] = '<li class="quick-menu-item">';
        bgSideMenu[++bgSMIncrement] = '<div class="quick-menu-item-label">';
        bgSideMenu[++bgSMIncrement] = '<a class="quick-menu-item-link" href="#AntecedentesDetalhes">Antecedentes</a>';
        bgSideMenu[++bgSMIncrement] = '</div></li>';
        bgSideMenu[++bgSMIncrement] = '<ul id="quick-menu-tier2" class="quick-menu-tier-2">';

        // popular menu com os nomes dos antecedentes
        for (var antecedente = 0; antecedente < ANTECEDENTES_LENGHT; antecedente++) {
            bgSideMenu[++bgSMIncrement] = '<li class="quick-menu-item"><div class="quick-menu-item-label">';
            bgSideMenu[++bgSMIncrement] = '<a class="quick-menu-item-link" href="#' + ANTECEDENTES[antecedente].id + '">';

            if (ANTECEDENTES[antecedente].isVariant === true) {
                bgSideMenu[++bgSMIncrement] = ANTECEDENTES[antecedente].menuName;
            } else {
                bgSideMenu[++bgSMIncrement] = ANTECEDENTES[antecedente].name;
            }
            
            bgSideMenu[++bgSMIncrement] = '</a></div></li>';
            
        }

        // fecha div do menu (FIM)
        bgSideMenu[++bgSMIncrement] = '</ul></ul></nav>';

        // retorna o conteudo das arrays
        $(SECTION_BODY).html(bgContent.join(""));
        $(MENU_MOBILE).html(bgSideMenuMobile.join(""));
        $(SIDEMENU).html(bgSideMenu.join(""));
    });
}

$(document).ready(async function () {
    await loadAntecedentesIntoPage(BG_JSON_URL);
    $('.magias-hover').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        placement: "auto",
        offset: [10, 0]
    });
});