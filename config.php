<?php 

$db_user = "root";              // Database User Name
$db_pass = "";                  // Database user password

//$db_name = "mysql:dbname=user_account;";                                  // Database Name ---- its working
$db_name = "mysql:host=localhost;dbname=taxi_project;charset=utf8";         // Database Name  ---- its working
//$db_name = "mysql:dbname=user_account;host=localhost;charset=utf8";       // Database Name  ---- its working

$conn = new PDO($db_name, $db_user, $db_pass);      //3-sql database connection (1-MySQLi Procedural  2-MySQLi Object-Oriented  3-PDO)
                                                    //https://www.youtube.com/watch?v=Lo8THRA4Pj4
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);      // Error Handler

?>