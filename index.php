<?php
require_once("config.php")
?>

<?php

$sql = "SELECT * FROM `taxi_project_table`";
$query = $conn->prepare($sql);
$query->execute();
?>

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

    <h1 id="heading-taxiProject">Taxi <span>Project</span></h1>
    <table>
        <thead class="table-heading">
            <tr id="table-row">
                <th colspan="4"></th>
                <th colspan="4" id="FILTROS">FILTROS</th>
                <th colspan="2" id="PASTILLAS">PASTILLAS</th>
                <th colspan="2" id="DISCOS">DISCOS</th>
                <th colspan="2" id="RUEDAS">RUEDAS</th>
                <th colspan="3"></th>


            </tr>
            <tr>
                <th id="NUM">Nº</th>
                <th id="FECHA">FECHA</th>
                <th id="KILOMETROS">KM</th>
                <th id="ACEITE">OIL</th>
                <th id="FILTRO_ACEITE">AC</th>
                <th id="FILTRO_AIRE">AI</th>
                <th id="FILTRO_POLEN">P</th>
                <th id="FILTRO_GASOIL">G</th>
                <!-- <th colspan="2">PASTILLAS</th> -->
                <th id="DELANTERAS">D</th>
                <th id="TRASERAS">T</th>

                <!-- <th colspan="2">Discos</th> -->

                <th id="DISCOS_DELANTEROS">D</th>
                <th id="DISCOS_TRASEROS">T</th>
                <!-- <th colspan="2">Ruedas</th> -->
                <th id="RUEDAS_DELANTERAS">D</th>
                <th id="RUEDAS_TRASERAS">T</th>
                <th id="EMBRAGUE">EMBRAGUE</th>
                <th id="OTROS">OTROS</th>
                <th id="observation">OBS.</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $sr = 1;
            while ($row = $query->fetch(PDO::FETCH_ASSOC)) {

            ?>
                <tr style="align-items: center;">
                    <td class="td" style="padding-left: 10px; align-items: center;"><?php echo $sr++; ?></td>
                    <td class="td" style="padding: 10px; font-weight: bold; align-items: center;"><?php echo $row['fecha']; ?></td>
                    <td class="td" style="padding-left: 10px;"><?php echo $row['kilometros']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['aceite']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['filtro_de_aceite']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['filtro_aire']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['filtro_polen']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['filtro_gasoil']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['pastillas_delanteras']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['pastillas_traseras']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['discos_delanteros']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['discos_traseros']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['ruedas_delanteras']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['ruedas_traseras']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['embrague']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['otros']; ?></td>
                    <td class="td" style="padding: 10px;"><?php echo $row['observaciones']; ?></td>
                </tr>

            <?php } ?>
        </tbody>

    </table>

    <a href="/project/input.php"><button id="add">Add</button></a>

    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>