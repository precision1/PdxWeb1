///////Counter/////////// 
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            // easing: 'swing',
            duration: 43200000,
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
    
    
    $('#number1').jQuerySimpleCounter({end: 345, duration: 4320});
    $('#number2').jQuerySimpleCounter({end: 27456,duration: 4320});
    $('#number3').jQuerySimpleCounter({end: 2810,duration: 4320});
    $('#number4').jQuerySimpleCounter({end: 563430,duration: 4320});
    
    ///$('#number4').jQuerySimpleCounter({end: 563430,duration: 43200000});
    
    

  }});