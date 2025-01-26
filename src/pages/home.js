import img from "../images/chaotic-moo-dang.jpg";

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 50%; height: 50%; border-radius: 20px;";

export const divContent = document.querySelector("#content");

export function homeContent() {
    divContent.innerHTML = "";

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("divTitle");
    divContent.appendChild(titleDiv);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Moo Deng Eats";
    titleDiv.appendChild(title);

    const paraContent = document.createElement("p");
    paraContent.innerHTML =
        "Welcome to Moo Deng Bistro, a vibrant and cozy " +
        "restaurant inspired by the playful charm of the pygmy hippo, Moo Deng. " +
        "Nestled in a lush, jungle-themed setting, Moo Deng Bistro serves a " +
        "fusion of Southeast Asian and African flavors, celebrating the unique " +
        "habitats and cultures of this remarkable creature. The menu features bold" +
        "dishes like spicy tamarind-glazed pork, coconut-infused rice bowls, " +
        "and signature plantain crisps with zesty lime dip, all crafted with " +
        "fresh, locally sourced ingredients. Whether you're enjoying a hearty " +
        'meal or sipping on our tropical "Hippo Splash" mocktail, Moo Deng ' +
        "Bistro promises a dining experience as delightful and memorable as its namesake.'";
    titleDiv.appendChild(paraContent);

    divContent.appendChild(imgHome);
}
