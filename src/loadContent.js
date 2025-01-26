import "./styles.css";
import { divContent, homeContent } from "./pages/home.js";
import createMenuPage, { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";

const LoadContent = () => {
    homeContent();

    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active");
            button.classList.add("active");
        });
    });

    btnHome.addEventListener("click", homeContent);
    btnMenu.addEventListener("click", createMenuPage);
    btnAbout.addEventListener("click", about);
};

export default LoadContent;
