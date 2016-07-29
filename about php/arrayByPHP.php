<!-- how to apply php in html and deal with the dom array -->

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>php array sample</title>
	<style type="text/css">
		.toplist {
			font-size: 30px;
		}
	</style>
</head>
<body>

	<?php 
// assum the data from database of server
		$arr = array(
			array('broadcast'),
			array('discovery', 'docs', 'feelings'),
			array('album', 'life', 'fashion', 'favour'),
			array('Wiki'),
			array('group')
		);
	?>

	<ul>  
		<!-- outer loop -->
		<?php foreach ($arr as $key => $value) { ?>
			
			<li>
			<!-- inner loop -->
				<?php foreach ($value as $k => $v) { ?>

					<?php if ($k === 0) { ?>
						<a href="#" class="toplist"><?php echo $v; ?></a>
					<?php } else { ?>
						<a href="#"><?php echo $v; ?></a>
					<?php } ?>

					
				<?php } ?>


			</li>


		<?php } ?>
		

	</ul>



</body>
</html>
























