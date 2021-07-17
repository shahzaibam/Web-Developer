<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taxi Project</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
<nav class="navigation-bar">
        <ul class="unList">
            <a href="/project/index.php"><li>Taxi Project</li></a>
            <a href="/project/index.php"><li>Home</li></a>
            <a href="/project/input.php"><li>Input</li></a>
        </ul>
    </nav>
    <div class="container">
        <h1 id="heading-taxiProject" class="input-heading-taxi"> Taxi Project </span></h1>

        <div class="form">
            <form action="save.php" method="post">
            <h2 class="trabajos" >Trabajos Realizados</h2>

                <div class="firstsec">
            
                    <label for="FECHA">FECHA</label>
                    <input class="inp-fecha" name="FECHA" type="date" class="input_text" required>


                    <label class="kilo-label" for="KILOMETROS">KILOMETROS</label>
                    <input class="inp-kilo" name="KILOMETROS" type="text" class="input_text">


                    <label class="aceite-label" for="ACEITE">ACEITE</label>
                    <input class="aceite-input"  name="ACEITE" type="text" class="input_text">


                    <label class="filtroaceite-label" for="FILTRO_ACEITE">FILTRO_ACEITE</label>
                    <input class="filtroaceite-inp" name="FILTRO_ACEITE" type="text" class="input_text">


                    <label for="FILTRO_AIRE">FILTRO_AIRE</label>
                    <input class="input-faire" name="FILTRO_AIRE" type="text" class="input_text">


                    <label class="polen-lab" for="FILTRO_POLEN">FILTRO_POLEN</label>
                    <input class="input-polen" name="FILTRO_POLEN" type="text" class="input_text">

 
                    <label for="FILTRO_GASOIL">FILTRO_GASOIL</label>
                    <input class="input-gasoil" name="FILTRO_GASOIL" type="text" class="input_text">


                    <label class="label-embrague" style="margin-left: 20px;" for="EMBRAGUE">EMBRAGUE</label>
                    <input class="input-embrague" style="margin: 3px;" name="EMBRAGUE" type="text" class="input_text">



                </div>
                <div class="secsect" style="display: grid; grid-template-columns: 200px 200px 200px 200px;">
                    <label  for="TRASERAS">PASTILLAS TRASERAS</label>
                    <input class="input-sec2" name="TRASERAS" type="text" class="input_text">

                    <label class="label-sec2-dos" for="DELANTERAS">PASTILLAS DELANTERAS</label>
                    <input class="input-sec2-dos" name="DELANTERAS" type="text" class="input_text">

                    <label class="label-sec2"  for="DISCOS_DELANTEROS">DISCO DELANTEROS</label>
                    <input class="input-sec2" name="DISCOS_DELANTEROS" type="text" class="input_text">


                    <label class="label-sec2-dos"  for="DISCO_TRASEROS">DISCO TRASEROS</label>
                    <input class="input-sec2-dos" name="DISCOS_TRASEROS" type="text" class="input_text">

                    <label class="label-sec2"  for="RUEDAS_DELANTERAS">RUEDAS DELANTERAS</label>
                    <input class="input-sec2" name="RUEDAS_DELANTERAS" type="text" class="input_text">


                    <label class="label-sec2-dos" for="RUEDAS_TRASERAS">RUEDAS TRASERAS</label>
                    <input class="input-sec2-dos"name="RUEDAS_TRASERAS" type="text" class="input_text">


                    <label class="label-sec2"  for="OTROS">OTROS</label>
                    <input class="input-sec2" id="otros"  name="OTROS" type="text" class="input_text">
                
                

                </div>
                <label class="observacion" for="observation">OBSERVATION</label>
                <textarea class="textarea" name="observation" type="text" class="input_text"></textarea><br>
                <input type="submit" class="submit-btn" name="save" value="Save" style="">

            </form>
        </div>


    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>