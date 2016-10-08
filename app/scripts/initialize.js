const pages = [
  'contact',
  'about',
  'gallery'
]

function toggleMenu() {
  $('.nav-toggle').on('click', function(event) {
    event.preventDefault();
    $('.nav').toggleClass('nav-showed');
    $('body').toggleClass('body-fixed');
  });
}


function checkPage(array) {
  for (var i in array) {
    if ($('body').hasClass(array[i] + '-wrapper'))
      $('.nav-' + array[i]).addClass('nav-active');
  }
}

const onReady = () => {
  checkPage(pages);
  toggleMenu();
}

$(document).ready(onReady);
