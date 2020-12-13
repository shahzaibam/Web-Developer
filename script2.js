//function obtenerListaUsuarios(){
    //var listaUsuarios = JSON.parse(localStorage.getItem("ListaUsuarios"));

            //if(listaUsuarios === null){
                listaUsuarios = JSON.parse(localStorage.getItem("formData"))
                //console.log(listaUsuarios)
            //} 
    //return listaUsuarios;
//}

function validarCredenciales(pCorreo , pContrasenna){
    //var listaUsuarios = obtenerListaUsuarios();
    
    var bAcceso = false;
    

    for (var i = 0; i < 1; i++){
        console.log(listaUsuarios)
        console.log(pCorreo, pContrasenna)
        if(pCorreo == listaUsuarios.email.value && pContrasenna == listaUsuarios.pwd.value ){
            bAcceso = true;
            //sessionStorage.setItem("usuarioActivo", listaUsuarios[i][1] + " " + listaUsuarios[i][2]);
            //sessionStorage.setItem("rolUsuarioActivo", listaUsuarios[i][6]);
        }
    }

    return bAcceso;
}


function iniciarSesion(){
    var sCorreo = "";
    var sContrasenna = "";
    var bAcceso = false;

    sCorreo = document.querySelector("#txtCorreo").value
    sContrasenna = document.querySelector("#txtContrasenna").value

    bAcceso = validarCredenciales(sCorreo, sContrasenna);
    console.log(bAcceso);
}

 
document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);


