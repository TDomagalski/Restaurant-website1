const nav = document.querySelector("#navigation"),
    navWrap = nav.firstElementChild
btnHam = nav.lastElementChild;

btnHam.addEventListener("click", function showNav() {
    navWrap.classList.toggle("showNav");
    btnHam.classList.toggle("btn-hamburger_left");
}, false)