<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(!isset($_SERVER['PHP_AUTH_USER'])) die("Access denied");

$article = $_POST['article'];
$content = $_POST['content'];

file_put_contents('/var/www-data/pages/edit/src/articles/'.$article, $content);

system("/var/www-data/pages/commit.sh 2>&1");


?>
