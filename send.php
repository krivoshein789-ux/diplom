<?php

$company = $_POST['company'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "santehsmart72@mail.ru";

$subject = "Новая заявка с сайта СанТехСмарт";

$body = "
Компания: $company

Контактное лицо: $name

Телефон: $phone

E-mail: $email

Описание:
$message
";

$headers = "From: noreply@santehsmart72.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $body, $headers);

echo "success";

?>