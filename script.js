const menuIcon = document.querySelector(".mobile-icon");
const navbar = document.querySelector(".main-nav");

menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
})