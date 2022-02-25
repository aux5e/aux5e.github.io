"use strict";
var path = window.location.pathname;
var page = path.split("/").pop();
var pageName = page.split(".")[0]; // <-- pega só nome da página, retira ".html"
const JSON_URL = "/data/subclasses/" + pageName + ".json";

async function loadSubClassIntoPage(url) {
    const sectionBody = document.getElementById("subclasses");

    await $.getJSON(url, function(classeDt) {
        const classe = Object.values(classeDt.class);
        console.log(Object.values(classeDt.subclasses));
        const subclasse = spellToLink(Object.values(classeDt.subclasses));
        console.log(subclasse);
        const subclasseLenght = Object.keys(classeDt.subclasses).length;

        // Limpa o corpo da pagina
        sectionBody.innerHTML = "";

        // Popular o corpo da tabela
        var r = [];
        var j = -1;
        r[++j] = '<h2 class="subtitulo">' + classe[0].subclassTitle + "</h2>";

        // CLASSE ENTRIES
        if (classe[0].entries) {
            var classeentriesLenght = classe[0].entries.length;

            for (var classentriesRow = 0; classentriesRow < classeentriesLenght; classentriesRow++) {
                r[++j] = '<p>' + classe[0].entries[classentriesRow] + '</p>';
            }
        }

        r[++j] = '<div class="subClass__Items">';
        r[++j] = '<div class="accordion" id="accordionSubclasses">';

        for (var row = 0; row < subclasseLenght; row++) {
            r[++j] = '<div class="accordion-item">';
            r[++j] = '<h2 class="accordion-header" id="heading_' + subclasse[row].id + '">';
            r[++j] = '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_' + subclasse[row].id + '" aria-expanded="true" aria-controls="collapse_' + subclasse[row].id + '">';
            r[++j] = '<div class="subClass__Btn">';
            r[++j] = '<div class="subClass__Title"><h3>' + subclasse[row].name + '<span class="badge">' + subclasse[row].source + ' pg. ' + subclasse[row].page + '</h3>' + '</span>' + '</div>';
            r[++j] = '<div class="subClass__Desc">';

            r[++j] = '</div></button></h2>';

            r[++j] = '<div id="collapse_' + subclasse[row].id + '" class="accordion-collapse collapse" aria-labelledby="heading_' + subclasse[row].id + '" data-bs-parent="#accordionSubClasse">';
            r[++j] = '<div class="accordion-body">';

            // SUBCLASSE DETAILS ENTRIES
            if (subclasse[row].entries) {
                var classeentriesLenght = subclasse[row].entries.length;

                for (var classentriesRow = 0; classentriesRow < classeentriesLenght; classentriesRow++) {
                    if (typeof subclasse[row].entries[classentriesRow] === 'string') {
                        r[++j] = '<p>' + subclasse[row].entries[classentriesRow] + '</p>';
                    }
                }
            }

            // IF RESTRIÇÃO
            if (subclasse[row].restriction) {
                r[++j] = '<p><strong>Restrição:</strong> ' + subclasse[row].restriction + '</p>';
            }

            // SUBCLASSE CONTENT

            // LISTA DE MAGIA
            if (subclasse[row].entries) {
                var classeentriesLenght = classe[0].entries.length;
                for (var cEntriesTableRow = 0; cEntriesTableRow < classeentriesLenght; cEntriesTableRow++) {
                    if (typeof subclasse[row].entries[cEntriesTableRow] === 'object' && subclasse[row].entries[cEntriesTableRow].type === "entries") {
                        if (subclasse[row].entries[cEntriesTableRow].name) {

                            // Nome da Lista de Magia 
                            if (subclasse[row].entries[cEntriesTableRow].name === "Lista Expandida de Magias") {
                                r[++j] = '<h4>' + subclasse[row].entries[cEntriesTableRow].name + '</h4>';
                            }

                            // Entries comuns da Lista de Magias
                            var cleLenght = subclasse[row].entries[cEntriesTableRow].entries.length;
                            for (var i = 0; i < cleLenght; i++) {
                                if (typeof subclasse[row].entries[cEntriesTableRow].entries[i] === 'string') {
                                    r[++j] = '<p>' + subclasse[row].entries[cEntriesTableRow].entries[i] + '</p>';
                                }

                                // Tabela da Lista de Magias
                                if (typeof subclasse[row].entries[cEntriesTableRow].entries[i] === 'object' && subclasse[row].entries[cEntriesTableRow].entries[i].type === "table") {
                                    r[++j] = '<h5><b>' + subclasse[row].entries[cEntriesTableRow].entries[i].caption + '</b></h5>';
                                    r[++j] = '<table class="table table-bordered table-striped compact-table" style="font-size: 0.9em; margin-bottom: 35px">';
                                    r[++j] = '<thead><tr>';

                                    // Cabeçalho da tabela
                                    var colLablelsLenght = subclasse[row].entries[cEntriesTableRow].entries[i].colLabels.length;
                                    for (var l = 0; l < colLablelsLenght; l++) {
                                        r[++j] = '<th class="' + subclasse[row].entries[cEntriesTableRow].entries[i].colStyles[l] + '" scope="col">';
                                        r[++j] = subclasse[row].entries[cEntriesTableRow].entries[i].colLabels[l];
                                        r[++j] = '</th>';
                                    }
                                    r[++j] = '</tr></thead><tbody>';

                                    var tableRowsLenght = subclasse[row].entries[cEntriesTableRow].entries[i].rows.length;
                                    for (var m = 0; m < tableRowsLenght; m++) {
                                        r[++j] = '<tr>';
                                        var tableRowColLenght = subclasse[row].entries[cEntriesTableRow].entries[i].rows[m].length;
                                        for (var n = 0; n < tableRowColLenght; n++) {
                                            r[++j] = '<td class="' + subclasse[row].entries[cEntriesTableRow].entries[i].colStyles[n] + '">';
                                            r[++j] = subclasse[row].entries[cEntriesTableRow].entries[i].rows[m][n];
                                            r[++j] = '</td>';
                                        }
                                        r[++j] = '</tr>';
                                    }

                                    r[++j] = '</tbody>';
                                    r[++j] = '</table>';
                                }
                            }
                        }
                    }
                }
            }

            // ENTRIES COMUNS
            if (subclasse[row].subclassFeatures) {
                var scfeaturesLenght = subclasse[row].subclassFeatures.length;

                for (var scfeaturesRow = 0; scfeaturesRow < scfeaturesLenght; scfeaturesRow++) {
                    r[++j] = '<h4>' + '<span class="badge rounded-pill"><span>' + subclasse[row].subclassFeatures[scfeaturesRow].level + '</span></span>' + subclasse[row].subclassFeatures[scfeaturesRow].name + ' <span class="sbFeatureSrc">(' + subclasse[row].subclassFeatures[scfeaturesRow].source + ' pg. ' + subclasse[row].subclassFeatures[scfeaturesRow].page + ')</span>' + '</h4>';

                    var scentries = subclasse[row].subclassFeatures[scfeaturesRow].entries;
                    var scentriesLenght = scentries.length;
                    for (var scfentriesRow = 0; scfentriesRow < scentriesLenght; scfentriesRow++) {
                        if (typeof scentries[scfentriesRow] === 'string') {
                            r[++j] = '<p>' + scentries[scfentriesRow] + '</p>';
                        }

                        // Entries com cards
                        if (typeof scentries[scfentriesRow] === 'object' && scentries[scfentriesRow].type === "card") {
                            r[++j] = '<div class="card relac-raca" style="margin-top: 22px;margin-bottom: 22px;">';
                            r[++j] = '<div class="card-body"">';
                            r[++j] = '<h6 style="text-transform: uppercase;">' + scentries[scfentriesRow].name + '</h6>';

                            var pLenght = scentries[scfentriesRow].entries.length;
                            for (var p = 0; p < pLenght; p++) {
                                r[++j] = '<p>' + scentries[scfentriesRow].entries[p] + '</p>';
                            }

                            r[++j] = '</div></div>';
                        }

                        // ENTRIES WITH OPTIONS
                        if (typeof scentries[scfentriesRow] === 'object' && scentries[scfentriesRow].type === "options") {

                            var scoentriesLenght = scentries[scfentriesRow].entries.length;
                            for (var scoentriesRow = 0; scoentriesRow < scoentriesLenght; scoentriesRow++) {

                                var scoeentriesLenght = scentries[scfentriesRow].entries[scoentriesRow].entries.length;
                                for (var scoeentriesRow = 0; scoeentriesRow < scoeentriesLenght; scoeentriesRow++) {
                                    // Se a entry é string
                                    if (typeof scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow] === 'string') {
                                        if (scoeentriesRow == 0) {
                                            r[++j] = '<p><strong>' + scentries[scfentriesRow].entries[scoentriesRow].name + '.</strong> ';
                                        } else { r[++j] = '<p>' }
                                        r[++j] = scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow];
                                        r[++j] = '</p>';
                                    }

                                    // Se a entry é uma lista
                                    if (typeof scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow] === 'object' && scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow].type === "list") {
                                        r[++j] = '<ul>'

                                        var listEntriesLenght = scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow].items.length;
                                        for (var listEntriesRow = 0; listEntriesRow < listEntriesLenght; listEntriesRow++) {
                                            r[++j] = '<li>' + scentries[scfentriesRow].entries[scoentriesRow].entries[scoeentriesRow].items[listEntriesRow] + '</li>';
                                        }

                                        r[++j] = '</ul>';
                                    }
                                }
                            }
                        }

                        // Entries de Entries
                        if (typeof scentries[scfentriesRow] === 'object' && scentries[scfentriesRow].type === "entries") {

                            var scoeentriesLenght = scentries[scfentriesRow].entries.length;
                            for (var scoeentriesRow = 0; scoeentriesRow < scoeentriesLenght; scoeentriesRow++) {
                                if (typeof scentries[scfentriesRow].entries[scoeentriesRow] === 'string') {
                                    if (scoeentriesRow == 0) {
                                        r[++j] = '<p><strong>' + scentries[scfentriesRow].name + '.</strong> ';
                                    } else { r[++j] = '<p>' }

                                    r[++j] = scentries[scfentriesRow].entries[scoeentriesRow];
                                    r[++j] = '</p>';
                                }

                                // Entries de Entries de Entries
                                if (scentries[scfentriesRow].entries[scoeentriesRow].name) {

                                    var scoeentriesLenght2 = scentries[scfentriesRow].entries[scoeentriesRow].entries.length;

                                    for (var i = 0; i < scoeentriesLenght2; i++) {
                                        if (i == 0) {
                                            r[++j] = '<p><strong>' + scentries[scfentriesRow].entries[i].name + '.</strong> ';
                                        } else { r[++j] = '<p>' }

                                        r[++j] = scentries[scfentriesRow].entries[scoeentriesRow].entries[i];
                                        r[++j] = '</p>';
                                    }
                                }
                            }
                        }

                        // Entries de Listas
                        if (typeof scentries[scfentriesRow] === 'object' && scentries[scfentriesRow].type === "list") {
                            r[++j] = '<ul>'

                            var listEntriesLenght = scentries[scfentriesRow].items.length;
                            for (var listEntriesRow = 0; listEntriesRow < listEntriesLenght; listEntriesRow++) {
                                r[++j] = '<li>' + scentries[scfentriesRow].items[listEntriesRow] + '</li>';
                            }

                            r[++j] = '</ul>';
                        }

                        // Entries de Tabela
                        if (typeof scentries[scfentriesRow] === 'object' && scentries[scfentriesRow].type === "table") {
                            r[++j] = '<h5><b>' + scentries[scfentriesRow].caption + '</b></h5>';
                            r[++j] = '<table class="table table-bordered table-striped compact-table" style="font-size: 0.9em; margin-bottom: 35px">';
                            r[++j] = '<thead><tr>';

                            // Cabeçalho da tabela
                            var colLablelsLenght = scentries[scfentriesRow].colLabels.length;
                            for (var l = 0; l < colLablelsLenght; l++) {
                                r[++j] = '<th class="' + scentries[scfentriesRow].colStyles[l] + '" scope="col">';
                                r[++j] = scentries[scfentriesRow].colLabels[l];
                                r[++j] = '</th>';
                            }
                            r[++j] = '</tr></thead><tbody>';

                            var tableRowsLenght = scentries[scfentriesRow].rows.length;
                            for (var m = 0; m < tableRowsLenght; m++) {
                                r[++j] = '<tr>';
                                var tableRowColLenght = scentries[scfentriesRow].rows[m].length;
                                for (var n = 0; n < tableRowColLenght; n++) {
                                    r[++j] = '<td class="' + scentries[scfentriesRow].colStyles[n] + '">';
                                    r[++j] = scentries[scfentriesRow].rows[m][n];
                                    r[++j] = '</td>';
                                }
                                r[++j] = '</tr>';
                            }

                            r[++j] = '</tbody>';
                            r[++j] = '</table>';
                        }
                    }
                }
            }

            r[++j] = '</div></div></div>';

        }

        r[++j] = '</div></div>';

        $(sectionBody).html(r.join(""));
    });
}

$(document).ready(async function() {
    await loadSubClassIntoPage(JSON_URL);
    $('.magias-hover').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        placement: "auto",
        offset: [10, 0]
    });
});