jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 900) {
        $('nav-item.phone').removeClass('phone');
        $('nav-item.phone a').addClass('nav-link');
      } else if (ww >= 901) {
        $('nav-item.phone').addClass('phone');
        $('nav-item.phone a').removeClass('nav-link');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });