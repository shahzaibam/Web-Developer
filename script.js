const menu = document.querySelector(".fa-bars");
const navlist = document.querySelector(".nav-ul");

menu.addEventListener("click", (e) => {
    navlist.classList.toggle("change");
})