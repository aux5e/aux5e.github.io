"use strict";
const JSON_URL = "/data/talentos.json";

async function loadTalentosIntoPage(url) {
  const SECTION_BODY = document.getElementsByClassName("talentos");
  const QUICK_MENU = document.getElementById("quick-menu-div");
  const MOBILE_MENU = document.getElementsByClassName("secondary-content-mobile");

  await $.getJSON(url, function (talentos) {
    const TALENTO = Object.values(talentos.feat);
    const TALENTO_LENGHT = Object.keys(talentos.feat).length;

    // Limpa o corpo da pagina
    SECTION_BODY.innerHTML = "";
    QUICK_MENU.innerHTML = "";
    MOBILE_MENU.innerHTML = "";

    // Popular o corpo da pagina
    var rTalentoContent = [];
    var cTalentoContent = -1;
    for (var row = 0; row < TALENTO_LENGHT; row++) {
        var talentoNameId = TALENTO[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');

      rTalentoContent[++cTalentoContent] = '<div id="Talentos' + talentoNameId + '" class="detalhes__talentos">';

      rTalentoContent[++cTalentoContent] = '<h4 class="subtitulo">';
      
      rTalentoContent[++cTalentoContent] = TALENTO[row].name;
      rTalentoContent[++cTalentoContent] = '<span class="talentos__source">';
      rTalentoContent[++cTalentoContent] = TALENTO[row].source + ", pg " + TALENTO[row].page;
      rTalentoContent[++cTalentoContent] = "</span>";

      rTalentoContent[++cTalentoContent] = "</h4>";

      // Pre-requisitos
      if (TALENTO[row].prerequisite) {
        rTalentoContent[++cTalentoContent] = '<p class="prerequisite">Pré-requisito: ';

        // ATRIBUTOS - assumindo que o requisito de atributo é sempre 13 ou maior (verdade até os lançamentos da Galapagos do dia 04-01-2022)
        if (TALENTO[row].prerequisite[0].ability) {
          if (TALENTO[row].prerequisite[0].ability[0].str) {rTalentoContent[++cTalentoContent] = "Força ";}
          if (TALENTO[row].prerequisite[0].ability[0].dex) {rTalentoContent[++cTalentoContent] = "Destreza ";}
          if (TALENTO[row].prerequisite[0].ability[0].con) {rTalentoContent[++cTalentoContent] = "Constituição ";}
          if (TALENTO[row].prerequisite[0].ability[0].int) {rTalentoContent[++cTalentoContent] = "Inteligência ";}
          if (TALENTO[row].prerequisite[0].ability[0].wis) {rTalentoContent[++cTalentoContent] = "Sabedoria ";}
          if (TALENTO[row].prerequisite[0].ability[0].cha) {rTalentoContent[++cTalentoContent] = "Carisma ";}
          if (TALENTO[row].prerequisite[0].ability[1]) {
            if (TALENTO[row].prerequisite[0].ability[1].str) {rTalentoContent[++cTalentoContent] = "ou Força ";}
            if (TALENTO[row].prerequisite[0].ability[1].dex) {rTalentoContent[++cTalentoContent] = "ou Destreza ";}
            if (TALENTO[row].prerequisite[0].ability[1].con) {rTalentoContent[++cTalentoContent] = "ou Constituição ";}
            if (TALENTO[row].prerequisite[0].ability[1].int) {rTalentoContent[++cTalentoContent] = "ou Inteligência ";}
            if (TALENTO[row].prerequisite[0].ability[1].wis) {rTalentoContent[++cTalentoContent] = "ou Sabedoria ";}
            if (TALENTO[row].prerequisite[0].ability[1].cha) {rTalentoContent[++cTalentoContent] = "ou Carisma ";}
          }
          rTalentoContent[++cTalentoContent] = "13 ou maior";
        }

        // CONJURAÇÂO
        if (TALENTO[row].prerequisite[0].spellcasting === true) {
          rTalentoContent[++cTalentoContent] = "a habilidade de conjurar ao menos uma magia";
        }

        // PROFICIENCIA
        if (TALENTO[row].prerequisite[0].proficiency) {
          rTalentoContent[++cTalentoContent] = "proficiência com ";

          // COM ARMADURA
          if (TALENTO[row].prerequisite[0].proficiency[0].armor) {
            if (TALENTO[row].prerequisite[0].proficiency[0].armor == "light") {rTalentoContent[++cTalentoContent] = "armaduras leves";}
            if (TALENTO[row].prerequisite[0].proficiency[0].armor == "medium") {rTalentoContent[++cTalentoContent] = "armaduras médias";}
            if (TALENTO[row].prerequisite[0].proficiency[0].armor == "heavy") {rTalentoContent[++cTalentoContent] = "armaduras pesadas";}
          }
        }

        // RAÇAS
        if (TALENTO[row].prerequisite[0].race) {
          var race = TALENTO[row].prerequisite[0].race;
          var rLenght = race.length;

          for (var i = 0; i < rLenght; i++) {
            var subrace = TALENTO[row].prerequisite[0].race[i].subrace;

            if (TALENTO[row].prerequisite[0].race[i].name) {rTalentoContent[++cTalentoContent] =race[i].name.charAt(0).toUpperCase() + race[i].name.slice(1);}
            if (TALENTO[row].prerequisite[0].race[i].subrace) {rTalentoContent[++cTalentoContent] = " (" + subrace.charAt(0).toUpperCase() + subrace.slice(1) + ")";}
            // PARA 2 RAÇAS
            if (rLenght == 2 && i == 0) {rTalentoContent[++cTalentoContent] = " ou ";}
            // PARA 3 RAÇAS OU MAIS
            if (rLenght >= 3 && i < rLenght - 2) {rTalentoContent[++cTalentoContent] = ", ";}
            if (rLenght >= 3 && i == rLenght - 2) {rTalentoContent[++cTalentoContent] = " ou ";}
          }
        }
      }

      // ENTRIES
      var entriesList = [];
      var addEntry = -1;

      if (TALENTO[row].entries) {
        var entriesLenght = TALENTO[row].entries.length;

        for (var entriesRow = 0; entriesRow < entriesLenght; entriesRow++) {
          if (typeof TALENTO[row].entries[entriesRow] === "string" || TALENTO[row].entries[entriesRow] instanceof String) {
            rTalentoContent[++cTalentoContent] = "<p>" + TALENTO[row].entries[entriesRow] + "</p>";
          }

          // LISTA DE ITENS
          if (TALENTO[row].entries[entriesRow].type == "list") {
            var entriesListLenght = TALENTO[row].entries[entriesRow].items.length;

            for (var entriesListRow = 0; entriesListRow < entriesListLenght; entriesListRow++) {
              entriesList[++addEntry] = "<li>" + TALENTO[row].entries[entriesRow].items[entriesListRow] + "</li>";
            }
          }
        }

        // AUMENTO DE ATRIBUTOS
        

        rTalentoContent[++cTalentoContent] = "<ul>";

        if (TALENTO[row].ability) {
          
          // UNICO ATRIBUTO
          var abilitiesOne = [];
          var addAbiOne = -1;

          if (TALENTO[row].ability.choose === undefined) {
              if (TALENTO[row].ability.str) {abilitiesOne[++addAbiOne] = "Força";}
              if (TALENTO[row].ability.dex) {abilitiesOne[++addAbiOne] = "Destreza"}
              if (TALENTO[row].ability.con) {abilitiesOne[++addAbiOne] = "Constituição"}
              if (TALENTO[row].ability.int) {abilitiesOne[++addAbiOne] = "Inteligência"}
              if (TALENTO[row].ability.wis) {abilitiesOne[++addAbiOne] = "Sabedoria"}
              if (TALENTO[row].ability.cha) {abilitiesOne[++addAbiOne] = "Carisma"}
          }

          // MAIS DE UM ATRIBUTO
          var abilitiesToChoose = [];
          var addAbility = -1;
          if (TALENTO[row].ability.choose) {var AttChooseFrom = TALENTO[row].ability.choose[0].from; var choosefromLenght = AttChooseFrom.length;}

          if (TALENTO[row].ability.choose) {
            
              for (var chooseRow = 0; chooseRow < choosefromLenght; chooseRow++) {                  
                  var chooseAtt = TALENTO[row].ability.choose[0].from[chooseRow].toString();

                  if (choosefromLenght <= 5 && chooseAtt === "str") {abilitiesToChoose[++addAbility] = "Força";}
                  if (choosefromLenght <= 5 && chooseAtt === "dex") {abilitiesToChoose[++addAbility] = "Destreza";}
                  if (choosefromLenght <= 5 && chooseAtt === "con") {abilitiesToChoose[++addAbility] = "Constituição";}
                  if (choosefromLenght <= 5 && chooseAtt === "int") {abilitiesToChoose[++addAbility] = "Inteligência";}
                  if (choosefromLenght <= 5 && chooseAtt === "wis") {abilitiesToChoose[++addAbility] = "Sabedoria";}
                  if (choosefromLenght <= 5 && chooseAtt === "cha") {abilitiesToChoose[++addAbility] = "Carisma";}

                  // PARA 2 ATRIBUTOS
                  if (choosefromLenght == 2 && chooseRow == 0) {abilitiesToChoose[++addAbility] = " ou ";}
                  // PARA 3 ATRIBUTOS OU MAIS
                  if (choosefromLenght >= 3 && choosefromLenght < 5 && chooseRow < choosefromLenght - 2) {abilitiesToChoose[++addAbility] = ", ";}
                  if (choosefromLenght >= 3 && choosefromLenght < 5 && chooseRow == choosefromLenght - 2) {abilitiesToChoose[++addAbility] = " ou ";}
              }
              var abilityAmount = TALENTO[row].ability.choose[0].amount;
          }

          if (TALENTO[row].ability.choose && choosefromLenght > 5) {rTalentoContent[++cTalentoContent] = "<li>" + "Aumente o valor desse atributo ";} else {rTalentoContent[++cTalentoContent] = "<li>" + "Aumente seu valor de ";}
          if (abilitiesOne.length != 0) {rTalentoContent[++cTalentoContent] = abilitiesOne.join("");}
          if (abilitiesToChoose.lenght != 0) {rTalentoContent[++cTalentoContent] = abilitiesToChoose.join("");}
          rTalentoContent[++cTalentoContent] = " em ";
          if (TALENTO[row].ability.choose === undefined) {rTalentoContent[++cTalentoContent] = "1";}
          if (TALENTO[row].ability.choose) {rTalentoContent[++cTalentoContent] = abilityAmount;}
          rTalentoContent[++cTalentoContent] = ", até no máximo 20." + "</li>";
        }

        rTalentoContent[++cTalentoContent] = entriesList.join("");

        rTalentoContent[++cTalentoContent] = "</ul>";
      }

      rTalentoContent[++cTalentoContent] = "</div>";
    }

    // Popular o corpo do menu
    var rQM = [];
    var c = -1;
    rQM[++c] = '<nav id="sidebar-menu" style="top: auto; position: unset;">';
    rQM[++c] = '<ul id="quick-menu" class="quick-menu-tier-1">';
    rQM[++c] = '<li class="quick-menu-item">';
    rQM[++c] = '<div class="quick-menu-item-label">';
    rQM[++c] = '<a class="quick-menu-item-link" href="#TalentosDetalhes">Talentos</a>';
    rQM[++c] = '</div></li>';
    rQM[++c] = '<nav class="nav nav-pills flex-column">';
    rQM[++c] = '<ul id="quick-menu-tier2" class="quick-menu-tier-2 nav">';

    for (var row = 0; row < TALENTO_LENGHT; row++) {
      var talentoNameLink = TALENTO[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');

      rQM[++c] = '<li class="quick-menu-item"><div class="quick-menu-item-label">';

      rQM[++c] = '<a class="nav-link quick-menu-item-link"';
      rQM[++c] = 'href="#Talentos' + talentoNameLink + '">';
      rQM[++c] = TALENTO[row].name;
      rQM[++c] = '</a>';

      rQM[++c] = '</div></li>';
    }
    
    rQM[++c] = '</ul></nav></nav>';

    // Popular o corpo do menu
    var rMM = [];
    var c = -1;
    rMM[++c] = '<div class="select-menu-jump">';
    rMM[++c] = '<select class="select-nav" name="forma" onchange="location = this.value;">';
    rMM[++c] = '<option value selected>Selecione um Talento...</option>';
      
    for (var row = 0; row < TALENTO_LENGHT; row++) {
      var talentoNameLink = TALENTO[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');

      rMM[++c] = '<option ';
      rMM[++c] = 'value="#Talentos' + talentoNameLink + '">';
      rMM[++c] = TALENTO[row].name;
      rMM[++c] = '</option>';
    }
    
    rMM[++c] = '</select>';
    rMM[++c] = '</div>';

    $(SECTION_BODY).html(rTalentoContent.join(""));
    $(QUICK_MENU).html(rQM.join(""));
    $(MOBILE_MENU).html(rMM.join(""));    
  });
}

$(document).ready(async function () {
    await loadTalentosIntoPage(JSON_URL);
});