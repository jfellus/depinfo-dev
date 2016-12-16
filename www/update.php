<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

system("/var/www-data/pages/commit.sh 2>&1");

?>
