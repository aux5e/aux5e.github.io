"use strict";
var path = window.location.pathname;
var page = path.split("/").pop();
var pageName = page.split(".")[0]; // <-- pega só nome da página, retira ".html"
const JSON_URL = "/data/subclasses/" + pegaName + ".json";

async function loadIntoPage(url) {
  const sectionBody = document.getElementsByClassName("subclasses");

  await $.getJSON(url, function (classe) {
    const classeDt = Object.values(classe.classe);
    const subclasse = Object.values(subclasse.subclasses);
    const subclasseLenght = Object.keys(subclasse.subclasses).length;

    console.log(classeDt);
    console.log(subclasse);

    // Limpa o corpo da pagina
    sectionBody.innerHTML = "";

    // Popular o corpo da tabela
    var r = [];
    var j = -1;
    r[++j] = '<h2 class="subtitulo">' + Trilhas Primitivas + '</h2>';
    for (var row = 0; row < subclasseLenght; row++) {

    }

    $(sectionBody).html(r.join(""));
  });
}
  
$(document).ready(async function () {
  await loadIntoPage(JSON_URL);
});