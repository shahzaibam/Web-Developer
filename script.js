//function obtenerListaUsuarios(){
    //var listaUsuarios = JSON.parse(localStorage.getItem("ListaUsuarios"));

            //if(listaUsuarios === null){
                listaUsuarios = 
                [
                    ["1", "Pabs", "Monestel", "pablo.monestel@gmail.com", "1pablo9", "1987-10-12", "1"],

                    ["2", "Shebi","Asghar Munir", "shebbi4597@gmail.com", "pakistan92", "2004-30-08", "2"]

                ]
            //}
    //return listaUsuarios;
//}

function validarCredenciales(pCorreo , pContrasenna){
    //var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for (var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]){
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


