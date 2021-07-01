<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taxi Project</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href=".styles.css">
</head>
<body>

    <div class="container">
        <h1 id="heading-taxiProject" style="margin-top: 30px; background: #355c7d; position: relative; top: -30px; left: -130px; width: 1368px; padding: 10px;">Taxi <span style="color: #FFFF00;">Project </span></h1>
        

        <div class="form">
            <form action="save.php" method="post">

                <div class="firstsec" style="display: grid; grid-template-columns: 200px 200px 200px 200px; margin-top: 50px;">
            
                    <label for="FECHA">FECHA</label>
                    <input style="margin: 3px;" name="FECHA" type="date" class="input_text" required>


                    <label style="margin-left: 20px;" for="KILOMETROS">KILOMETROS</label>
                    <input style="margin: 3px;" name="KILOMETROS" type="text" class="input_text">


                    <label for="ACEITE">ACEITE</label>
                    <input style="margin: 3px;" name="ACEITE" type="text" class="input_text">


                    <label style="margin-left: 20px;" for="FILTRO_ACEITE">FILTRO_ACEITE</label>
                    <input style="margin: 3px;" name="FILTRO_ACEITE" type="text" class="input_text">


                    <label for="FILTRO_AIRE">FILTRO_AIRE</label>
                    <input style="margin: 3px;" name="FILTRO_AIRE" type="text" class="input_text">


                    <label style="margin-left: 20px;" for="FILTRO_POLEN">FILTRO_POLEN</label>
                    <input style="margin: 3px;" name="FILTRO_POLEN" type="text" class="input_text">


                    <label for="FILTRO_GASOIL">FILTRO_GASOIL</label>
                    <input style="margin: 3px;" name="FILTRO_GASOIL" type="text" class="input_text">


                    <label style="margin-left: 20px;" for="DELANTERAS">PASTILLAS DELANTERAS</label>
                    <input style="margin: 3px;" name="DELANTERAS" type="text" class="input_text">

                </div>
                <div class="secsect" style="display: grid; grid-template-columns: 200px 200px 200px 200px;  margin-top: 100px;">
                    <label  for="TRASERAS">PASTILLAS TRASERAS</label>
                    <input style="margin: 3px;"  name="TRASERAS" type="text" class="input_text">


                    <label style="margin-left: 20px;" for="DISCOS_DELANTEROS">DISCO DELANTEROS</label>
                    <input style="margin: 3px;" name="DISCOS_DELANTEROS" type="text" class="input_text">


                    <label for="DISCO_TRASEROS">DISCO TRASEROS</label>
                    <input style="margin: 3px;" name="DISCOS_TRASEROS" type="text" class="input_text">

                    <label style="margin-left: 20px;" for="RUEDAS_DELANTERAS">RUEDAS DELANTERAS</label>
                    <input style="margin: 3px;" name="RUEDAS_DELANTERAS" type="text" class="input_text">


                    <label for="RUEDAS_TRASERAS">RUEDAS TRASERAS</label>
                    <input style="margin: 3px;" name="RUEDAS_TRASERAS" type="text" class="input_text">


                    <label style="margin-left: 20px;" for="EMBRAGUE">EMBRAGUE</label>
                    <input style="margin: 3px;" name="EMBRAGUE" type="text" class="input_text">


                    <label for="OTROS">OTROS</label>
                    <input style="margin: 3px; height: 32px;" name="OTROS" type="text" class="input_text">
                
                
                    <label style="margin-left: 20px;" for="observation">OBSERVATION</label>
                    <textarea style="margin: 3px;" name="observation" type="text" class="input_text"></textarea>
                </div>
                <input type="submit" class="submit-btn" name="save" value="Save" style="padding; 20px; margin-left: 460px; margin-top: 30px; background: #355c7d ; cursor: pointer; border: 1px solid black; width: 50px; padding: 5px; border-radius: 7px; color: white; font-weight: 100;">

            </form>
        </div>


    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>