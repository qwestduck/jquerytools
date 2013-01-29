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

/*global document, jQuery, navigator*/
(function ($) {
    "use strict";
    // static constructs
    $.tools = $.tools || {version: '@VERSION'};

    var uaMatch = function (ua) {
            ua = ua.toLowerCase();

            var match = /(msie) ([\w.]+)/.exec(ua) || [];

            return {
                browser: match[1] || "",
                version: match[2] || "0"
            };
        },
        getDimensionPropertyIE = function (name) {
            return Math.max(
                document.documentElement["client" + name],
                document.documentElement["scroll" + name],
                document.body["scroll" + name]
            );
        },
        matched,
        browser = {};

    matched = uaMatch(navigator.userAgent);

    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }

    $.fn.trueWidth = function () {
        return ((browser.msie && this.get()[0].nodeType === 9) ? getDimensionPropertyIE('Width') : this.width());
    };

    $.fn.trueHeight = function () {
        return ((browser.msie && this.get()[0].nodeType === 9) ? getDimensionPropertyIE('Height') : this.height());
    };

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
