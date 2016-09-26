<?php
require_once("configs/config.php");

class Database{
	private $host 		= DB_HOST;
	private $username	= DB_USER;
	private $password	= DB_PASS;
	private $db_name	= DB_NAME;

	private $connection;
	private $error;

	function __construct(){
		//Call connect function
		$this->connect();
	}

	//Connector function
	private function connect(){
		//Create the databse connection
		$this->connection = new mysqli($this->host, $this->username, $this->password, $this->db_name);
		//check if the database connection open
		if($this->connection->connect_errno){
			$this->error = "Database connection fail";
			die( $this->error." - ".$this->connection->connect_error ." : ".$this->connection->connect_errno);
		}
	}

	//Create close database connection
	public function close_connection(){
		if (isset($this->connection)){ //if $connection is exist
			$this->connection->close();//same to mysqli_close($this->connection)
		}else{
			unset($this->connection);//otherwise unset $connnection
		}
	}
	/*SELECT*/
	//Create a select function to bind to database connection (mysqli_query(connection, query))
	public function select($sql){
		$data_set = $this->connection->query($sql);//mysqli_query(connection, query)
		if(!$data_set){
			die('Database query failed '. $this->error);
		}else{
			return $data_set;//the is raw data set. it is get really for binding array
		}
	}
	/*INSERT*/
	public function insert($sql){
		$insert_row = $this->connection->query($sql);//mysqli_query(connection, query)
		$this->confirm_query($insert_row,$sql);
		if ($this->affected_row()){
			return "true";
		}else{
			return "false";
		}
		
	}

	/*UPDATE*/
	public function update($sql){
		$update_row = $this->connection->query($sql);//mysqli_query(connection, query)
		$this->confirm_query($update_row,$sql);
		if ($this->affected_row()){
			return "true";
		}else{
			return "false";
		}
		
	}

	/*DELETE*/
	public function delete($sql){
		$delete_row = $this->connection->query($sql);//mysqli_query(connection, query)
		$this->confirm_query($delete_row);
		if ($this->affected_row()){
			return "true";
		}else{
			return "false";
		}
	
	}

	//function Display_all to show all record in table. data return is array in an array
	public function display_all($tableName){
		$sql = "SELECT * FROM {$tableName}";
		$dataSet = $this->connection->query($sql);
		$this->confirm_query($dataSet);
		$i =0;
		$dataArray=array();
		while ($i<$this->num_rows($dataSet)) {
			$dataArray[$i] = $this->fetch_array($dataSet);
			$i++;
		}
		mysqli_free_result($dataSet);
		return $dataArray;
	}

	/****************DATABASE HELPER FUNCTIONS****************************************/
	//function fetch_array: retrieve data from query set || return: array 
	public function fetch_array($data_set){
		return $data_set->fetch_array(); //same as mysqli_fetch_array($result_set);
	}

	//function count the table row || return: integer
	public function num_rows($data_set){
		return $data_set->num_rows;//mysqli_num_rows($result_set);
	}

	//function affected_row
	public function affected_row(){
		return $this->connection->affected_rows;
	}
	//function confirm the query if the result get data back
	private function confirm_query($data_set,$sql=""){
		if(!$data_set){
				die("Database query failed. ".$sql.$this->error);			
			}
	}
	//function mysql_pre to escape '.\,..insert in the data || return string
	public function escape_value($esc_string){
		$esc_string = $this->connection->real_escape_string($esc_string);// mysqli_real_escape_string($this->connection, $esp_string);
		return $esc_string;
	}
}

$db = new Database();
?>

