function windowOpen(){
    window.open("https://www.qatarairways.com/en-pk/homepage.html?CID=SXPK750640&account=Google-GCCLI-PK-EN&campaign=_PK-Generic-RMKT_Exact&adgroup=Generic+Keywords&term=%2Bflights&gclid=CjwKCAiAsaOBBhA4EiwAo0_AnFaVeOBJGjWvRTtdkh3EycwKoHd3J3LUbQo5Pfu-5h8Ku8d8KKfCJxoCq9gQAvD_BwE&gclsrc=aw.ds")
} 


const menuIcon = document.querySelector(".hamburger-menu");
const navlist = document.querySelector(".nav-list");

menuIcon.addEventListener("click", (e) => {
    navlist.classList.toggle("change");
})