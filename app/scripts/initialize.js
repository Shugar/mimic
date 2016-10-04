const pages = [
  'contact',
  'about',
  'gallery'
]

const videoBackground = () => {
  let video = $('.main-page .head').data('vide').getVideoObject();

  $('.main-page .play').click(() => {
    video.paused ? video.play() : video.pause();
    $('.main-page .play').removeClass('play-active');
  });
}

const checkPage = (array) => {
  for (var i in array) {
    if ($('body').hasClass(array[i] + '-wrapper'))
      $('.nav-' + array[i]).addClass('nav-active');
  }
}

const onReady = () => {
  checkPage(pages);
  videoBackground();
}

$(document).ready(onReady);
