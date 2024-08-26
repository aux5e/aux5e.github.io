async function loadIntoTable(url, table) {
  const TABLE_BODY = document.getElementById("tbody-lista-de-magias");

  await $.getJSON(url, function (magias) {
    const DATA_MAGIA = Object.keys(magias.data);
    const SITE_URL = "https://aux5e.github.io";
    const MAGIAS_ARRAY = Object.values(magias.data);
    const MAGIAS_LENGHT = Object.keys(magias.data).length;

    // Limpa o corpo da tabela
    TABLE_BODY.innerHTML = "";

    // Popular o corpo da tabela
    var r = [];
    var j = -1;
    for (var row = 0; row < MAGIAS_LENGHT; row++) {
      r[++j] = '<tr onclick=';
      r[++j] = 'window.location="' + SITE_URL + "/magias.html?nome=" + DATA_MAGIA[row];
      r[++j] =
        '"><th scope="row" class="text-center align-middle magiaCirculoCol">';
      if (MAGIAS_ARRAY[row].circulo == 0) {
        r[++j] =
          '<span style="visibility:hidden;">0</span>Truque<span style="visibility:hidden;">0</span>';
      } else {
        r[++j] = MAGIAS_ARRAY[row].circulo;
        r[++j] = "º";
      }
      r[++j] = "</th>";
      r[++j] = '<td><div class="magiaNomeRow1">';
      r[++j] = MAGIAS_ARRAY[row].nome;
      if (MAGIAS_ARRAY[row].concentracao == true) {
        r[++j] = '<span class="concentSpan"></span>';
      }
      if (MAGIAS_ARRAY[row].ritual == true) {
        r[++j] = '<span style="border: 1px solid #a9a9a9;border-radius: 999px;font-size: 9px;color: #a9a9a9;margin: 0 0 0 3px;padding: 0px 3px;">R</span>';
      }
      r[++j] = '</div><div class="magiaNomeRow2">';
      r[++j] = MAGIAS_ARRAY[row].escola + " • " + MAGIAS_ARRAY[row].componentes;
      r[++j] = "</div></td>";
      r[++j] = '<td class="align-middle magiaInglesCol">';
      r[++j] = MAGIAS_ARRAY[row].nome_ingles;
      r[++j] = '</td><td class="align-middle magiaOutrasCol">';
      r[++j] = MAGIAS_ARRAY[row].duracao;
      r[++j] = '</td><td class="align-middle magiaOutrasCol">';
      r[++j] = MAGIAS_ARRAY[row].alcance;
      r[++j] = '</td><td class="text-center align-middle magiaOutrasCol">';
      r[++j] = MAGIAS_ARRAY[row].fonte;
      r[++j] = "</td></tr>";
    }

    $(TABLE_BODY).html(r.join(""));
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
