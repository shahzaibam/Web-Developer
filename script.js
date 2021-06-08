const carrousel = document.querySelector(".carrousel") 
const carrouselImg = document.querySelectorAll(".carrousel img")
const nav = document.querySelector(".nav")

const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

let counter = 1;
let size = carrouselImg[0].clientWidth;


carrousel.style.transform = "translateX("+(-size * counter) + "px)";

document.addEventListener("keyup", (e)=>{
    if(e.keyCode==39){
        if(counter >= carrouselImg.length - 1 )return;
        carrousel.style.transition = "transform 0.4s ease-in-out"
        counter++;
        carrousel.style.transform = "translateX("+(-size * counter) + "px)";
        console.log(size)
    }
})

nextBtn.addEventListener("click", ()=>{
    if(counter >= carrouselImg.length - 1 )return;
    carrousel.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carrousel.style.transform = "translateX("+(-size * counter) + "px)";

})



prevBtn.addEventListener("click", ()=>{
    if(counter<=0)return;
    carrousel.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carrousel.style.transform = "translateX("+(-size * counter) + "px)";
})

document.addEventListener("keyup", (e)=>{
    if(e.keyCode==37){

        if(counter <=0 )return;
        carrousel.style.transition = "transform 0.4s ease-in-out"
        counter--;
        carrousel.style.transform = "translateX("+(-size * counter) + "px)";
    }
})

carrousel.addEventListener("transitionend", ()=>{
    console.log(carrouselImg[counter])
    if(carrouselImg[counter].id === "abcd"){
        carrousel.style.transition = "none"
        counter = carrouselImg.length - 2;
        carrousel.style.transform = "translateX("+(-size * counter) + "px)";
    }

    if(carrouselImg[counter].id === "efgh"){
        carrousel.style.transition = "none"
        counter = carrouselImg.length - counter;
        carrousel.style.transform = "translateX("+(-size * counter) + "px)";
    }

})


nav.addEventListener("click", function(e){

    if(e.target === nav) return;

    const targetdot = e.target;

    const currentDot = nav.querySelector(".active")

    const currentSlide = carousel.querySelector(".active")

    let targetDotIndex = findIndex(targetdot, dots)

    const targetSlide = slides[targetDotIndex]

    moveToSlide(carousel, currentSlide, targetSlide)
    toggleActive(currentDot, targetdot)
    hideButton(targetSlide, slides)
})


function dotToSlide(targetSlide, slides, nav, dots){
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = nav.querySelector(".active");
    const targetdot = dots[slideIndex]
    toggleActive(currentDot, targetdot)
}

function toggleActive(current, target){
    current.classList.remove("active");
    target.classList.add("active")
}

function findIndex(item, items){
    for(let index = 0; index < items.length; index++){
        if(item===items[index]){
            return index;
        }
    }
}
