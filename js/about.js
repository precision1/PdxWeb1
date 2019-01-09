///////Counter///////////
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );
    
        var thisElement = $(this);
    
        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });

        a=1;
    };
    
    
    $('#number1').jQuerySimpleCounter({end: 345, duration: 3000});
    $('#number2').jQuerySimpleCounter({end: 27456,duration: 300});
    $('#number3').jQuerySimpleCounter({end: 2810,duration: 800});
    $('#number4').jQuerySimpleCounter({end: 563430,duration: 300});
    
    
    
      /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
    
    
      };
    
    });


