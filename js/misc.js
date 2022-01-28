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

function slugify(value) {
    return value.replace(/[àáâãäå]/g, "a").replace(/ç/g,"c").replace(/[èéêë]/g,"e").replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o").replace(/[ùúûü]/g,"u").replace(/ /g, "-");
}

const linkTypes = {
    "spell": "magias",
    "condition": "condicoes",
    "creature": "criaturas"
}

/** Replace @ spell */
window.spellToLink = function spellToLink(datas) {
    return datas.map(data => {
        data.subclassFeatures = data.subclassFeatures.map(features => {
            features.entries = features.entries.map(entry => {
                if (typeof entry === 'string') {
                    //console.log(entry);
                    const regex = new RegExp("{@(?<type>\\w+)\\s+(?<name>.+?)}", 'gi');
                    const regexMatch = entry.match(regex);
                    if (regexMatch) {
                        let type, name = null;
                        regexMatch.forEach(value => {
                            const group = value.match(/{@(?<type>\w+)\s+(?<name>.+?)}/i).groups;
                            name = group.name;
                            type = group.type;
                            slugId = slugify(group.name);

                            if (type === 'spell') {
                                var link = `<a href="/${linkTypes[type]}.html?nome=${slugId}" class="${linkTypes[type]}-hover ${linkTypes[type]}-tooltip" id="${slugId}" title="Carregando...">${name}</a>`;
                                entry = entry.replace(value, link);
                            } else if (type === 'condition') {
                                var link = `<a href="javascript:void(0)" class="${linkTypes[type]}-hover ${linkTypes[type]}-tooltip" id="${slugId}" title="Carregando...">${name}</a>`;
                                entry = entry.replace(value, link);
                            } else if (type === 'creature') {
                                var link = `<span class="${linkTypes[type]}-hover ${linkTypes[type]}-tooltip" id="${slugId}">${name}</span>`;
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

//// Get the container element
//var btnContainer = document.getElementById("nav-menu");

//// Get all buttons with class="nav-link" inside the container
//var btns = btnContainer.getElementsByClassName("nav-item");

//// Loop through the buttons and add the active class to the current/clicked button
//for (var i = 0; i < btns.length; i++) {
//    btns[i].addEventListener("click", function () {
//        var current = document.getElementsByClassName("active");
//        current[0].className = current[0].className.replace(" active", "");
//        this.className += " active";
//    });
//}
