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

    <div class="container">
        <h1 id="heading-taxiProject">Taxi Project</h1>
        <table>
            <thead id="table-heading" style="background-color: white; color: black;">
            <th id="NUM">NUM</th>    
            <th id="FECHA">FECHA</th>
                <th id="KILOMETROS">KILOMETROS</th>
                <th id="ACEITE">ACEITE</th>
                <th id="FILTRO_ACEITE">FILTRO ACEITE</th>
                <th id="FILTRO_AIRE">FILTRO AIRE</th>
                <th id="FILTRO_POLEN">FILTRO POLEN</th>
                <th id="FILTRO_GASOIL">FILTRO GASOIL</th>
                <th id="DELANTERAS">PASTILLAS<BR> DELANTERAS</th>
                <th id="TRASERAS">PASTILLAS<BR>  TRASERAS</th>
                <th id="DISCOS_DELANTEROS">DISCOS <BR>  DELANTEROS</th>
                <th id="DISCOS_TRASEROS">DISCOS <BR>  TRASEROS</th>
                <th id="RUEDAS_DELANTERAS">RUEDAS <BR>  DELANTERAS</th>
                <th id="RUEDAS_TRASERAS">RUEDAS <BR>  TRASERAS</th>
                <th id="EMBRAGUE">EMBRAGUE</th>
                <th id="OTROS">OTROS</th>
                <th id="observation">OBSERVACIONS</th>
            </thead>
            <tbody>
            <?php
                        $sr = 1;
                        while($row = $query->fetch(PDO::FETCH_ASSOC)){                            
                     
            ?>
            <tr>
                <td class="td"><?php echo $sr++; ?></td>
                <td class="td"><?php echo $row['fecha']; ?></td>
                <td class="td"><?php echo $row['kilometros']; ?></td>
                <td class="td"><?php echo $row['aceite']; ?></td>
                <td class="td"><?php echo $row['filtro_de_aceite']; ?></td>
                <td class="td"><?php echo $row['filtro_aire']; ?></td>
                <td class="td"><?php echo $row['filtro_polen']; ?></td>
                <td class="td"><?php echo $row['filtro_gasoil']; ?></td>
                <td class="td"><?php echo $row['pastillas_delanteras']; ?></td>
                <td class="td"><?php echo $row['pastillas_traseras']; ?></td>
                <td class="td"><?php echo $row['discos_delanteros']; ?></td>
                <td class="td"><?php echo $row['discos_traseros']; ?></td>
                <td class="td"><?php echo $row['ruedas_delanteras']; ?></td>
                <td class="td"><?php echo $row['ruedas_traseras']; ?></td>
                <td class="td"><?php echo $row['embrague']; ?></td>
                <td class="td"><?php echo $row['otros']; ?></td>
                <td class="td"><?php echo $row['observaciones']; ?></td>
            </tr>

            <?php } ?>
            </tbody>
            
        </table>

        <button id="add">Add</button>
       
    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>