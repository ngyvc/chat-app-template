<?php
//First load the DB connection
require_once("db_connect.php");

//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($dbi) {
    //Build the SQL query
    /* ??? HERE Collect the data from the HTML form using $_REQUEST[] */

    $q = "???"; // Write a query to add a new user in your table

    //This should contain 1 when the line is inserted
    $insertedRows = 0;

    //prepare statement, execute, store_result
    if ($insertStmt = $dbi->prepare($q)) {
        //update bind parameter types & variables as required
        //s=string, i=integer, d=double, b=blob
        $insertStmt->bind_param(/* ??? */);//Here put the code to setup the bind_param
        $insertStmt->execute();
        
        /* Here you can set it up to log in automatically like the To Do app
        You’ll need to setup the JS too for this to work.
        Looks like this:
        //Get new user’s ID
        $rArray[] = [
            "id"=>$insertStmt->insert_id
        ];

        echo json_encode($rArray);
        */
        
    } else {
        echo "Error";
    }

    //echo($insertedRows);
    $insertStmt->close();
    $dbi->close();
}
// Return to main page
echo "OK: $insertedRows item added";

?>