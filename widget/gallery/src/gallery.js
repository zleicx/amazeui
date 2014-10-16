define(function(require, exports, module) {
  'use strict';

  require('core');
  require('ui.pureview');

  var $ = window.Zepto,
      UI = $.AMUI;

  var galleryInit = function() {
    var $gallery = $('[data-am-widget="gallery"]'),
        $galleryOne = $gallery.filter('.am-gallery-one');

    $gallery.each(function() {
      var options = UI.utils.parseOptions($(this).attr('data-am-gallery'));

      if (options.pureview) {
        (typeof options.pureview === 'object') ?
            $(this).pureview(options.pureview) : $(this).pureview();
      }
    });

    $galleryOne.each(function() {
      galleryMore($(this));
    });
  };

  function galleryMore($elements) {
    var moreData = $('<li class=\'am-gallery-more\'>' +
        '<a href=\'javascript:;\'>更多 &gt;&gt;</a></li>');

    if ($elements.children().length > 6) {
      $elements.children().each(function(index) {
        if (index > 5) {
          $(this).hide();
        }
      });

      $elements.find('.am-gallery-more').remove();
      $elements.append(moreData);
    }

    $elements.find('.am-gallery-more').on('click', function() {
      $elements.children().show();
      $(this).hide();
    });
  }

  $(function() {
    galleryInit();
  });

  exports.init = galleryInit;
});
