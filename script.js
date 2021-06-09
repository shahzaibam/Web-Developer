let slider_index = 0;

function showSlide(index){
    let slide = document.querySelectorAll(".slide")
    let dots = document.querySelectorAll(".dot-nav")

    if(index >= slide.length){
        slider_index = 0;
    }

    if(index<0){
        slider_index = slide.length - 1
    }

    for(let i=0; i<slide.length; i++){
        slide[i].style.display = "none"
        dots[i].classList.remove("active-dot")
    }

    slide[slider_index].style.display = "block"
    dots[slider_index].classList.add("active-dot")
}

showSlide(slider_index)

document.querySelector(".arrow-prev").addEventListener("click", function(){
    showSlide(slider_index = slider_index - 1)
})

document.querySelector(".arrow-next").addEventListener("click", function(){
    showSlide(slider_index = slider_index + 1)
})

document.querySelectorAll(".dot-nav").forEach((element)=>{
    element.addEventListener("click", function(){
        var dots = Array.prototype.slice.call(element.parentElement.children),
        dot_index = dots.indexOf(element)
        showSlide(slider_index  =  dot_index)
    })
})