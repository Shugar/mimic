var YouTubePlayer = require('youtube-player');

const pages = [
  'contact',
  'about',
  'gallery'
]

const stateNames = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'video cued'
};

function toggleMenu() {
  $('.nav-toggle').on('click', function(event) {
    event.preventDefault();
    $('.nav').toggleClass('nav-showed');
    $('body').toggleClass('body-fixed');
  });
}

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

function videoBackground() {
  let video = $('.main-page .head').data('vide').getVideoObject();
  window.video = video;
  var player = YouTubePlayer('player', {
        videoId: 'GeoUELDgyM4'
    });

  player.on('stateChange', function (event) {
      if (!stateNames[event.data]) {
          throw new Error('Unknown state (' + event.data + ').');
      }
      console.log(event);
      if (event.data==0 || event.data==2) {
        $('.title, .mouse').fadeIn();
        $('#player').fadeOut();
        $('.main-page .play').addClass('play-active');
        video.play()
      }
      if (event.data==1) {
        $('.title, .mouse').fadeOut();
        $('#player').fadeIn();
        $('.main-page .play').removeClass('play-active');
        video.pause();
      }
  });
  $('.main-page .play').click(() => {

    player.playVideo();
    video.pause();
    $('.main-page .play').toggleClass('play-active');
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
  checkPage(pages);
  toggleMenu();

  if ($(window).width() < 768)
    launchStellar();

  if ($('body').hasClass('main-page'))
    videoBackground();

  if ($('body').hasClass('about-wrapper'))
    toggleInfo();
}

$(document).ready(onReady);
