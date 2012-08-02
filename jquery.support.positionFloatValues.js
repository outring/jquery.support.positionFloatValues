(function ($) {
    var value = 2.5;
    var $helper = $('<div />', { css: { top: value, position: 'absolute' } }).appendTo('body');
    $.support.positionFloatValues = parseFloat($helper.css('top')) === parseFloat(value);
    $helper.remove();
})(jQuery);