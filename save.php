<?php
require_once("config.php")
?>
<?php
if(isset($_POST['save'])){
    $FECHA              =   $_POST['FECHA'];
    $KILOMETROS         =   $_POST['KILOMETROS'];
    $ACEITE             =   $_POST['ACEITE'];
    $FILTRO_ACEITE      =   $_POST['FILTRO_ACEITE'];
    $FILTRO_AIRE        =   $_POST['FILTRO_AIRE'];
    $FILTRO_POLEN       =   $_POST['FILTRO_POLEN'];
    $FILTRO_GASOIL      =   $_POST['FILTRO_GASOIL'];
    $DELANTERAS         =   $_POST['DELANTERAS'];
    $TRASERAS           =   $_POST['TRASERAS'];
    $DISCOS_DELANTEROS  =   $_POST['DISCOS_DELANTEROS'];
    $DISCOS_TRASEROS    =   $_POST['DISCOS_TRASEROS'];
    $RUEDAS_DELANTERAS  =   $_POST['RUEDAS_DELANTERAS'];
    $RUEDAS_TRASERAS    =   $_POST['RUEDAS_TRASERAS'];
    $EMBRAGUE           =   $_POST['EMBRAGUE'];
    $OTROS              =   $_POST['OTROS'];
    $observation        =   $_POST['observation'];



    $sql = " INSERT INTO taxi_project_table (
                                    fecha,
                                    kilometros,
                                    aceite,
                                    filtro_de_aceite,
                                    filtro_aire,
                                    filtro_polen,
                                    filtro_gasoil,
                                    pastillas_delanteras,
                                    pastillas_traseras,
                                    discos_delanteros,
                                    discos_traseros,
                                    ruedas_delanteras,
                                    ruedas_traseras,
                                    embrague,
                                    otros,
                                    observaciones) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";  //sql query save in verable
    $stmtinsert = $conn->prepare($sql);
    $result = $stmtinsert->execute([ $FECHA,
                                     $KILOMETROS,
                                     $ACEITE,
                                     $FILTRO_ACEITE,
                                     $FILTRO_AIRE,
                                     $FILTRO_POLEN,
                                     $FILTRO_GASOIL,
                                     $DELANTERAS,
                                     $TRASERAS,
                                     $DISCOS_DELANTEROS,
                                     $DISCOS_TRASEROS,
                                     $RUEDAS_DELANTERAS,
                                     $RUEDAS_TRASERAS,
                                     $EMBRAGUE,
                                     $OTROS,
                                     $observation]);
    if($result){
      echo 'save';
        header("location: http://localhost/project/input.php");
    }else{
        echo 'There were erros while saved the data.';
    }
   
    
    $conn = null;
}


?>