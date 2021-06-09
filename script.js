const next = document.querySelector(".arrow-next")
const prev = document.querySelector(".arrow-prev")

let slide_index = 0;

function showSlide(index){
    let slide = document.querySelectorAll(".slide")
    let dots = document.querySelectorAll(".dot-nav")

    if(index >= slide.length){
        slide_index = 0;
    }

    if(index < 0 ){
        slide_index = slide.length - 1;
    }

    for(let i = 0; i<slide.length; i++){
        slide[i].style.display = "none"
        dots[i].classList.remove("active-dot")
    }
    slide[slide_index].style.display = "block"
    dots[slide_index].classList.add("active-dot")

}

showSlide(slide_index)

prev.addEventListener("click", function(){
    showSlide(slide_index = slide_index - 1)
})

next.addEventListener("click", function(){
    showSlide(slide_index = slide_index + 1)
})

document.querySelectorAll(".dot-nav").forEach((element)=>{
    element.addEventListener("click", function(){
        var dots = Array.prototype.slice.call(element.parentElement
            .children),
        dot_index = dots.indexOf(element)
        showSlide(slide_index = dot_index ) 
    })
})