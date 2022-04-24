import {pageScrollStop, pageScrollStart, COLORPRIMARY} from "../common/script.js";

const burgerIcon = document.querySelector(".burger-icon");
const burger = document.querySelector(".burger");
const burgerMenuContainer = burger.querySelector(".burger__container");

burgerMenuContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
});

const closeBurgerMenu = () => {
    burger.removeEventListener("click", closeBurgerMenu)
    burgerIcon.classList.remove("burger-icon_active");
    if (burgerIcon.classList.contains("burger-icon_color_black")) {
        burgerIcon.querySelectorAll("div").forEach(div => {
            div.style.backgroundColor = "black";
        });
    }
    burger.classList.add("burger_hidden");
    burgerMenuContainer.classList.add("burger__container_hidden");
    pageScrollStart();
}

const showBurgerMenu = () => {
    burger.addEventListener("click", closeBurgerMenu)
    burgerIcon.classList.add("burger-icon_active");
    if (burgerIcon.classList.contains("burger-icon_color_black")) {
        burgerIcon.querySelectorAll("div").forEach(div => {
            div.style.backgroundColor = COLORPRIMARY;
        });
    }
    burger.classList.remove("burger_hidden");
    burgerMenuContainer.classList.remove("burger__container_hidden");
    pageScrollStop(); 
}

burgerIcon.addEventListener("click", () => {
    if (!burgerIcon.classList.contains("burger-icon_active")) {
        showBurgerMenu()
    } else {
        closeBurgerMenu();
    }
});

burgerMenuContainer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeBurgerMenu);
});