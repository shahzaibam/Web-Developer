const menuIcon = document.querySelector(".hamburger-menu");
const navlist = document.querySelector(".nav-list");

menuIcon.addEventListener("click", (e) => {
    navlist.classList.toggle("change");
})