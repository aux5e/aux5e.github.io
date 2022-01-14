"use strict";
var path = window.location.pathname;
var page = path.split("/").pop();
var pageName = page.split(".")[0]; // <-- pega só nome da página, retira ".html"
const JSON_URL = "/data/subclasses/" + pegaName + ".json";

async function loadIntoPage(url) {
  const sectionBody = document.getElementsByClassName("subclasses");

  await $.getJSON(url, function (subclasse) {
    const subclasse = Object.values(subclasse.feat);
    const subclasseLenght = Object.keys(subclasse.feat).length;

    // Limpa o corpo da pagina
    sectionBody.innerHTML = "";

    // Popular o corpo da tabela
    var r = [];
    var j = -1;
    for (var row = 0; row < subclasseLenght; row++) {

    }

    $(sectionBody).html(r.join(""));
  });
}
  
$(document).ready(async function () {
  await loadIntoPage(JSON_URL);
});