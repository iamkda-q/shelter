import "./style.scss";
import "../common/script.js";
import pets from "../common/pets.js";

/* Модуль указания ссылок в разработке */
const clientHeight = document.documentElement.clientHeight * 0.65; // накидываем класс при достижении секции 65% от высоты окна

/* Плавный переход по якорным ссылкам */
const anchors = document.querySelectorAll('a[href^="#"'); // все якорные ссылки
anchors.forEach((link) => {
    let href = link.getAttribute("href").slice(1);

    const scrollTarget = document.querySelector(`#${href}`);

    link.addEventListener("click", (e) => {
        e.preventDefault();

        const { top } = scrollTarget.getBoundingClientRect();
        window.scrollBy({
            top: top,
            behavior: "smooth",
        });
    });
});

/* Слайдер */

const petsCards = document.querySelector(".our-friends__pets");
const slideButtons = document.querySelectorAll(".our-friends__slide");
let otherPets = Array.from(pets);
let currentPets = [];
let previousPets = [];

const getEmptyPetCard = () =>
    document
        .querySelector("#our-friends-card")
        .content.querySelector(".our-friends__pet")
        .cloneNode(true);

const generatePetCard = ({ name, img, ...other }) => {
    const petCard = getEmptyPetCard();
    const petCardImg = petCard.querySelector(".our-friends__pet-photo");
    petCardImg.src = img;
    const petName = petCard.querySelector(".our-friends__pet-name");
    petName.textContent = name;
    console.log(other);
    petCard.addEventListener("click", () => {
        showPopup({ name, img, ...other });
    });
    return petCard;
};

function calculateCardsQuantity() {
    const clientWidth = document.documentElement.clientWidth;
    let cardsQuantity = /* (clientWidth >=1280) ? 3 : (clientWidth >=768) ? 2 : 1 */ 3;
    for (let i = 0; i < cardsQuantity; i++) {
        currentPets.push(
            ...otherPets.splice(Math.floor(Math.random() * otherPets.length), 1)
        );
    }
}

function updateCards() {
    [previousPets, currentPets] = [Array.from(currentPets), []];
    calculateCardsQuantity();
    otherPets = [...previousPets, ...otherPets];
    console.log(previousPets);
    console.log(currentPets);
    console.log(otherPets);
}

const renderCards = () => {
    const cards = currentPets.map((pet) => generatePetCard(pet));
    cards.forEach((card) => petsCards.append(card));
};

const removeCards = () => {
    Array.from(petsCards.childNodes).forEach((child) => {
        child.remove();
    });
};

slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateCards();
        removeCards();
        renderCards();
    });
});

calculateCardsQuantity();
renderCards();

/* Попап */
const popup = document.querySelector(".popup");
const popupPhoto = popup.querySelector(".popup__photo");
const popupName = popup.querySelector(".popup__name");
const popupType = popup.querySelector(".popup__type");
const popupDescription = popup.querySelector(".popup__description");
// const popupProperty = popup.querySelectorAll(".popup__property");
const popupMean = popup.querySelectorAll(".popup__mean");
const popupCloseButton = popup.querySelector(".popup__close-button");
popupCloseButton.addEventListener("click", closePopup);

function showPopup({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
}) {
    popupPhoto.src = img;
    popupName.textContent = name;
    popupType.textContent = `${type} - ${breed}`;
    popupDescription.textContent = description;
    popupMean[0].textContent = age;
    popupMean[1].textContent = inoculations;
    popupMean[2].textContent = diseases;
    popupMean[3].textContent = parasites;
    popup.classList.remove("popup_hidden");
}

function closePopup() {
    popup.classList.add("popup_hidden");
}

// const navigationLinks = [
// /*     ...document.querySelectorAll(".header__link"), */
//     ...document.querySelectorAll(".burger__link[href^='#'"),
// ];

// console.log(navigationLinks);

// navigationLinks.forEach((link) => {
//     window.addEventListener("scroll", () => {

//         let href = link.getAttribute("href").slice(1);

//         const scrollTarget = document.querySelector(`#${href}`);
//         const { top, bottom } = scrollTarget.getBoundingClientRect();
//         console.log(top, bottom, clientHeight);
//         if (clientHeight >= top) {
//             if (clientHeight < bottom) {
//                 link.classList.add("burger__link_checked");
//             } else {
//                 link.classList.remove("burger__link_checked");
//             }
//         } else {
//             link.classList.remove("burger__link_checked");
//         }
//     });
// });

console.log(
    `
    "Самооценка для проверяющего"

Score: 100 / 100.

[50/50] - Создана страница main, сверстаны все блоки и эффекты;
[50/50] - Создана страница our pets, сверстаны все блоки и эффекты;

    - Дополнительно

Cделано бургер-меню
`
);
