const pages = [
  'contact',
  'about',
  'gallery'
]

function videoBackground() {
  let video = $('.main-page .head').data('vide').getVideoObject();

  $('.main-page .play').click(() => {
    video.paused ? video.play() : video.pause();
    $('.main-page .play').removeClass('play-active');
  });
}

function checkPage(array) {
  for (var i in array) {
    if ($('body').hasClass(array[i] + '-wrapper'))
      $('.nav-' + array[i]).addClass('nav-active');
  }
}

function launchStellar() {
  var offset = $(window).height()/4

  $('.section').each((i,e) => {
    $(e).find('.bg').attr('data-stellar-vertical-offset', offset*(i+1))
  })

  $.stellar({
    horizontalScrolling: false,
    // scrollProperty: 'transform',
    // positionProperty: 'transform'
  })
}

const onReady = () => {
  launchStellar();
  checkPage(pages);
  videoBackground();
}

$(document).ready(onReady);
