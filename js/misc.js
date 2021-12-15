/** INCLUDE HTML FILE */
$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = '/partial/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

/** ADD CLASS "active" ON MENU LINK */
jQuery(function ($) {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("#nav-menu .nav-item a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
        // $(this).parent("li").addClass("active");
    })
});


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