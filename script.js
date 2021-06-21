const arrow_next = document.querySelector(".arrow-next")
const arrow_prev = document.querySelector(".arrow-prev")
let slider_index = 0;


    function showSlide(index){
        let slide = document.querySelectorAll(".slide")
        let nav_dot = document.querySelectorAll(".nav-dot")
        
        if(index>=slide.length){
            slider_index = 0;
        }
        
        if(index<0){
            slider_index = slide.length - 1;
        }
    
    
        for(let i = 0; i< slide.length; i++){
            slide[i].style.display = "none"
            nav_dot[i].classList.remove("active-dot")
            
        }
        
        
        slide[slider_index].style.display = "block"
        nav_dot[slider_index].classList.add("active-dot")
        

       
    
    }

    


    console.log(slider_index)

  
    // showSlide(slider_index)
    
    function next(){
        next.addEventListener("click", function(){
            return showSlide(slider_index = slider_index + 1)
        })
    }
    
    // arrow_prev.addEventListener("click", function(){
    //     return showSlide(slider_index = slider_index - 1)
    // })
    

