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
        <h1 id="heading-taxiProject">Taxi <span style="color: #FFFF00;">Project</span></h1>
        <table>
            <thead id="table-heading" style="background-color: white; color: black;">
            <th id="NUM" style="background-color: #355c7d; color: #fff;">NUM</th>    
            <th id="FECHA" style="background-color: #355c7d; color: #fff;">FECHA</th>
                <th id="KILOMETROS"style="background-color: #355c7d; color: #fff;">KILOMETROS</th>
                <th id="ACEITE" style="background-color: #355c7d; color: #fff;">ACEITE</th>
                <th id="FILTRO_ACEITE" style="background-color: #355c7d; color: #fff;">FILTRO ACEITE</th>
                <th id="FILTRO_AIRE" style="background-color: #355c7d; color: #fff;">FILTRO AIRE</th>
                <th id="FILTRO_POLEN" style="background-color: #355c7d; color: #fff;">FILTRO POLEN</th>
                <th id="FILTRO_GASOIL" style="background-color: #355c7d; color: #fff;">FILTRO GASOIL</th>
                <th id="DELANTERAS" style="background-color: #355c7d; color: #fff;">PASTILLAS<BR> DELANTERAS</th>
                <th id="TRASERAS" style="background-color: #355c7d; color: #fff;">PASTILLAS<BR>  TRASERAS</th>
                <th id="DISCOS_DELANTEROS" style="background-color: #355c7d; color: #fff;">DISCOS <BR>  DELANTEROS</th>
                <th id="DISCOS_TRASEROS" style="background-color: #355c7d; color: #fff;">DISCOS <BR>  TRASEROS</th>
                <th id="RUEDAS_DELANTERAS" style="background-color: #355c7d; color: #fff;">RUEDAS <BR>  DELANTERAS</th>
                <th id="RUEDAS_TRASERAS" style="background-color: #355c7d; color: #fff;">RUEDAS <BR>  TRASERAS</th>
                <th id="EMBRAGUE" style="background-color: #355c7d; color: #fff;">EMBRAGUE</th>
                <th id="OTROS" style="background-color: #355c7d; color: #fff;">OTROS</th>
                <th id="observation" style="background-color: #355c7d; color: #fff;">OBSERVACIONS</th>
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

        <a href="/project/input.php"><button id="add">Add</button></a>
       
    </div>

    <script src='./js/bootstrap.min.js'></script>
    <script src="./js/jquery.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>