/**
 * @license 
 * jQuery Tools @VERSION Support - Browser Feature Detection. Extend it.
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 *
 *
 * Since: January 2013
 * Date: @DATE 
 */

/*global document, jQuery*/
(function ($) {
    "use strict";
    // static constructs
    $.tools = $.tools || {version: '@VERSION'};

    $.tools.support = {
        positionFixed : function () {
            var elementTop,
                originalHeight,
                body = document.body,
                el = document.createElement('div'),
                PIXELS_TO_MOVE = 100;

            if (typeof body.getBoundingClientRect === 'undefined') {
                return false;
            }

            el.innerHTML = ' ';

            /* CSS classes to ensure the element is visible and it doesn't have css transforms.
               Transforms can conflict with position fixed in some instances.
               Visibilty and block are to ensure override of critical styles already in the page. */
            el.style.cssText = 'position:fixed;top:' + PIXELS_TO_MOVE + 'px;visibility:visible;display:block;-webkit-transform:none;-moz-transform:none;transform:none;';

            body.appendChild(el);

            originalHeight = body.style.height;

            body.style.height = '1000px';
            body.scrollTop = 500;

            elementTop = el.getBoundingClientRect().top;
            body.style.height = originalHeight;

            body.removeChild(el);
            body.scrollTop = 0;

            return (elementTop === PIXELS_TO_MOVE);
        }
    };
}(jQuery));
