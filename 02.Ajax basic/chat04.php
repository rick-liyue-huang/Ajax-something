<?php


	$messages = array(
		'what you said?',
		'hello,',
		'what happend？'，
		'i am eating'
	);


	// get random number in array
	// var_dump(array_rand($messages));

	// echo array_rand($messages);

	echo $messages[array_rand($messages)];

	sleep(1);


?>