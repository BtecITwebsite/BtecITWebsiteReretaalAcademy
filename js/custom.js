
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/IMG-20250423-WA0005.jpg' },
              { src: 'images/slides/IMG-20250423-WA0001.jpg' },
              { src: 'images/slides/IMG-20250423-WA0023.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


