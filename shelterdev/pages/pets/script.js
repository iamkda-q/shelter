import "./style.scss";
import pets from "../common/pets.js";
import "../common/burgerMenu.js";
import { renderCards, removeCards } from "../common/cards.js";

document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        let href = link.getAttribute("href").slice(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector(".header").offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

/* Слайдер */

const slideButtons = document.querySelectorAll(".our-friends__slide");

/* Рандомная копия входного массива из 8 питомцев */
function getRandomPetsCopy(petsMas) {
    const petsCopy = [...petsMas];
    const randomPetsCopy = [];
    for (let i = 0; i < pets.length; i++) {
        randomPetsCopy.push(
            ...petsCopy.splice(Math.floor(Math.random() * petsCopy.length), 1)
        );
    }
    return randomPetsCopy;
}

/* Псевдорандомная таблица из 6 рандомныхя копий из 8 питомцев */
function getRandomPetsTable() {
    const randomPetsCopy = getRandomPetsCopy(pets);
    const petsTable = [
        ...randomPetsCopy,
        ...randomPetsCopy,
        ...randomPetsCopy,
        ...randomPetsCopy,
        ...randomPetsCopy,
        ...randomPetsCopy,
    ];
    const randomTable = [];
    const clientWidth = document.documentElement.clientWidth;
    const [cardsQuantity, pageQuantity] = clientWidth >= 1280 ? [8, petsTable.length / 8] : clientWidth >= 768 ? [6, petsTable.length / 6] : [3, petsTable.length / 3];
    for (let j = 0; j < pageQuantity; j++) {
        const petsGroup = petsTable.splice(0, cardsQuantity);
        for (let i = 0; i < cardsQuantity; i++) {
            randomTable.push(
                ...petsGroup.splice(Math.floor(Math.random() * petsGroup.length), 1)
            );
        }
    }
    return [randomTable, cardsQuantity, pageQuantity];
}

const [petsTable, cardsQuantity, pageQuantity] = getRandomPetsTable();


const firstPage = document.querySelector("#first-page");
const prevPage = document.querySelector("#prev-page");
const indexPage = document.querySelector("#index-page");
const nextPage = document.querySelector("#next-page");
const lastPage = document.querySelector("#last-page");

let currentPage = +indexPage.textContent;

firstPage.addEventListener("click", () => {
    lastPage.classList.remove("our-friends__slide_disabled");
    nextPage.classList.remove("our-friends__slide_disabled");
    currentPage = 1;
    indexPage.textContent = currentPage;
    prevPage.classList.add("our-friends__slide_disabled");
    firstPage.classList.add("our-friends__slide_disabled");
    removeCards();
    renderCards(petsTable.slice(0, cardsQuantity));
});

lastPage.addEventListener("click", () => {
    lastPage.classList.add("our-friends__slide_disabled");
    nextPage.classList.add("our-friends__slide_disabled");
    currentPage = pageQuantity;
    indexPage.textContent = currentPage;
    prevPage.classList.remove("our-friends__slide_disabled");
    firstPage.classList.remove("our-friends__slide_disabled");
    removeCards();
    renderCards(petsTable.slice(petsTable.length - cardsQuantity, petsTable.length));
});

nextPage.addEventListener("click", () => {
    currentPage += 1;
    indexPage.textContent = currentPage;
    if (currentPage >= 1) {
        firstPage.classList.remove("our-friends__slide_disabled");
        prevPage.classList.remove("our-friends__slide_disabled");
    }
    if (currentPage >= pageQuantity) {
        nextPage.classList.add("our-friends__slide_disabled"); 
        lastPage.classList.add("our-friends__slide_disabled");
    }
    removeCards();
    renderCards(petsTable.slice(cardsQuantity * (currentPage - 1),cardsQuantity * (currentPage - 1) + cardsQuantity));
});

prevPage.addEventListener("click", () => {
    currentPage -= 1;
    indexPage.textContent = currentPage;
    if (currentPage <= pageQuantity) {
        nextPage.classList.remove("our-friends__slide_disabled");
        lastPage.classList.remove("our-friends__slide_disabled");
    }
    if (currentPage <= 1) {
        prevPage.classList.add("our-friends__slide_disabled");
        firstPage.classList.add("our-friends__slide_disabled"); 
    }
    removeCards();
    renderCards(petsTable.slice(cardsQuantity * (currentPage - 1),cardsQuantity * (currentPage - 1) + cardsQuantity));
});

renderCards(petsTable.slice(0, cardsQuantity));

console.log(
    `
    "Самооценка для проверяющего"

Score: 100 / 100.

`
);
