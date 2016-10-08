function sendMail() {
  $(".form").submit(function(e) {

    if ($('.form .textarea').val() !== '' && $('.form .input-email').val() !== '') {
      var form_data = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: form_data,
        success: function() {
          $('.form .input-email').removeClass('input-empty');
          $('.form .textarea').removeClass('input-empty');
          swal("Good job!", "Message was sended", "success")
        }
      });
    } else {
      if ($('.form .input-email').val() == '') {
        $('.form .input-email').addClass('input-empty');
      } else {
        $('.form .input-email').removeClass('input-empty');
      }

      if ($('.form .textarea').val() == '') {
        $('.form .textarea').addClass('input-empty');
      } else {
        $('.form .textarea').removeClass('input-empty');
      }

      swal("Error!", "Empty fields", "error")
    }


    e.preventDefault();
  });
}

const onReady = () => {
  sendMail();
}

$(document).ready(onReady);
