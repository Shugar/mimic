function sendMail() {
  $(".form").submit(function() {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendmail.php",
      data: form_data,
      success: function() {
        console.log('ZAEBIST!')
      }
    });
  });
}

const onReady = () => {
  sendMail();
}

$(document).ready(onReady);
