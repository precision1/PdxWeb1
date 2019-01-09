///////Counter///////////
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  50,
            end:    100,
            easing: 'swing',
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
    
    
    $('#number1').jQuerySimpleCounter({end: 345, duration: 100});
    $('#number2').jQuerySimpleCounter({end: 27456,duration: 1000000});
    $('#number3').jQuerySimpleCounter({end: 2810,duration: 1000000});
    $('#number4').jQuerySimpleCounter({end: 563430,duration: 43200000});
    
    
    
      /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
    
    
      };
    
    });

/*12 hour Counter*/

// (function($) {
//     $.fn.countTo = function(options) {
//         // merge the default plugin settings with the custom options
//         options = $.extend({}, $.fn.countTo.defaults, options || {});

//         // how many times to update the value, and how much to increment the value on each update
//         var loops = Math.ceil(options.speed / options.refreshInterval),
//             increment = (options.to - options.from) / loops;

//         return $(this).each(function() {
//             var _this = this,
//                 loopCount = 0,
//                 value = options.from,
//                 interval = setInterval(updateTimer, options.refreshInterval);

//             function updateTimer() {
//                 value += increment;
//                 loopCount++;
//                 $(_this).html(value.toFixed(options.decimals));

//                 if (typeof(options.onUpdate) == 'function') {
//                     options.onUpdate.call(_this, value);
//                 }

//                 if (loopCount >= loops) {
//                     clearInterval(interval);
//                     value = options.to;

//                     if (typeof(options.onComplete) == 'function') {
//                         options.onComplete.call(_this, value);
//                     }
//                 }
//             }
//         });
//     };

//     $.fn.countTo.defaults = {
//         from: 0,  // the number the element should start at
//         to: 100,  // the number the element should end at
//         speed: 1000,  // how long it should take to count between the target numbers
//         refreshInterval: 100,  // how often the element should be updated
//         decimals: 0,  // the number of decimal places to show
//         onUpdate: null,  // callback method for every time the element is updated,
//         onComplete: null,  // callback method for when the element finishes updating
//     };
// })(jQuery);

// jQuery(function($) {
//         $('#number2').countTo({
//             from: 50,
//             to: 2500,
//             speed: 1000000,
//             refreshInterval: 50,
//             onComplete: function(value) {
//                 console.debug(this);
//             }
//         });
//     });