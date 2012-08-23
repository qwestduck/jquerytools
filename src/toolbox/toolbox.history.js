/**
 * @license 
 * jQuery Tools @VERSION History "Back button for AJAX apps"
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/toolbox/history.html
 * 
 * Since: Mar 2010
 * Date: @DATE 
 */
/*global jQuery, location, setInterval, window*/
(function ($) {
    "use strict";
    var hash,
        iframe,
        links,
        inited;

    $.tools = $.tools || {version: '@VERSION'};

    function setIframeLocation(h) {
        if (h) {
            var doc = iframe.contentWindow.document;
            doc.open().close();
            doc.location.hash = h;
        }
    }

    $.tools.history = {
        init: function (els) {
            if (inited) {
                return;
            }

            // IE
            if ($.browser.msie && $.browser.version < '8') {
                // create iframe that is constantly checked for hash changes
                if (!iframe) {
                    iframe = $("<iframe/>").attr("src", "about:blank").hide().get(0);
                    $("body").append(iframe);

                    setInterval(function () {
                        var idoc = iframe.contentWindow.document,
                            h = idoc.location.hash;

                        if (hash !== h) {
                            $(window).trigger("hash", h);
                        }
                    }, 100);

                    setIframeLocation(location.hash || '#');
                }

                // other browsers scans for location.hash changes directly without iframe hack
            } else {
                setInterval(function () {
                    var h = location.hash;
                    if (h !== hash) {
                        $(window).trigger("hash", h);
                    }
                }, 100);
            }

            links = !links ? els : links.add(els);

            els.click(function (e) {
                var href = $(this).attr("href");
                if (iframe) {
                    setIframeLocation(href);
                }

                // handle non-anchor links
                if (href.slice(0, 1) !== "#") {
                    location.href = "#" + href;
                    return e.preventDefault();
                }
            });

            inited = true;
        }
    };

    // global histroy change listener
    $(window).on("hash", function (e, h) {
        if (h) {
            links.filter(function () {
                var href = $(this).attr("href");
                return href === h || href === h.replace("#", "");
            }).trigger("history", [h]);
        } else {
            links.eq(0).trigger("history", [h]);
        }

        hash = h;
    });

    // jQuery plugin implementation
    $.fn.history = function (fn) {
        $.tools.history.init(this);

        // return jQuery
        return this.on("history", fn);
    };
}(jQuery));
