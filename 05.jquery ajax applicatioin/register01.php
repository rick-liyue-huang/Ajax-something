<?php

	// server end verify
	if($_POST['name']) {
		// 
		$arr = array(
			'code'=>10000,
			'msg'=>'register success',
			'result'=>array('name'=>'itcast', 'age'=>10)
		);
	} else {
		$arr = array(
			'code'=>10002,
			'msg'=>'register false',
			'result'=>'more info'
		);
	}

	// sleep(5);


	echo json_encode($arr);

	sleep(2);

?>