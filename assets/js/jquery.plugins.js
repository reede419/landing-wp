jQuery.fn.affixBlock = function (options) {
    var e = jQuery(this);
    jQuery(document).ready(function () {
        e.affix({
            offset: {
                top: e.offset().top,
                bottom: jQuery('.footer-wrapper').height()
            }
        });
    });
};

jQuery.fn.animatedNavLi = function (options) {
    var e = jQuery(this);
    var li = e.find('li');
    var delay = 0;

    li.css({
        'position': 'relative',
        'left': '-100px',
        'opacity': 0
    });


    li.each(function() {
        $(this).delay(delay).animate({
            left: 0,
            opacity: 1
        }, 500, 'easeOutQuart');

        delay += 100, delay
    });
};

jQuery.fn.windowHeight = function() {
    var w = jQuery(window);
    var e = jQuery(this);
    var isFireFox = !(window.mozInnerScreenX == null);
    var cssProperty = (isFireFox) ? 'height' : 'min-height';

    if (e.height() < w.height()) {
        e.css(cssProperty, w.height());
        $(window).resize(function () {
            e.css(cssProperty, w.height())
        });
    }
};