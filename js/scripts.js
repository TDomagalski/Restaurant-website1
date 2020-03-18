// hamburger icon

const nav = document.querySelector("#navigation"),
    navWrap = nav.firstElementChild
btnHam = nav.lastElementChild,
    btnHamIcon = btnHam.firstElementChild;

btnHam.addEventListener("click", function showNav() {
    navWrap.classList.toggle("showNav");
    btnHam.classList.toggle("btn-hamburger_left");
    btnHamIcon.classList.toggle("btnHamIcon");
}, false)

const arrow = document.querySelector(".clickArrow"),
    menuDrop = document.querySelector(".menu-drop");

arrow.addEventListener("click", function () {
    menuDrop.classList.toggle("menu-dropClic");
}, false);