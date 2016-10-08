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

function footerRouter() {
  $('.footer-gallery-item').click((e) => {
    var data = $(e.target).attr('src');
    var currUrl = window.location.pathname;
    var nextUrl = '/gallery.html#' + data.match(/\/(photo-(\d*).jpg)$/)[1];
    console.log(currUrl)
    if (currUrl != '/' && nextUrl.match(currUrl)) {
      window.location.href = nextUrl;
      window.location.reload();
    } else {
      window.location.href = nextUrl
    }
  });
}

const onReady = () => {
  checkPage(pages);
  toggleMenu();
  footerRouter();
}

$(document).ready(onReady);
