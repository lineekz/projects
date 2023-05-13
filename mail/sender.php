<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];

	$to = "myavtoskola@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка на обучение";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n";
	mail($to, $subject, $msg, "From: $to ");

?>