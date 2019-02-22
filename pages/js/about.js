///Counter///////////
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


    $('#number1').jQuerySimpleCounter({end: 345, duration: 5000});
    $('#number2').jQuerySimpleCounter({end: 27456,duration: 5000});
    $('#number3').jQuerySimpleCounter({end: 280,duration: 5000});
    $('#number4').jQuerySimpleCounter({end: 563430,duration: 5000});

    ///$('#number4').jQuerySimpleCounter({end: 563430,duration: 43200000});



  }});

//////Plan B Counter/////
// function isLocalStorage() {
//     try {
//         return 'localStorage' in window && window['localStorage'] !== null;
//     } catch(e) {
//         return false;
//     }
// }

// function setCounter(key, val) {
//     localStorage.setItem(key, val);
// }

// function getCounter(key) {
//     return localStorage.getItem(key);
// }

// ///Major/Minor DDI
// (function() {

//     var key = ".count1";
//     var counter = isLocalStorage() && getCounter(key) || 2250;
//     var $placeholder = $(".count1");
//     $placeholder.html(counter);

//     setInterval(function () {
//         counter++;
//         $placeholder.html(counter);
//         isLocalStorage() && setCounter(key, counter);

//     }, 4000);
// }());
// ///Cups of Coffee
// (function() {

//     var key = ".count2";
//     var counter = isLocalStorage() && getCounter(key) || 123;
//     var $placeholder = $(".count2");
//     $placeholder.html(counter);
//     setInterval(function () {
//         counter++;
//         $placeholder.html(counter);
//         isLocalStorage() && setCounter(key, counter);
//     }, 3000);
// }());





// ///Data Points per Day
// (function() {

//     var key = ".count3";
//     var counter = isLocalStorage() && getCounter(key) || 416666;
//     var $placeholder = $(".count3");
//     $placeholder.html(counter);

//     setInterval(function () {
//         counter++;
//         $placeholder.html(counter);
//         isLocalStorage() && setCounter(key, counter);
//     }, 3000);
// }());



///Timeline///////////

var timelineSwiper = new Swiper ('.timeline .swiper-container', {
direction: 'vertical',
loop: false,
speed: 1600,
pagination: '.swiper-pagination',
paginationBulletRender: function (swiper, index, className) {
  var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  return '<span class="' + className + '">' + year + '</span>';
},
paginationClickable: true,
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
breakpoints: {
  768: {
    direction: 'horizontal',
  }
}
});
