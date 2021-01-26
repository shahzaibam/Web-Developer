var button = document.querySelector(".btn");
var first = document.querySelector(".first-quote");
var second = document.querySelector(".second-quote");

button.addEventListener("click", function(e) {
    second.classList.toggle("change");
    e.preventDefault()
});


/*
button.addEventListener("click", function (e) {
    var aa = firste.classList.toggle("change")
    console.log(aa)
    e.preventDefault()
})  */

 

/*
if(button.addEventListener("click", function(){
    first.style.display = "none"
}));*/