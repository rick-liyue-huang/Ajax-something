<?php
	
	// 指定文档类型告诉浏览器如何处理
	header('Content-Type:text/xml; charset=utf-8');

	// 理论这一步应该是从数据库取出的，然后后端人员将数据转成xml格式

	$result = file_get_contents('table01.xml');

	echo $result;



?>