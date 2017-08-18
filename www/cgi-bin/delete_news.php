<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(!isset($_SERVER['PHP_AUTH_USER'])) die("Access denied");

$news = $_POST['news'];

unlink('/var/www-data/pages/edit/src/news/'.$news);
system("/var/www-data/pages/commit.sh 2>&1");


?>
