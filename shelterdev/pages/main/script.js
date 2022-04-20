import "./style.scss";
import "../common/script.js";

const clientHeight = document.documentElement.clientHeight * 0.65; // накидываем класс при достижении секции 65% от высоты окна
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
