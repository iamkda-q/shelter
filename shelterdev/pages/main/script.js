import './style.scss';

console.log('Hallo');

const href = document.location.href;
const pathToPets = href.replace("main", "pets");

const petsPointers = document.querySelectorAll("[data-pets]");

petsPointers.forEach(item => {
    item.href = item.href.replace("main", "pets");
    console.log(item.href);
});