function toggleInfo() {
  $('.plus').on('click', function(event) {
    event.preventDefault();

    if ($(this).hasClass('plus-active')) {
      $(this).removeClass('plus-active');
    } else {
      $('.plus').removeClass('plus-active');
      $(this).addClass('plus-active');
    }
  });
}

const onReady = () => {
  toggleInfo();
}

$(document).ready(onReady);
