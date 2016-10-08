function galleryInit() {
  var $overlay = $('<div class="fotorama-overlay"></div>')
      .css({position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 10001})
      .fadeTo(0, 0)
      .hide()
      .appendTo('body');

  $('.thumbs').each(function () {
    var $thumbs = $(this),
        $fotorama = $('.fotorama', $thumbs)
            .clone()
            .css({position: 'absolute', left: -99999, top: -99999})
            .appendTo('body')
            .fadeTo(0, 0)
            .fotorama(),
        fotorama = $fotorama.data('fotorama');
    for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
      fotorama.data[_i].id = fotorama.data[_i].img;
    }

    $thumbs.on('click', 'a', function (e) {
      e.preventDefault();
      var $this = $(this);
      $overlay
          .show()
          .stop()
          .fadeTo(150, 1, function () {
            $fotorama.stop().fadeTo(150, 1);
            fotorama
                .show({index: $this.attr('href'), time: 0})
                .requestFullScreen();
          });
    });
    $fotorama.on('fotorama:fullscreenexit', function () {
      $fotorama.stop().fadeTo(0, 0);
      $overlay.stop().fadeTo(300, 0, function () {
        $overlay.hide();
      });
    });
  });
}

const onReady = () => {
  galleryInit();

  if (document.location.hash) {
    $("a[href*='" + document.location.hash.replace('#', '') + "']").trigger('click');
  }
}

$(document).ready(onReady);
