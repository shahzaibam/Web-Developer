const menu = document.querySelector(".menu");
const navlist = document.querySelector(".nav-ul");

menu.addEventListener("click", (e) => {
    navlist.classList.toggle("change");
})