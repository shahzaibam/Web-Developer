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

const noCuenta = document.querySelector(".noCuenta");
const pageDos = document.querySelector(".login-page-dos");
const pageOne = document.querySelector(".login-page");

noCuenta.addEventListener("click", function (e) {
    pageDos.classList.toggle("change");
    e.preventDefault()
});




//Code for SignUp and SignIn
const signUp = function (e) { 
    let formData = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        pwd : document.getElementById("pwd").value
    }

    signUp_array.push(formData)
    console.log(signUp_array)
    localStorage.setItem("signUp_array", JSON.stringify(signUp_array));
    console.log(localStorage.getItem("signUp_array"));

    e.preventDefault();
    
}

///sign in


localStorage.getItem("signUp_array")



function dos (sCorreo, sContrasenna){

    const data = JSON.parse(localStorage.getItem("signUp_array"))

    for(i = 0; i<data.length; i++){

    if(data[i].email === sCorreo && data[i].pwd == sContrasenna){
        console.log("bien")
        var pic = "img/"
        pic = pic + data[i].fname + ".png"
        document.getElementById("pic").src = pic
        console.log(pic)

        document.getElementById("name").innerHTML = data[i].fname

        document.getElementById("pic").style.display = "block"
    } else{

        console.log("nada")
    }  
    }
}



function iniciarSesion(e){
    var sCorreo = "";
    var sContrasenna = "";
    var bAcceso;

    sCorreo = document.querySelector("#txtCorreo").value
    sContrasenna = document.querySelector("#txtContrasenna").value

    bAcceso = dos(sCorreo, sContrasenna);
    console.log(bAcceso);

    e.preventDefault()
}


document.querySelector(".login-button").addEventListener("click", iniciarSesion);


var signUp_array = []

