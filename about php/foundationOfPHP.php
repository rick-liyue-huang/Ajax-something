<!-- Some initial knowledge about php provided here -->

<?php 
	header('Content-Type:text/html; charset=utf-8');

	// echo "<h1>one small prog.</h1>";

	// $a = 10;
	// $b = 15;

	// echo $a;

	// echo "<br />";
	// echo "<br />";
	// echo $b;

	$str = 'hello php';
	echo $str;

	echo "<br />";

	$num = 10.5;
	echo $num;

	echo "<br />";

	$bool = false;
	echo $bool;

	echo "<br />";

	$arr = array(1, 2, 3, 4);
	echo $arr;

	echo "<br />";

	print_r($arr);

	echo "<br />";
	echo $arr[2];

	echo "<br/>";

	$arr1 = array('name'=>'itcast', 'age'=> 10);
	echo $arr1;
	echo "<br/>";
	print_r($arr1);
	echo "<br/>";
	echo $arr1['name'];

	echo "<br />";

	class Person {
		public $name = 'rick';
		public $age = 39;
	}


	$p = new Person();
	// echo $p;

	var_dump($p);

	echo "<br />";

	echo $p -> name;

	echo "<br />";
	echo $p -> age;

	echo "<br />";

	$hello = 'hello ';
	$world = 'world';

	echo $hello.$world;
	echo "<br />";
	var_dump($hello);

	$arr2 = array('name' => 'leo');
	echo "<br />";
	var_dump($arr2);
	echo "<br />";

	function sayHello($person = 'itcast') {
		echo "hello ".$person;
	}

	sayHello('rick');
	echo "<br />";

	$arr3 = array(1, 2, 3, 4, 5, 6);
	echo count($arr3);
	echo "<br />";

	for ($i=0; $i < count($arr3); $i++) { 
		echo "<br />";
		echo $arr3[$i];
	}

	$arr4 = array('name'=>'itcast', 'age'=>59);
	echo "<br />";

	foreach ($arr4 as $key => $value) {
		echo "<br />";
		echo $key;
		echo "<br />";
		echo $value;
	}

	echo "<br />";

	$str1 = 'hello ';

	echo "$str1 world";
	echo "<br />";
	echo $str1 . 'world';



?>

<!DOCTYPE html>
<html>
<head>
	<title>docus</title>
</head>
<body>
	<h4>this is html content</h4>

	<script type="text/javascript">
		document.write('hello');
	</script>

</body>
</html>