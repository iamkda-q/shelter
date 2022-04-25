import {showPopup} from "../common/popup.js";

const petsCards = document.querySelector(".our-friends__pets");

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
    petCard.addEventListener("click", () => {
        showPopup({ name, img, ...other });
    });
    return petCard;
};

const renderCards = (jsonPets) => {
    const cards = jsonPets.map((pet) => generatePetCard(pet));
    cards.forEach((card) => petsCards.append(card));
};

const renderCardsAnimation = (jsonPets, callbackAnimation) => {
    const cards = jsonPets.map((pet) => generatePetCard(pet));
    cards.forEach((card) => {
        callbackAnimation(card);
        petsCards.append(card);
    });
};

const removeCards = () => {
    Array.from(petsCards.childNodes).forEach((child) => {
        child.remove();
    });
};

export {renderCards, removeCards, renderCardsAnimation};

