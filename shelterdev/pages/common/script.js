const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger");
const burgerContainer = burgerMenu.querySelector(".burger__container");

const closeBurger = () => {
    burgerIcon.classList.toggle("burger-icon_active");
    burgerMenu.classList.toggle("burger_hidden");
    burgerContainer.classList.toggle("burger__container_hidden");
}

burgerIcon.addEventListener("click", closeBurger);

burgerContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", closeBurger)
});
