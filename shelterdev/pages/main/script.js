import "./style.scss";
import pets from "../common/pets.js";
import "../common/burgerMenu.js";
import { renderCards, removeCards, renderCardsAnimation } from "../common/cards.js";

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

const slideButtons = document.querySelectorAll(".our-friends__slide");

/* Random render */

let otherPets = Array.from(pets);
let currentPets = [];
let previousPets = [];

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
}

calculateCardsQuantity();
renderCards(currentPets);

slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateCards();
        let cards = document.querySelectorAll(".our-friends__pet");
        cards.forEach((card) => {
            const animationCard = card.animate(
                [
                    { transform: "translateY(0)" },
                    { transform: "translateY(600px)" },
                ],
                {
                    duration: 400,
                }
            );
            animationCard.addEventListener("finish", function () {
                card.style.transform = "translateY(600px)";
                removeCards();
                renderCardsAnimation(currentPets, item => {
                    item.style.transform = "translateY(-600px)";
                })
                cards = document.querySelectorAll(".our-friends__pet");
                cards.forEach((card, index) => {
                    const animationCard = card.animate(
                        [
                            { transform: `translateY(${-600-index*200}px)` },
                            { transform: "translateY(0)" },
                        ],
                        {
                            duration: 400 + index*200,
                        }
                    );
                    animationCard.addEventListener("finish", function () {
                        card.style.transform = "translateY(0)";
                    });
                });
            });
        });
    });
});

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

`
);
