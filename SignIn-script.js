import {add} from '/signUp-script.js'

const iniciamos = function (correo, contrasenna){

    const data = JSON.parse(getIt)
    console.log(data)

    for(let i = 0; i<data.length; i++){

        if(data[i].email === correo && data[i].password == contrasenna){
            console.log("bien")
        }else{
            console.log("nada")
        }  
    }
}



function iniciarSesion(e){
    var correo = "";
    var contrasenna = "";
    var bAcceso;

    correo = document.querySelector("#signIn-email").value,
    contrasenna = document.querySelector("#signIn-password").value

    bAcceso = iniciamos(correo, contrasenna);
    console.log(bAcceso);

    e.preventDefault()
}

document.querySelector("#submit").addEventListener("click", iniciarSesion);





