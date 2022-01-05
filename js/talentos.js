"use strict";
const JSON_URL = "/data/talentos.json";

async function loadIntoPage(url) {
  const sectionBody = document.getElementsByClassName("talentos");

  await $.getJSON(url, function (talentos) {
    const talento = Object.values(talentos.feat);
    const talentosLenght = Object.keys(talentos.feat).length;

    // Limpa o corpo da pagina
    sectionBody.innerHTML = "";

    // Popular o corpo da pagina
    var rTalentoContent = [];
    var cTalentoContent = -1;
    for (var row = 0; row < talentosLenght; row++) {
        var talentoNameId = talento[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');

      rTalentoContent[++cTalentoContent] = '<div id="Talentos' + talentoNameId + '" class="detalhes__talentos">';

      rTalentoContent[++cTalentoContent] = '<h4 class="subtitulo">';
      
      rTalentoContent[++cTalentoContent] = talento[row].name;
      rTalentoContent[++cTalentoContent] = '<span class="talentos__source">';
      rTalentoContent[++cTalentoContent] = talento[row].source + ", pg " + talento[row].page;
      rTalentoContent[++cTalentoContent] = "</span>";

      rTalentoContent[++cTalentoContent] = "</h4>";

      // Pre-requisitos
      if (talento[row].prerequisite) {
        rTalentoContent[++cTalentoContent] = '<p class="prerequisite">Pré-requisito: ';

        // ATRIBUTOS - assumindo que o requisito de atributo é sempre 13 ou maior (verdade até os lançamentos da Galapagos do dia 04-01-2022)
        if (talento[row].prerequisite[0].ability) {
          if (talento[row].prerequisite[0].ability[0].str) {rTalentoContent[++cTalentoContent] = "Força ";}
          if (talento[row].prerequisite[0].ability[0].dex) {rTalentoContent[++cTalentoContent] = "Destreza ";}
          if (talento[row].prerequisite[0].ability[0].con) {rTalentoContent[++cTalentoContent] = "Constituição ";}
          if (talento[row].prerequisite[0].ability[0].int) {rTalentoContent[++cTalentoContent] = "Inteligência ";}
          if (talento[row].prerequisite[0].ability[0].wis) {rTalentoContent[++cTalentoContent] = "Sabedoria ";}
          if (talento[row].prerequisite[0].ability[0].cha) {rTalentoContent[++cTalentoContent] = "Carisma ";}
          if (talento[row].prerequisite[0].ability[1]) {
            if (talento[row].prerequisite[0].ability[1].str) {rTalentoContent[++cTalentoContent] = "ou Força ";}
            if (talento[row].prerequisite[0].ability[1].dex) {rTalentoContent[++cTalentoContent] = "ou Destreza ";}
            if (talento[row].prerequisite[0].ability[1].con) {rTalentoContent[++cTalentoContent] = "ou Constituição ";}
            if (talento[row].prerequisite[0].ability[1].int) {rTalentoContent[++cTalentoContent] = "ou Inteligência ";}
            if (talento[row].prerequisite[0].ability[1].wis) {rTalentoContent[++cTalentoContent] = "ou Sabedoria ";}
            if (talento[row].prerequisite[0].ability[1].cha) {rTalentoContent[++cTalentoContent] = "ou Carisma ";}
          }
          rTalentoContent[++cTalentoContent] = "13 ou maior";
        }

        // CONJURAÇÂO
        if (talento[row].prerequisite[0].spellcasting === true) {
          rTalentoContent[++cTalentoContent] = "a habilidade de conjurar ao menos uma magia";
        }

        // PROFICIENCIA
        if (talento[row].prerequisite[0].proficiency) {
          rTalentoContent[++cTalentoContent] = "proficiência com ";

          // COM ARMADURA
          if (talento[row].prerequisite[0].proficiency[0].armor) {
            if (talento[row].prerequisite[0].proficiency[0].armor == "light") {rTalentoContent[++cTalentoContent] = "armaduras leves";}
            if (talento[row].prerequisite[0].proficiency[0].armor == "medium") {rTalentoContent[++cTalentoContent] = "armaduras médias";}
            if (talento[row].prerequisite[0].proficiency[0].armor == "heavy") {rTalentoContent[++cTalentoContent] = "armaduras pesadas";}
          }
        }

        // RAÇAS
        if (talento[row].prerequisite[0].race) {
          var race = talento[row].prerequisite[0].race;
          var rLenght = race.length;

          for (var i = 0; i < rLenght; i++) {
            var subrace = talento[row].prerequisite[0].race[i].subrace;

            if (talento[row].prerequisite[0].race[i].name) {rTalentoContent[++cTalentoContent] =race[i].name.charAt(0).toUpperCase() + race[i].name.slice(1);}
            if (talento[row].prerequisite[0].race[i].subrace) {rTalentoContent[++cTalentoContent] = " (" + subrace.charAt(0).toUpperCase() + subrace.slice(1) + ")";}
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

      if (talento[row].entries) {
        var entriesLenght = talento[row].entries.length;

        for (var entriesRow = 0; entriesRow < entriesLenght; entriesRow++) {
          if (typeof talento[row].entries[entriesRow] === "string" || talento[row].entries[entriesRow] instanceof String) {
            rTalentoContent[++cTalentoContent] = "<p>" + talento[row].entries[entriesRow] + "</p>";
          }

          // LISTA DE ITENS
          if (talento[row].entries[entriesRow].type == "list") {
            var entriesListLenght = talento[row].entries[entriesRow].items.length;

            for (var entriesListRow = 0; entriesListRow < entriesListLenght; entriesListRow++) {
              entriesList[++addEntry] = "<li>" + talento[row].entries[entriesRow].items[entriesListRow] + "</li>";
            }
          }
        }

        // AUMENTO DE ATRIBUTOS
        

        rTalentoContent[++cTalentoContent] = "<ul>";

        if (talento[row].ability) {
          
          // UNICO ATRIBUTO
          var abilitiesOne = [];
          var addAbiOne = -1;

          if (talento[row].ability.choose === undefined) {
              if (talento[row].ability.str) {abilitiesOne[++addAbiOne] = "Força";}
              if (talento[row].ability.dex) {abilitiesOne[++addAbiOne] = "Destreza"}
              if (talento[row].ability.con) {abilitiesOne[++addAbiOne] = "Constituição"}
              if (talento[row].ability.int) {abilitiesOne[++addAbiOne] = "Inteligência"}
              if (talento[row].ability.wis) {abilitiesOne[++addAbiOne] = "Sabedoria"}
              if (talento[row].ability.cha) {abilitiesOne[++addAbiOne] = "Carisma"}
          }

          // MAIS DE UM ATRIBUTO
          var abilitiesToChoose = [];
          var addAbility = -1;
          if (talento[row].ability.choose) {var AttChooseFrom = talento[row].ability.choose[0].from; var choosefromLenght = AttChooseFrom.length;}

          if (talento[row].ability.choose) {
            
              for (var chooseRow = 0; chooseRow < choosefromLenght; chooseRow++) {                  
                  var chooseAtt = talento[row].ability.choose[0].from[chooseRow].toString();

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
              var abilityAmount = talento[row].ability.choose[0].amount;
          }

          if (talento[row].ability.choose && choosefromLenght > 5) {rTalentoContent[++cTalentoContent] = "<li>" + "Aumente o valor desse atributo ";} else {rTalentoContent[++cTalentoContent] = "<li>" + "Aumente seu valor de ";}
          if (abilitiesOne.length != 0) {rTalentoContent[++cTalentoContent] = abilitiesOne.join("");}
          if (abilitiesToChoose.lenght != 0) {rTalentoContent[++cTalentoContent] = abilitiesToChoose.join("");}
          rTalentoContent[++cTalentoContent] = " em ";
          if (talento[row].ability.choose === undefined) {rTalentoContent[++cTalentoContent] = "1";}
          if (talento[row].ability.choose) {rTalentoContent[++cTalentoContent] = abilityAmount;}
          rTalentoContent[++cTalentoContent] = ", até no máximo 20." + "</li>";
        }

        rTalentoContent[++cTalentoContent] = entriesList.join("");

        rTalentoContent[++cTalentoContent] = "</ul>";
      }

      rTalentoContent[++cTalentoContent] = "</div>";
    }

    $(sectionBody).html(rTalentoContent.join(""));
  });
}

async function loadIntoSideMenu(url) {
  const quickMenu = document.getElementById("quick-menu");

  await $.getJSON(url, function (talentos) {
    const talento = Object.values(talentos.feat);
    const talentosLenght = Object.keys(talentos.feat).length;

    // Limpa o corpo do menu
    quickMenu.innerHTML = "";

    // Popular o corpo do menu
    var rQM = [];
    var c = -1;
    rQM[++c] = '<nav class="sidebar-menu" style="top: auto; position: unset;">';
    rQM[++c] = '<ul id="quick-menu" class="quick-menu-tier-1">';
    rQM[++c] = '<li class="quick-menu-item">';
    rQM[++c] = '<div class="quick-menu-item-label">';
    rQM[++c] =  '<a class="quick-menu-item-link" href="#TalentosDetalhes">Talentos</a>';
    rQM[++c] = '</div>';
    rQM[++c] = '</li>';
    rQM[++c] = '<ul id="quick-menu-tier2" class="quick-menu-tier-2">';

    for (var row = 0; row < talentosLenght; row++) {
      var talentoNameLink = talento[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');

      rQM[++c] = '<li class="quick-menu-item">';
      rQM[++c] = '<div class="quick-menu-item-label">';

      rQM[++c] = '<a class="quick-menu-item-link"';
      rQM[++c] = 'href="#Talentos' + talentoNameLink + '">';
      rQM[++c] = talento[row].name;
      rQM[++c] = '</a>';

      rQM[++c] = '</div>';
      rQM[++c] = "</li>";
    }
    
    rQM[++c] = '</ul>';
    rQM[++c] = '</ul>';
    rQM[++c] = '</nav>';
    
    $(quickMenu).html(rQM.join(""));    

  });
}

async function loadIntoMobileMenu(url) {
    const mobileMenu = document.getElementsByClassName("secondary-content-mobile");
  
    await $.getJSON(url, function (talentos) {
      const talento = Object.values(talentos.feat);
      const talentosLenght = Object.keys(talentos.feat).length;
  
      // Limpa o corpo do menu
      mobileMenu.innerHTML = "";
  
      // Popular o corpo do menu
      var rMM = [];
      var c = -1;
      rMM[++c] = '<div class="select-menu-jump">';
      rMM[++c] = '<select class="select-nav" name="forma" onchange="location = this.value;">';
      rMM[++c] = '<option value selected>Selecione um Talento...</option>';
        
      for (var row = 0; row < talentosLenght; row++) {
        var talentoNameLink = talento[row].name.replace(/\s/g, '').replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace("-", '').replace(/ /g, '');
  
        rMM[++c] = '<option ';
        rMM[++c] = 'value="#Talentos' + talentoNameLink + '">';
        rMM[++c] = talento[row].name;
        rMM[++c] = '</option>';
      }
      
      rMM[++c] = '</select>';
      rMM[++c] = '</div>';
      
      $(mobileMenu).html(rMM.join(""));    
  
    });
  }

$(document).ready(async function () {
  await loadIntoPage(JSON_URL);
});

$(document).ready(async function () {
  await loadIntoSideMenu(JSON_URL);
});

$(document).ready(async function () {
    await loadIntoMobileMenu(JSON_URL);
  });