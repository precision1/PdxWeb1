const cron = require("node-cron");
const express = require("express");
var $ = require('jquery');
const Window = require('window');
const window = new Window();
var scroll = require('scroll');


app = express();

//execute every 2:30am morning
// cron.schedule('30 2 * * *', function(){
//  console.log('running a task every two minutes');
// });


//execute every 1 min
cron.schedule('*/1 * * * *', function () {
    console.log('running a task every minute');
});


//execute everyday at 6am
cron.schedule('0  6 * * *', function () {

    console.log('running a task at 6am');

    var a = 0;
  $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $.fn.jQuerySimpleCounter = function (options) {
                var settings = $.extend({
                    start: 0,
                    end: 100,
                    easing: 'swing',
                    duration: 43200000,
                    complete: ''
                }, options);

                var thisElement = $(this);

                $({ count: settings.start }).animate({ count: settings.end }, {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function () {
                        var mathCount = Math.ceil(this.count);
                        thisElement.text(mathCount);
                    },
                    complete: settings.complete
                });

                a = 1;
            };


            $('#number1').jQuerySimpleCounter({ end: 345, duration: 100 });
            $('#number2').jQuerySimpleCounter({ end: 27456, duration: 43200000 });
            $('#number3').jQuerySimpleCounter({ end: 2810, duration: 43200000 });
            $('#number4').jQuerySimpleCounter({ end: 563430, duration: 43200000 });

            console.log('running a task everyday at 6am');
        }});





    app.listen(3128)});

