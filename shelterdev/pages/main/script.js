import "./style.scss";
import '../common/script.js';

document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        let href = link.getAttribute("href").slice(1);

        const scrollTarget = document.getElementById(href);

        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    });
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
