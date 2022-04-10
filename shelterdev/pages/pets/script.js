import './style.scss';

const href = document.location.href;
const pathToPets = href.replace("pets", "main");

const petsPointers = document.querySelectorAll("[data-main]");

petsPointers.forEach(item => {
    
    item.href = item.href.replace("pets", "main");
    console.log(item.href);
});



