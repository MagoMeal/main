<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name'] ?? '');
    $email   = htmlspecialchars($_POST['email'] ?? '');
    $company = htmlspecialchars($_POST['company'] ?? '');
    $type    = htmlspecialchars($_POST['inquiryType'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    $to = "info@magomeal.nl";
    $subject = "New Contact Form Message from $name";
    $body = "
You received a new message from your website contact form:

Name: $name
Email: $email
Company: $company
Inquiry Type: $type

Message:
$message
";
    $headers = "From: info@magomeal.nl\r\nReply-To: $email\r\n";


    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
