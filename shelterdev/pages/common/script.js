const page = document.querySelector(".page");

const COLORPRIMARY = "rgba(241, 205, 179, 1)";

const pageScrollStop = () => {
    page.style.overflow = `hidden`;
};

const pageScrollStart = () => {
    page.style.overflow = `auto`;
};

export {pageScrollStop, pageScrollStart, COLORPRIMARY};