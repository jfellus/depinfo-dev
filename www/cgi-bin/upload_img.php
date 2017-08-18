<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$target_file = "../img/" . $_FILES["img"]["name"];

echo $target_file;

if ($_FILES["img"]["size"] > 2000000) die("Sorry, your file is too large.");
$check = getimagesize($_FILES["img"]["tmp_name"]);
if(!$check) die("File is not an image.");
if (file_exists($target_file)) die("Sorry, file already exists.");
move_uploaded_file($_FILES["img"]["tmp_name"], $target_file);

?>
