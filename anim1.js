window.onload = (function ($) {
    'use strict';
    $.fn.animation = function (elements, time) {
        function slider() {
            jQuery(document).ready(function() {
                jQuery("#photo").rotate(45);
            });
        }
        setInterval(slider, time);
    };
}(jQuery));
        
