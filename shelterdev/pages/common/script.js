const page = document.querySelector(".page");
const burgerIcon = document.querySelector(".burger-icon");
const burger = document.querySelector(".burger");
const burgerMenuContainer = burger.querySelector(".burger__container");

const pageScrollStop = () => {
    page.style.overflow = `hidden`;
};

const pageScrollStart = () => {
    page.style.overflow = `auto`;
};

burgerMenuContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
});

const closeBurgerMenu = () => {
    burger.removeEventListener("click", closeBurgerMenu)
    burgerIcon.classList.remove("burger-icon_active");
    burger.classList.add("burger_hidden");
    burgerMenuContainer.classList.add("burger__container_hidden");
    pageScrollStart();
}

const showBurgerMenu = () => {
    burger.addEventListener("click", closeBurgerMenu)
    burgerIcon.classList.add("burger-icon_active");
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
