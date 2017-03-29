<?php




	// 文件则用$_FILES来接收
	// print_r($_FILES);

	// move_uploaded_file($_FILES['photo']['tmp_name'], './photo.jpg');

	// print_r($_FILES);

	// echo $_FILES['picture']['tmp_name'];
	
	move_uploaded_file($_FILES['picture']['tmp_name'], './upload.jpg');

	echo './upload.jpg';




?>