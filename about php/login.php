<!-- a visual server -->

<?php 
	
	header('Content-Type:text/html; charset=utf-8');


	// php has the special variable used to store the submitted data they are $_POST, $_GET, and both are array type

	// echo $_POST;
	// print_r($_POST);

	// echo "hello " . $_POST['name'];
	// echo ", your password is " . $_POST['pass'];
	// echo ', your email is ' . $_POST['email'];

	// PHP receive data from front-end by $_FILES

	// print_r($_FILES);

	// sleep(2);
	// move_uploaded_file($_FILES['photo']['temp_name'], './images/test.jpg');

// $arr1 = array('name'=>'itcast', 'age'=> 10); // contrast this line to the following line.
	$users = array(
		// k => v
		'admin'=>'1234',
		'test'=>'4321'
	);

	// Array ( [username] => [pass] => ) $_POST本身返回的是数组

	$name = $_POST['username'];
	$pass = $_POST['pass'];

	if (array_key_exists($name, $users) && $users[$name] == $pass) {
		echo "success";
		header('refresh:3; url=http://www.google.com');
	} else {
		echo "username is wrong";
		header('refresh:3; url=./login.html');
	}




?>




























