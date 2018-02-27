<!DOCTYPE html>
<html>
<head>
	<title>Recieved</title>
</head>
<body>
	<?php
		$userName = $_POST["name"];
	    $msg = $userName . ", we have recieved your email and will get back to you soon.";
		echo "<script type='text/javascript'>alert('$msg');</script>";
	?>
</body>
</html>