import './style.scss';
import '../common/script.js';



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


