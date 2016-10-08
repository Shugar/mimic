<?
if((isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['message'])&&$_POST['message']!="")){
  $to = 'alrawassamer@gmail.com';
  $subject = htmlspecialchars($_POST['subject']);
  $message = '
          <html>
              <head>
                  <title>'.$subject.'</title>
              </head>
              <body>
                  <p>Email: '.$_POST['email'].'</p>
                  <p>Message: '.$_POST['message'].'</p>
              </body>
          </html>';
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: Mimic website <robot@mimicfun.com>\r\n";
  mail($to, $subject, $message, $headers);
}
?>
