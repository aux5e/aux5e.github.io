/** ADD CLASS "active" ON MENU LINK */

// Get the container element
var btnContainer = document.getElementById("navbarSupportedContent");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/** INCLUDE HTML FILE */

$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = '/partial/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});