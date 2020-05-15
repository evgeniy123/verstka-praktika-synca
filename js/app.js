function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    let burger = document.getElementById('header__burger');

    burger.addEventListener('click', function () {

        let element_toggled = document.getElementById("burger1");
        let element_centre_burger = document.getElementById("header__menu-mobile");
        let header_burger = document.getElementById("header__burger");
        let header = document.getElementById("header");
        let buttons = document.getElementById("buttons");

        element_toggled.classList.toggle("active");
        element_centre_burger.classList.toggle("active");
        header_burger.classList.toggle("active");
        header.classList.toggle("active");
        buttons.classList.toggle("active");
    });

    ibg();
});
