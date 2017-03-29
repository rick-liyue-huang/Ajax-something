<?php



	// 可以接收普通的post方式数据
	echo $_POST['name'];
	echo $_POST['age'];

	// 文件则用$_FILES来接收
	print_r($_FILES);

	move_uploaded_file($_FILES['photo']['tmp_name'], './photo.jpg');
?>