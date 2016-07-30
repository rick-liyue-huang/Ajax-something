<?php 
	header('Content-Type:application/json; charset=utf-8');

	$result = file_get_contents('table01.json');

	echo $result;
?>

