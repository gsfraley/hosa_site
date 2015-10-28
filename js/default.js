;(function ($) {
    'use strict';

    var $body = $('html, body'),
        $content = $('#content').addClass("animated fadeInUp").smoothState({
            onStart: {
                duration: 2000,
                render: function (url, $container) {
                    $body.animate({
                        scrollTop: 0
                    });
                    $content.addClass('fadeOutDown');
                    smoothState.restartCSSAnimations();
                }
            }
        }).data('smoothState');
})(jQuery);
