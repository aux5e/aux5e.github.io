/** INCLUDE HTML FILE */
$(function () {
  var includes = $("[data-include]");
  jQuery.each(includes, function () {
    var file = "/partial/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

/** ADD CLASS "active" ON MENU LINK */
jQuery(function ($) {
  var pgurl = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  $("#nav-menu .nav-item a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == "")
      $(this).addClass("active");
    // $(this).parent("li").addClass("active");
  });
});

/** SECONDARY CONTENT POSITION (sticky menu) */
$(document).ready(function () {
    var o = $(".col-9").height() - $(".secondary-content").height();
    $(window).scroll(function () {
        var t = $(this).scrollTop();
        $(".secondary-content").height();
        t <= 150 ? $(".secondary-content").css({ position: "unset", top: "auto" }) : t >= o ? $(".secondary-content").css({ position: "absolute", bottom: "0", top: "auto" }) : $(".secondary-content").css({ position: "fixed", top: "20px" });
    });
});

// slugify remove acentos, caracteres especiais e substitui espaços com hífens
function slugify(value) {
    return value.replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace(/ /g, "-");
}

/** Replace regular expression ex. {@spell} {@condition} etc */
const EXPRESSION_TYPE = {
    "spell": "magias",
    "condition": "condicoes",
    "creature": "criaturas"
}

window.spellToLink = function spellToLink(datas) {
    return datas.map(data => {
        data.subclassFeatures = data.subclassFeatures.map(features => {
            features.entries = features.entries.map(entry => {
                if (typeof entry === 'string') {
                    //console.log(entry);
                    const REGEX = new RegExp("{@(?<type>\\w+)\\s+(?<name>.+?)}", 'gi');
                    const REGEX_MATCH = entry.match(REGEX);
                    if (REGEX_MATCH) {
                        let type, name = null;
                        REGEX_MATCH.forEach(value => {
                            const GROUP = value.match(/{@(?<type>\w+)\s+(?<name>.+?)}/i).groups;
                            name = GROUP.name;
                            type = GROUP.type;
                            slugId = slugify(GROUP.name);

                            if (type === 'spell') {
                                var link = `<a href="/${EXPRESSION_TYPE[type]}.html?nome=${slugId}" class="${EXPRESSION_TYPE[type]}-hover ${EXPRESSION_TYPE[type]}-tooltip" id="${slugId}" title="Carregando...">${name}</a>`;
                                entry = entry.replace(value, link);
                            } else if (type === 'condition') {
                                var link = `<a href="javascript:void(0)" class="${EXPRESSION_TYPE[type]}-hover ${EXPRESSION_TYPE[type]}-tooltip" id="${slugId}" title="Carregando...">${name}</a>`;
                                entry = entry.replace(value, link);
                            } else if (type === 'creature') {
                                var link = `<span class="${EXPRESSION_TYPE[type]}-hover ${EXPRESSION_TYPE[type]}-tooltip" id="${slugId}">${name}</span>`;
                                entry = entry.replace(value, link);
                            }
                        })                        
                    }
                }

                return entry;
            })

            return features;
        })

        return data;
    })
}