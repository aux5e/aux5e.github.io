async function loadIntoTable(url, table) {
  const tableBody = document.getElementById("tbody-lista-de-magias");

  // pegar nome da página para filtrar classe
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var pageName = page.split(".")[0]; // <-- added this line

  await $.getJSON(url, function (magias) {
    const magiasValues = Object.keys(magias.data);
    const siteUrl = "https://aux5e.github.io";
    const magiasArray1 = Object.values(magias.data);
    const magiasLenght = Object.keys(magias.data).length;

    let magiasArray = [];
    for (let i = 0; i < magiasLenght; i++) {
      if (magiasArray1[i][pageName] == true) {
        magiasArray.push(magiasArray1[i]);
      }
    }

    const magiasArrayLenght = magiasArray.length;

    // Limpa o corpo da tabela
    tableBody.innerHTML = "";

    // Popular o corpo da tabela
    var r = [];
    var j = -1;
    for (var row = 0; row < magiasArrayLenght; row++) {
        r[++j] = '<tr onclick=';
        r[++j] = 'window.location="' + siteUrl + "/magias.html?nome=" + magiasArray[row];
        r[++j] =
          '"><th scope="row" class="text-center align-middle magiaCirculoCol">';
        if (magiasArray[row].circulo == 0) {
          r[++j] =
            '<span style="visibility:hidden;">0</span>Truque<span style="visibility:hidden;">0</span>';
        } else {
          r[++j] = magiasArray[row].circulo;
          r[++j] = "º";
        }
        r[++j] = "</th>";
        r[++j] = '<td><div class="magiaNomeRow1">';
        r[++j] = magiasArray[row].nome;
        if (magiasArray[row].concentracao == true) {
          r[++j] = '<span class="concentSpan"></span>';
        }
        r[++j] = '</div><div class="magiaNomeRow2">';
        r[++j] = magiasArray[row].escola + " • " + magiasArray[row].componentes;
        r[++j] = "</div></td>";
        r[++j] = '<td class="align-middle magiaInglesCol">';
        r[++j] = magiasArray[row].nome_ingles;
        r[++j] = '</td><td class="align-middle magiaOutrasCol">';
        r[++j] = magiasArray[row].duracao;
        r[++j] = '</td><td class="align-middle magiaOutrasCol">';
        r[++j] = magiasArray[row].alcance;
        r[++j] = '</td><td class="text-center align-middle magiaOutrasCol">';
        r[++j] = magiasArray[row].fonte;
        r[++j] = "</td></tr>";
    }

    $(tableBody).html(r.join(""));
  });
}

$(document).ready(async function () {
  await loadIntoTable(
    "/data/magias.json",
    document.getElementById("table-lista-de-magias")
  );

  $(document).ready(function () {
    $("#table-lista-de-magias").DataTable({
      responsive: true,
      language: {
        url: "/data/dataTables.ptbr.json",
      },
      columnDefs: [
        {
          targets: [0],
          orderData: [0, 1],
        },
        {
          targets: [1],
          orderData: [1, 0],
        }
      ],
      pageLength: 25,
      paging: true,
      autoWidth: true,
    });
  });
});
