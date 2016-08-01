<?php

	// confirm the doc type
	header('Content-Type:application/json; charset=utf-8');

	$result = file_get_contents('stars03.json');

	echo $result;


?>