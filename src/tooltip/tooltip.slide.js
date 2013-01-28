/**
 * @license 
 * jQuery Tools @VERSION / Tooltip Slide Effect
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/slide.html
 *
 * Since: September 2009
 * Date: @DATE 
 */
/*global jQuery*/
(function ($) {
    "use strict";
    // version number
    var t = $.tools.tooltip,

        // directions for slide effect
        dirs = {
            up: ['-', 'top'],
            down: ['+', 'top'],
            left: ['-', 'left'],
            right: ['+', 'left']
        };

    // extend global configuragion with effect specific defaults
    $.extend(t.conf, {
        direction: 'up', // down, left, right 
        bounce: false,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: true
    });

    /* default effect: "slide"  */
    t.addEffect("slide",
        // show effect
        function (done) {
            // variables
            var conf = this.getConf(),
                tip = this.getTip(),
                params = (conf.slideFade && $.support.opacity) ? {opacity: conf.opacity} : {},
                dir = dirs[conf.direction] || dirs.up;

            // direction			
            params[dir[1]] = dir[0] + '=' + conf.slideOffset;

            // perform animation
            if (conf.slideFade) {
                tip.css({opacity: 0});
            }
            tip.show().animate(params, conf.slideInSpeed, done);
        },

        // hide effect
        function (done) {
            // variables
            var conf = this.getConf(),
                offset = conf.slideOffset,
                params = (conf.slideFade && $.support.opacity) ? {opacity: 0} : {},
                dir = dirs[conf.direction] || dirs.up,

                // direction
                sign = String() + dir[0];

            if (conf.bounce) {
                sign = (sign === '+' ? '-' : '+');
            }

            params[dir[1]] = sign + '=' + offset;

            // perform animation
            this.getTip().animate(params, conf.slideOutSpeed, function () {
                $(this).hide();
                done.call();
            });
        }
        );
}(jQuery));
