<?php 
	header('Content-Type:application/json; charset=utf-8');

	/*
	1. php connect database to get data
	2. normally, transfer the gotten data to array
	3. then transfer to json by 'json_encode()' from array
	4. by 'file_get_contents()' method to assign to echo, and send to js or 	other lang
	5.here we assume we already got json.

	*/

	$result = file_get_contents('table02.json');

	echo $result;
?>