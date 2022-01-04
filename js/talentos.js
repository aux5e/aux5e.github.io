"use strict";
const JSON_URL = "/data/talentos.json";

async function loadIntoTable(url, table) {
  const sectionBody = document.getElementsByClassName("talentos");

  await $.getJSON(url, function (talentos) {
    const talentosValues = Object.keys(talentos.data);
    const talentosArray = Object.values(talentos.data);
    const talentosLenght = Object.keys(talentos.data).length;

    // Limpa o corpo da tabela
    sectionBody.innerHTML = "";

    // Popular o corpo da tabela
    var r = [];
    var j = -1;
    for (var row = 0; row < talentosLenght; row++) {
      r[++j] = '<div id="Talentos' + talentosArray[row].name.replace(/\s+/g, ''); + '">';

      r[++j] = '<h4 class="subtitulo">' + talentosArray[row].name + '</h4>';

      r[++j] = '</div>';
    }

    $(tableBody).html(r.join(""));
  });
}

$(document).ready(async function () {
  await loadIntoTable(JSON_URL, document.getElementById("pagecontent"));
});