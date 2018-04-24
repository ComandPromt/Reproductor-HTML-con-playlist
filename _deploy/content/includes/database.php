<?php  
  
	require("outside-web-root-settings.php");
	
	if(!isset($_REQUEST['db_name']) || !isset($_REQUEST['db_table']) || !isset($_REQUEST['db_type']) || IsNullOrEmpty($username) || IsNullOrEmpty($password) || IsNullOrEmpty($hostname)) exit("Database information missing!");
	
	$database = $_REQUEST['db_name'];
	$table = $_REQUEST['db_table'];
	$type = $_REQUEST['db_type'];
	
	if(isset($_REQUEST['limit']))$limit = $_REQUEST['limit'];
	if(isset($_REQUEST['range_from']))$range_from = $_REQUEST['range_from'];
	if(isset($_REQUEST['range_to']))$range_to = $_REQUEST['range_to'];
	
	function IsNullOrEmpty($v){
		return (!isset($v) || trim($v)==='');
	}
  
	$connection = mysqli_connect($hostname,$username,$password);
	if(!$connection){
		die('Db connection failed: ' . mysqli_connect_errno());
	}
				
	$db_select = mysqli_select_db($connection, $database);
	if(!$db_select){
		die('Db selection failed: ' . mysqli_error($connection));
	}
	
	if(!IsNullOrEmpty($limit)){
		$result = mysqli_query($connection, "SELECT * FROM $table LIMIT $limit");
	}else if(!IsNullOrEmpty($range_from) && !IsNullOrEmpty($range_to)){
		$result = mysqli_query($connection, "SELECT * FROM $table LIMIT $range_from, $range_to");
	}else{
		$result = mysqli_query($connection, "SELECT * FROM $table");
	}
	
	if(!$result){
		die('Db query failed: ' . mysqli_error($connection));
	}

	while($row = mysqli_fetch_array($result)){
		if($type == 'database_data'){
			$new = array(
				'type' => $row['type'],
				'mp3' => $row['mp3'],
				'ogg' => $row['ogg'],
				'title' => $row['title'],
				'thumb' => $row['thumb'],
				'download' => $row['download'],
				'dlink' => $row['dlink'],
				'plink' => $row['plink']
			);
		}else{//html
			$new = array(
				'path' => $row['path']
			);
		}
        $encode[] = $new;
	}
	echo json_encode( $encode );
		
	mysqli_close($connection);

?>