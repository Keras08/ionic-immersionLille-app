<?php
/* User login process, checks if user exists and password is correct */

// Escape email to protect against SQL injections
$email = $mysqli->escape_string($_POST['email']);
$result = $mysqli->query("SELECT * FROM utilisateur WHERE email='$email'");

if ( $result->num_rows == 0 ){ // User doesn't exist
    $_SESSION['message'] = "Il n'y a pas de compte avec cette adresse mail";
    header("location: error.php");
}
else { // User exists
    $utilisateur = $result->fetch_assoc();

    if ( $_POST['password'] == $utilisateur['password'] ) {

        $_SESSION['email'] = $utilisateur['email'];
        $_SESSION['pseudo'] = $utilisateur['pseudo'];
        $_SESSION['tel'] = $utilisateur['tel'];
        $_SESSION['dateN'] = $utilisateur['dateN'];

        // This is how we'll know the user is logged in
        $_SESSION['logged_in'] = true;

        header("location: profile.php");
    }
    else {
        $_SESSION['message'] = "You have entered wrong password, try again!";
        header("location: error.php");
    }
}
