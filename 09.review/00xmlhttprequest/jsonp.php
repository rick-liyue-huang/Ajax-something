<?php
	
	header('Content-Type: text/javascript; charset=utf-8');

	// echo $_GET['color'];

	// 从数据库取了很多数据

	$arr = array(
		"name"=>'rick',
		"age"=>10
	);

	// 以json形式
	$arr = json_encode($arr);

	// 接收获取客户端事先定义好的一个函数名
	$callback = $_GET['callback']; // sayName

	echo $callback . '(' . $arr . ')';

?>