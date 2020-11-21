const menuIcon = document.querySelector(".hamburger-menu");
const navlist = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("change");
})

