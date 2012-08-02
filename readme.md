Support check for float values in CSS positioning properties
============================================================

Some browsers don't have support for float values in positioning properties (top, right, bottom, left), but getBoundingClientRect/jQuery.offset in these browsers could return float values.
If you want to use coords from getBoundingClientRects to set css positions, you have to round them according to browser's float values support.

Example:
    var placeholderOffset = $('#Placeholder').offset();
    $('#Popup').css({ top: placeholderOffset.top, left: placeholderOffset.left }); //Could be not pixel-perfect somewhere
    //Rounding
    if (!$.support.positionFloatValues) {
        placeholderOffset.top = Math.round(placeholderOffset.top);
        placeholderOffset.left = Math.round(placeholderOffset.left);
    }
    $('#Popup').css({ top: placeholderOffset.top, left: placeholderOffset.left }); //Pixel-perfect positioning now