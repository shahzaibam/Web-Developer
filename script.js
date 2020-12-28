const menuIcon = document.querySelector(".hamburger-menu");
const navlist = document.querySelector(".nav-list");

menuIcon.addEventListener("click", (e) => {
    navlist.classList.toggle("change")
})

//Code for slider

var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
}, 3000);


//Change signIn to SignUp

var register = document.querySelector("register")
var signiNN = document.querySelector("sign-in-container")

if(register.addEventListener("click", () =>{
    signiNN.style.display = "block"
}))




//Code for SignUp and SignIn
const signUp = function (e) { 
    let formData = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        pwd : document.getElementById("pwd").value
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));

    e.preventDefault();
    
}

///sign in


localStorage.getItem("formData")



function dos (sCorreo, sContrasenna){

    const data = JSON.parse(localStorage.getItem("formData"))

    if(data.email === sCorreo && data.pwd == sContrasenna){
        console.log("bien")
    } else{
        console.log("nada")
    }
}



function iniciarSesion(){
    var sCorreo = "";
    var sContrasenna = "";
    var bAcceso;

    sCorreo = document.querySelector("#txtCorreo").value
    sContrasenna = document.querySelector("#txtContrasenna").value

    bAcceso = dos(sCorreo, sContrasenna);
    console.log(bAcceso);
}


document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);

