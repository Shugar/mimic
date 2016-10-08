<?php

$to = "shugar348@gmail.com";

if ((isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['message'])&&$_POST['message']!="")) {
	$email = htmlspecialchars($_POST['email']);
	$text = htmlspecialchars($_POST['message']);
	$subject = htmlspecialchars($_POST['subject']);
	$error = '';
	if(!$email or !$subject){$error .= "Please fill all fields";}
	if(!$error){
		$header="Content-type:text/plain;charset=utf-8\r\n";
		$header.="From: Mimic website <robot@mimicfun.com>\r\n";
		$body = "Email: ".$email."\r\nText: ".$text;
		$mail = mail($to, $subject, $body, $header);
		if($mail){
			echo 'OK';
		}
	}
	else{
		echo $error;
	}
}

?>
