<?php

	header('Content-Type:application/json; charset=utf-8');

	// get the json data
	$data = file_get_contents('./waterfall04.json');

	// transfer to php array
	$data = json_decode($data);

	// get offset by page number
	$page = $_POST['page'];

	// the start number of each page
	$offset = ($page - 1) * 10;

	// get first ten
	$result = array_slice($data, $offset, 10);

	// next page
	$page++;

	echo json_encode(array('page'=>$page, 'items'=>$result));

	sleep(1);

?>