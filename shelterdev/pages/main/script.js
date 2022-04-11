import './style.scss';

console.log('Hallo');

const href = document.location.href;
const pathToPets = href.replace("main", "pets");

const petsPointers = document.querySelectorAll("[data-pets]");

petsPointers.forEach(item => {
    item.href = item.href.replace("main", "pets");
    console.log(item.href);
});

console.log(
    `
    "Самооценка для проверяющего"

Score: 100 / 100.

[60/60] - Создана страница main, сверстаны все блоки и эффекты;
[60/60] - Создана страница our pets, сверстаны все блоки и эффекты;

    - Дополнительно

Header смещен относительно макето умышленно, чтобы он не плясал вверх-вниз при переходе с одной страницы на другую.
`
);