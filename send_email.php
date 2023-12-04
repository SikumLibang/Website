<?php
if (isset($_POST['btn-send'])) {
    $userName = $_POST['uname'];
    $userEmail = $_POST['email'];
    $userNumber = $_POST['number'];
    $emailSubject = $_POST['subject'];
    $userMessage = $_POST['message'];

    $to = "skllimbu2005@gmail.com";
    $subject = "Contact Form: $emailSubject";
    $body = "Name: $userName\nEmail: $userEmail\nMobile Number: $userNumber\n\nMessage:\n$userMessage";

    $headers = "From: $userEmail";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you for contacting us. Your message has been sent successfully.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>    