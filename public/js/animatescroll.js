/*
 * @build  : 20-07-2013
 * @author : Ram swaroop
 * @site   : Compzets.com
 */
(function($){

  // defines various easing effects
  $.easing['jswing'] = $.easing['swing'];
  $.extend( $.easing,
    {
      def: 'easeOutQuad',
      easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
      },
    });

  $.fn.animatescroll = function(options) {

    // fetches options
    var opts = $.extend({},$.fn.animatescroll.defaults,options);

    // make sure the callback is a function
    if (typeof opts.onScrollStart == 'function') {
      // brings the scope to the callback
      opts.onScrollStart.call(this);
    }

    if(opts.element == "html,body") {
      // Get the distance of particular id or class from top
      var offset = this.offset().top;

      // Scroll the page to the desired position
      $(opts.element).stop().animate({ scrollTop: offset - opts.padding}, opts.scrollSpeed, opts.easing);
    }
    else {
      // Scroll the element to the desired position
      $(opts.element).stop().animate({ scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding}, opts.scrollSpeed, opts.easing);
    }

    setTimeout(function() {

      // make sure the callback is a function
      if (typeof opts.onScrollEnd == 'function') {
        // brings the scope to the callback
        opts.onScrollEnd.call(this);
      }
    }, opts.scrollSpeed);
  };

  // default options
  $.fn.animatescroll.defaults = {
    easing:"swing",
    scrollSpeed:800,
    padding:0,
    element:"html,body"
  };

}(jQuery));
