import {pageScrollStop, pageScrollStart} from "../common/script.js";

const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const popupPhoto = popup.querySelector(".popup__photo");
const popupName = popup.querySelector(".popup__name");
const popupType = popup.querySelector(".popup__type");
const popupDescription = popup.querySelector(".popup__description");
const popupMean = popup.querySelectorAll(".popup__mean");
const popupCloseButton = popup.querySelector(".popup__close-button");

popupContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
});

popupContainer.addEventListener("mouseover", (evt) => {
    evt.stopPropagation();
});

popupContainer.addEventListener("mouseout", (evt) => {
    evt.stopPropagation();
});

popup.addEventListener("mouseover", (evt) => {
    popupCloseButton.classList.add("popup__close-button_hover");
});

popup.addEventListener("mouseout", (evt) => {
    popupCloseButton.classList.remove("popup__close-button_hover");
});

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
    popupMean[1].textContent = inoculations.reduce((inoculations, inoculation) => inoculations += `, ${inoculation}`);
    popupMean[2].textContent = diseases.reduce((diseases, disease) => diseases += `, ${disease}`);
    popupMean[3].textContent = parasites.reduce((parasites, parasite) => parasites += `, ${parasite}`);
    pageScrollStop();
    popup.addEventListener("click", closePopup);

    popup.classList.remove("popup_hidden");
}

function closePopup() {
    popup.classList.add("popup_hidden");
    pageScrollStart();
    popup.removeEventListener("click", closePopup);
}

export {showPopup};