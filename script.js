const carousel = document.querySelector(".carrousel")

const nextButton = document.querySelector(".btn-right")

const previousButton = document.querySelector(".btn-left")

const nav = document.querySelector(".nav")

const dots = [...nav.children]

const slides = [...carousel.children];

let slideWidth = slides[0].getBoundingClientRect().width;

function positionSlides(slides){
    for(let index = 0; index < slides.length; index++){
        slides[index].style.left = slideWidth * index + "px";
    }
}

positionSlides(slides)

nextButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel, currentSlide, nextSlide)
    hideButton(nextSlide, slides) 

    dotToSlide(nextSlide, slides, nav, dots)

})


previousButton.addEventListener("click", function(){
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(carousel, currentSlide, previousSlide)
    hideButton(previousSlide, slides) 
    dotToSlide(previousSlide, slides, nav, dots)

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

function moveToSlide(carousel, currentSlide, targetSlide){
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide)

}

function toggleActive(current, target){
    current.classList.remove("active");
    target.classList.add("active")
}

function hideButton(targetSlide, slides){
    if(targetSlide === slides[0]){
        previousButton.classList.add("hide");
        nextButton.classList.remove("hide")
    }else if(targetSlide === slides[slides.length - 1]){
        nextButton.classList.add("hide")
        previousButton.classList.remove("hide");
    }else{
        previousButton.classList.remove("hide");
        nextButton.classList.remove("hide")
    }
}



function findIndex(item, items){
    for(let index = 0; index < items.length; index++){
        if(item===items[index]){
            return index;
        }
    }
}