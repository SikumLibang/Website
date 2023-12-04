<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "imsikumlimbu@gmail.com";
    $subject = $_POST["subject"] ?? "No Subject";
    $message = $_POST["message"] ?? "No Message";
    $headers = "From: " . $_POST["email"];

    mail($to, $subject, $message, $headers);
}
?>
