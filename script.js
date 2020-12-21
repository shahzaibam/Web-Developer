const signUp = function (e) {
    let formData = {
    fname : document.getElementById("fname").value,
    lname : document.getElementById("lname").value,
    email : document.getElementById("email").value,
    pwd : document.getElementById("pwd")
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));

    e.preventDefault();

}


/////////////////////sign in


localStorage.getItem("formData")

function dos (sCorreo, sContrasenna){

    const data = JSON.parse(localStorage.getItem("formData"))

    if(data.email === sCorreo && data.pwd === sContrasenna){
        console.log("bien")   
    } else{
        console.log("mal")
    }
}