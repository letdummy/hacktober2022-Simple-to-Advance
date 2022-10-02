<?php
//Establishing connection with the database
define('DB_SERVER', 'localhost:3306');

define('DB_USERNAME', 'root');

define('DB_PASSWORD', 'root123');

//where books is the database name
define('DB_DATABASE', 'books');

$db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>