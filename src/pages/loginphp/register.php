<?php
/* Registration process, inserts user info into the database
   and sends account confirmation email message
 */

// Set session variables to be used on profile.php page
$_SESSION['email'] = $_POST['email'];
$_SESSION['pseudo'] = $_POST['pseudo'];
$_SESSION['tel'] = $_POST['tel'];
$_SESSION['dateN'] = $_POST['dateN'];

// Escape all $_POST variables to protect against SQL injections
$pseudo = $mysqli->escape_string($_POST['pseudo']);
$email = $mysqli->escape_string($_POST['email']);
$tel = $mysqli->escape_string($_POST['tel']);
$dateN = $mysqli->escape_string($_POST['dateN']);
$password = $mysqli->escape_string($_POST['password']);
/*$first_name = $mysqli->escape_string($_POST['firstname']);
$last_name = $mysqli->escape_string($_POST['lastname']);
$email = $mysqli->escape_string($_POST['email']);
$password = $mysqli->escape_string(password_hash($_POST['password'], PASSWORD_BCRYPT));
$hash = $mysqli->escape_string( md5( rand(0,1000) ) );*/
$dateN = new DateTime($dateN);
$dateN = date_format($dateN, 'Y-m-d');
// Check if user with that email already exists
$result = $mysqli->query("SELECT * FROM utilisateur WHERE email='$email'") or die($mysqli->error());

// We know user email exists if the rows returned are more than 0
if ( $result->num_rows > 0 ) {

    $_SESSION['message'] = 'Il existe déjà un compte avec cette adresse email';
    header("location: error.php");

}
else { // Email doesn't already exist in a database, proceed...

    // active is 0 by DEFAULT (no need to include it here)
    $sql = "INSERT INTO utilisateur (pseudo, password, email, tel, dateN) "
            . "VALUES ('$pseudo','$password','$email','$tel', '$dateN')";

    // Add user to the database
    if ( $mysqli->query($sql) ){
        echo 'test';
        $_SESSION['active'] = 1; //0 until user activates their account with verify.php
        $_SESSION['logged_in'] = true; // So we know the user has logged in

    }

    else {
        echo 'test2';
        $_SESSION['message'] = $mysqli;
        header("location: error.php");
    }

}
