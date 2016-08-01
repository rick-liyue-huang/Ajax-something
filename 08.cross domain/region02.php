<?php

	header('Content-Type:application/json; charset=utf-8');

	
	$region = file_get_contents('./region02.json');

	// transfer to array
	$region = json_decode($region, true);

	$type = $_GET['type'];
	$pid = $_GET['pid'];

	// return json format
	echo json_encode($region[$type][$pid]);


?>