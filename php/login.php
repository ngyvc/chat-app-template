<?php 
//First load the DB connection
require_once("db_connect.php");

//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($dbi) {
    // SQL query
    $q = "???"; // Write a query to get the id of the provided full name and password

    // Array to translate to json
    $rArray = array();

    if ($stmt = $dbi->prepare($q)) {
        //Prepare input
        /* ??? HERE Collect the data from the HTML form using $_REQUEST[] */
        $stmt->bind_param(/* ??? */);//Here put the code to setup the bind_param

        //Prepare output
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($rId,$rAlias);

        //Collect results
        while($stmt->fetch()) {
            $rArray[] = [
                "id"=>$rId,
                "alias"=>$rAlias
            ];
        }
        
        //Encode JSON
        echo json_encode($rArray);
        
        $stmt->close();        
    }
    else {
        echo "no execute statement";
    }
}
//Inform user if error
else {
        echo "Connection Error: " . mysqli_connect_error();
}
//Close connection
mysqli_close($dbi);
    
?>