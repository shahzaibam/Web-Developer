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

    <div class="container">
        <h1 id="heading-taxiProject">Taxi Project</h1>
        


        <form action="save.php" method="post">
            
            <label for="FECHA">FECHA</label><br>
            <input name="FECHA" type="text" class="input_text" required><br>
            <label for="KILOMETROS">KILOMETROS</label><br>
            <input name="KILOMETROS" type="text" class="input_text"><br>
            <label for="ACEITE">ACEITE</label><br>
            <input name="ACEITE" type="text" class="input_text"><br>
            <label for="FILTRO_ACEITE">FILTRO_ACEITE</label><br>
            <input name="FILTRO_ACEITE" type="text" class="input_text"><br>
            <label for="FILTRO_AIRE">FILTRO_AIRE</label><br>
            <input name="FILTRO_AIRE" type="text" class="input_text"><br>
            <label for="FILTRO_POLEN">FILTRO_POLEN</label><br>
            <input name="FILTRO_POLEN" type="text" class="input_text"><br>
            <label for="FILTRO_GASOIL">FILTRO_GASOIL</label><br>
            <input name="FILTRO_GASOIL" type="text" class="input_text"><br>
            <label for="DELANTERAS">DELANTERAS</label><br>
            <input name="DELANTERAS" type="text" class="input_text"><br>
            <label for="TRASERAS">TRASERAS</label><br>
            <input name="TRASERAS" type="text" class="input_text"><br>
            <label for="DISCOS_DELANTEROS">DISCO DELANTEROS</label><br>
            <input name="DISCOS_DELANTEROS" type="text" class="input_text"><br>
            <label for="DISCO_TRASEROS">DISCO TRASEROS</label><br>
            <input name="DISCOS_TRASEROS" type="text" class="input_text"><br>
            <label for="RUEDAS_DELANTERAS">RUEDAS DELANTERAS</label><br>
            <input name="RUEDAS_DELANTERAS" type="text" class="input_text"><br>
            <label for="RUEDAS_TRASERAS">RUEDAS TRASERAS</label><br>
            <input name="RUEDAS_TRASERAS" type="text" class="input_text"><br>
            <label for="EMBRAGUE">EMBRAGUE</label><br>
            <input name="EMBRAGUE" type="text" class="input_text"><br>
            <label for="OTROS">OTROS</label><br>
            <input name="OTROS" type="text" class="input_text"><br>
            <label for="observation">observation</label><br>
            <input name="observation" type="text" class="input_text"><br>
            <input type="submit" name="save">

        </form>

    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>