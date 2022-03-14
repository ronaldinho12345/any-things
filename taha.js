var menu_btn = document.getElementById("menu_btn")
var side_nav = document.getElementById("side_nav")
var menu = document.getElementById("menu")
side_nav.style.right == "-250px"
menu_btn.onclick = function() {
    if (side_nav.style.right == "-250px") {
        side_nav.style.right = "0"
        menu.src = "images/close.png";
    } else {
        side_nav.style.right = "-250px"
        menu.src = "images/close.png";

    }
}