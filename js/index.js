
//////////////Modal//////////////

// Get the modal

let storemodal = document.getElementById('storeModal');

// Get the button that opens the modal

let storebtn = document.getElementById("storeBtn");

// Get the <span> element that closes the modal

let storespan = document.getElementsByClassName("storeclose")[0];

// When the user clicks the button, open the modal

storebtn.onclick = function () {

    storemodal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal

storespan.onclick = function () {

    storemodal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {

    if (event.target == storemodal) {

        storemodal.style.display = "none";

    }

}

// Get the modal

let homemodal = document.getElementById('homeModal');

// Get the button that opens the modal

let homebtn = document.getElementById("homeBtn");

// Get the <span> element that closes the modal

let homespan = document.getElementsByClassName("homeclose")[0];

// When the user clicks the button, open the modal

homebtn.onclick = function () {

    homemodal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal

homespan.onclick = function () {

    homemodal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {

    if (event.target == homemodal) {

        homemodal.style.display = "none";

    }

}

    //////////////////////////////// END Modal//////////////////////////////////





    // ////////////// Animated textRotate ///////////////
    // const title = document.querySelector(".title");
    // let index = 0;

    // const rotatingAdjectives = [
    //   { word: "clinically actionable data", link: "" },
    //   { word: "insightful analytics", link: "" },

    // ];

    // const newMarkup = word => {
    //   const newMarkup = document.createElement("a");

    //   newMarkup.setAttribute("href", word.link);
    //   newMarkup.classList.add("emphasized");
    //   newMarkup.innerHTML = word.word;

    //   return newMarkup;
    // };

    // const hideShowWord = () => {
    //   title.classList.toggle('fade-in');
    // }

    // const iterateWords = () => {
    //   const emphasizedWord = document.querySelector(".emphasized");

    //   index = index === rotatingAdjectives.length - 1 ? 0 : ++index;

    //   title.replaceChild(newMarkup(rotatingAdjectives[index]), emphasizedWord);
    //   title.classList.add('fade-in');

    //   setTimeout(hideShowWord, 3500);
    //   setTimeout(iterateWords, 4000);
    // };

<<<<<<< HEAD
    // iterateWords();


    ////////////////////////////Precision Analytics Carousel//////////////////////

    /*
     * We trigger the factory() function is different
     * ways to support modular JavaScript libraries. See
     * the 'Wrapping Up' section of the tutorial for
     * more information
     *
     */
    ; (function (factory) {

        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (typeof exports !== 'undefined') {
            module.exports = factory(require('jquery'));
        } else {
            factory(jQuery);
        }

    })(function ($) {

        /*
           * We define Zippy as a variable of type ‘function’. 
         * Here, we use an anonymous function to ensure 
         * that the logic inside the function is executed immediately. 
           *
           */
        var Zippy = (function (element, settings) {

            var instanceUid = 0;

            /*
             * The constructor function for Zippy
             *
             */
            function _Zippy(element, settings) {
                this.defaults = {
                    slideDuration: '3000',
                    speed: 500,
                    arrowRight: '.arrow-right',
                    arrowLeft: '.arrow-left'
                };

                // We create a new property to hold our default settings after they
                // have been merged with user supplied settings
                this.settings = $.extend({}, this, this.defaults, settings);

                // This object holds values that will change as the plugin operates
                this.initials = {
                    currSlide: 0,
                    $currSlide: null,
                    totalSlides: false,
                    csstransitions: false
                };

                // Attaches the properties of this.initials as direct properties of Zippy
                $.extend(this, this.initials);

                // Here we'll hold a reference to the DOM element passed in
                // by the $.each function when this plugin was instantiated
                this.$el = $(element);

                // Ensure that the value of 'this' always references Zippy
                this.changeSlide = $.proxy(this.changeSlide, this);

                // We'll call our initiator function to get things rolling!
                this.init();

                // A little bit of metadata about the instantiated object
                // This property will be incremented everytime a new Zippy carousel is created
                // It provides each carousel with a unique ID
                this.instanceUid = instanceUid++;
            }

            return _Zippy;

        })();

        /**
           * Called once per instance
           * Calls starter methods and associate the '.zippy-carousel' class
           * @params void
           * @returns void
           *
           */
        Zippy.prototype.init = function () {
            //Test to see if cssanimations are available
            this.csstransitionsTest();
            // Add a class so we can style our carousel
            this.$el.addClass('zippy-carousel');
            // Build out any DOM elements needed for the plugin to run
            // Eg, we'll create an indicator dot for every slide in the carousel
            this.build();
            // Eg. Let the user click next/prev arrows or indicator dots
            this.events();
            // Bind any events we'll need for the carousel to function
            this.activate();
            // Start the timer loop to control progression to the next slide
            this.initTimer();
        };

        /**
         * Appropriated out of Modernizr v2.8.3
         * Creates a new DOM element and tests existence of properties on it's
         * Style object to see if CSSTransitions are available
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.csstransitionsTest = function () {
            var elem = document.createElement('modernizr');
            //A list of properties to test for
            var props = ["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
            //Iterate through our new element's Style property to see if these properties exist
            for (var i in props) {
                var prop = props[i];
                var result = elem.style[prop] !== undefined ? prop : false;
                if (result) {
                    this.csstransitions = result;
                    break;
                }
            }
        };

        /**
         * Add the CSSTransition duration to the DOM Object's Style property
         * We trigger this function just before we want the slides to animate
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.addCSSDuration = function () {
            var _ = this;
            this.$el.find('.slide').each(function () {
                this.style[_.csstransitions + 'Duration'] = _.settings.speed + 'ms';
            });
        }

        /**
       * Remove the CSSTransition duration from the DOM Object's style property
       * We trigger this function just after the slides have animated
       * @params void
       * @returns void
       *
       */
        Zippy.prototype.removeCSSDuration = function () {
            var _ = this;
            this.$el.find('.slide').each(function () {
                this.style[_.csstransitions + 'Duration'] = '';
            });
        }

        /**
         * Creates a list of indicators based on the amount of slides
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.build = function () {
            var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
            this.totalSlides = this.$el.find('.slide').length;
            for (var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index=' + i + '>');
        };

        /**
         * Activates the first slide
         * Activates the first indicator
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.activate = function () {
            this.$currSlide = this.$el.find('.slide').eq(0);
            this.$el.find('.indicators li').eq(0).addClass('active');
        };

        /**
       * Associate event handlers to events
       * For arrow events, we send the placement of the next slide to the handler
       * @params void
       * @returns void
       *
       */
        Zippy.prototype.events = function () {
            $('body')
                .on('click', this.settings.arrowRight, { direction: 'right' }, this.changeSlide)
                .on('click', this.settings.arrowLeft, { direction: 'left' }, this.changeSlide)
                .on('click', '.indicators li', this.changeSlide);
        };

        /**
         * TIMER
         * Resets the timer
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.clearTimer = function () {
            if (this.timer) clearInterval(this.timer);
        };

        /**
         * TIMER
         * Initialise the timer
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.initTimer = function () {
            this.timer = setInterval(this.changeSlide, this.settings.slideDuration);
        };

        /**
         * TIMER
         * Start the timer
         * Reset the throttle to allow changeSlide to be executable
         * @params void
         * @returns void
         *
         */
        Zippy.prototype.startTimer = function () {
            this.initTimer();
            this.throttle = false;
        };

        /**
         * MAIN LOGIC HANDLER
         * Triggers a set of subfunctions to carry out the animation
         * @params	object	event
         * @returns void
         *
         */
        Zippy.prototype.changeSlide = function (e) {
            //Ensure that animations are triggered one at a time
            if (this.throttle) return;
            this.throttle = true;

            //Stop the timer as the animation is getting carried out
            this.clearTimer();

            // Returns the animation direction (left or right)
            var direction = this._direction(e);

            // Selects the next slide
            var animate = this._next(e, direction);
            if (!animate) return;

            //Active the next slide to scroll into view
            var $nextSlide = this.$el.find('.slide').eq(this.currSlide).addClass(direction + ' active');

            if (!this.csstransitions) {
                this._jsAnimation($nextSlide, direction);
            } else {
                this._cssAnimation($nextSlide, direction);
            }
        };

        /**
         * Returns the animation direction, right or left
         * @params	object	event
         * @returns strong	animation direction
         *
         */
        Zippy.prototype._direction = function (e) {
            var direction;

            // Default to forward movement
            if (typeof e !== 'undefined') {
                direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
            } else {
                direction = 'right';
            }
            return direction;
        };

        /**
         * Updates our plugin with the next slide number
         * @params	object	event
         * @params	string	animation direction
         * @returns boolean continue to animate?
         *
         */
        Zippy.prototype._next = function (e, direction) {

            // If the event was triggered by a slide indicator, we store the data-index value of that indicator
            var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);

            //Logic for determining the next slide
            switch (true) {
                //If the event was triggered by an indicator, we set the next slide based on index
                case (typeof index !== 'undefined'):
                    if (this.currSlide == index) {
                        this.startTimer();
                        return false;
                    }
                    this.currSlide = index;
                    break;
                case (direction == 'right' && this.currSlide < (this.totalSlides - 1)):
                    this.currSlide++;
                    break;
                case (direction == 'right'):
                    this.currSlide = 0;
                    break;
                case (direction == 'left' && this.currSlide === 0):
                    this.currSlide = (this.totalSlides - 1);
                    break;
                case (direction == 'left'):
                    this.currSlide--;
                    break;
            }
            return true;
        };

        /**
         * Executes the animation via CSS transitions
         * @params	object	Jquery object the next slide to slide into view
         * @params	string	animation direction
         * @returns void
         *
         */
        Zippy.prototype._cssAnimation = function ($nextSlide, direction) {
            //Init CSS transitions
            setTimeout(function () {
                this.$el.addClass('transition');
                this.addCSSDuration();
                this.$currSlide.addClass('shift-' + direction);
            }.bind(this), 100);

            //CSS Animation Callback
            //After the animation has played out, remove CSS transitions
            //Remove unnecessary classes
            //Start timer
            setTimeout(function () {
                this.$el.removeClass('transition');
                this.removeCSSDuration();
                this.$currSlide.removeClass('active shift-left shift-right');
                this.$currSlide = $nextSlide.removeClass(direction);
                this._updateIndicators();
                this.startTimer();
            }.bind(this), 100 + this.settings.speed);
        };

        /**
         * Executes the animation via JS transitions
         * @params	object	Jquery object the next slide to slide into view
         * @params	string	animation direction
         * @returns void
         *
         */
        Zippy.prototype._jsAnimation = function ($nextSlide, direction) {
            //Cache this reference for use inside animate functions
            var _ = this;

            // See CSS for explanation of .js-reset-left
            if (direction == 'right') _.$currSlide.addClass('js-reset-left');

            var animation = {};
            animation[direction] = '0%';

            var animationPrev = {};
            animationPrev[direction] = '100%';

            //Animation: Current slide
            this.$currSlide.animate(animationPrev, this.settings.speed);

            //Animation: Next slide
            $nextSlide.animate(animation, this.settings.speed, 'swing', function () {
                //Get rid of any JS animation residue
                _.$currSlide.removeClass('active js-reset-left').attr('style', '');
                //Cache the next slide after classes and inline styles have been removed
                _.$currSlide = $nextSlide.removeClass(direction).attr('style', '');
                _._updateIndicators();
                _.startTimer();
            });
        };

        /**
           * Ensures the slide indicators are pointing to the currently active slide
           * @params	void
           * @returns	void
           *
           */
        Zippy.prototype._updateIndicators = function () {
            this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
        };

        /**
         * Initialize the plugin once for each DOM object passed to jQuery
         * @params	object	options object
         * @returns void
         *
         */
        $.fn.Zippy = function (options) {

            return this.each(function (index, el) {

                el.Zippy = new Zippy(el, options);

            });

        };


    });

// Custom options for the carousel
var args = {
    arrowRight: '.arrow-right', //A jQuery reference to the right arrow
    arrowLeft: '.arrow-left', //A jQuery reference to the left arrow
    speed: 1000, //The speed of the animation (milliseconds)
    slideDuration: 4000 //The amount of time between animations (milliseconds)
};

$('.carousel').Zippy(args);
=======
// iterateWords();


//////////////////////////////////// Svg Animation  ///////////////////////

// Svg Counter

jQuery(document).ready(function($){
   //do initial
   $(".dm-counter").each(function(){
    var initial = parseInt($(this).attr("data-initial"));
    $(this).html(initial);
    $(this).attr("current",initial);
   });
   setTimeout(InitUpdate, 100);


   function InitUpdate()
    {
        $(".dm-counter").each(function(){
            var initial = parseInt($(this).attr("data-initial"));
            var current = parseInt($(this).attr("current"));
            var rate = parseFloat($(this).attr("data-rate"));
            result = CalcValue(initial, rate);
            var increment = (result/1000);

            if(current < result)
            {
                var nf = new Intl.NumberFormat();
                var newval = Math.floor(current + increment);
                $(this).attr("current",newval);

                $(this).html(nf.format(newval));
                setTimeout(InitUpdate, 100);
            } else {
                setTimeout(UpdateTime, 1000);
            }
        });
    }
    function UpdateTime()
    {
        jQuery(".dm-counter").each(function(){
            var initial = parseInt(jQuery(this).attr("data-initial"));
            var rate = parseFloat(jQuery(this).attr("data-rate"));
            result = CalcValue(initial, rate);
            var nf = new Intl.NumberFormat();
            jQuery(this).html(nf.format(result));
            setTimeout(UpdateTime, 1000);
        });

    }

    function CalcValue(initial, rate)
    {
        var dt =  new Date();
        var secs = dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
        var result = Math.floor(initial + (secs * rate));
        return result;
        //var nf = new Intl.NumberFormat();
        //return nf.format(result);
    }
});


  //Animation Custom

  jQuery(document).ready(function($){

        observer();
        setTimeout(init, 500);


    var activeScene = "";
    function init() {
        if($(".HYPE_scene").length > 0)
        {
            disableScroll2();
            enableMouse();
            //console.log("init");
            $(".HYPE_scene").each(function(){
                var index = $(this).attr("hype_scene_index");
                $(this).addClass("scene" + index);
                $(this).find(".HYPE_element").each(function(index){
                    $(this).addClass("element" + index);
                });
            });

            //28,29,30,31

            //hide home nav
            //$(".home .site-header-row, #header").hide();
            $('.HYPE_scene').on('visibility', function(e) {
                //$('.HYPE_scene').removeClass("isvisible");
                //$(this).addClass("isvisible");
                activeScene = $(this).attr("hype_scene_index");
                item = $(e.currentTarget);
                var index = item.attr("hype_scene_index");
                //console.log(index);
                $(".btnContainer a").attr("data-index", index);
                //console.log(item);
                //console.log(index);
                //if((index == "28" && e.visible) || (index == "29" && e.visible) || (index == "30" && e.visible) || (index == "31" && e.visible) )
                if((index == "56" && e.visible) || (index == "57" && e.visible) || (index == "58" && e.visible) || (index == "59" && e.visible) )
                {
                    item.addClass("enditem");
                    item.find(".HYPE_element").each(function(index){
                        $(this).addClass("element" + index);
                    });
                    $("body").css("overflow","scroll");
                    //$(".home .site-header-row, #header").fadeIn("slow");
                }
                var currentscene = HYPE.documents["Precision Animation 18"].currentSceneName();;
                console.log(currentscene);
                if(currentscene == "End of Animation") {
                    $(".btnContainer").hide();
                }
            });

            //$(".scene28 .element6,.scene29 .element6,.scene30 .element6,.scene31 .element6").on("click",function(){
            //$(".scene56 .element6,.scene57 .element6,.scene58 .element6,.scene59 .element6").on("click",function(){
            $(".scene89 .element6,.scene57 .element6,.scene58 .element6,.scene59 .element6").on("click",function(){
                //enableScroll();
                var height = $(window).height();
                //console.log(height);
                $("body").css("overflow","scroll ");
                console.log("clicked next");
                $('html, body').animate({ scrollTop: height }, 300);

            });


            $(".element0").click(function(){
                this.click();
            });

            //floating clicks
            $(".btnNext").on("click",function(){
                //var index = $(this).attr("data-index");
                //$(".scene" + index).find(".element1").hide();
                //$(".scene" + index).find(".element1").click();
                pressDown();
            });
            $(".btnSkip").on("click",function(){
                HYPE.documents["Precision Animation 18"].showSceneNamed("End of Animation");
            });
        }
    }

    resize();
    $( window ).resize(function() {
        resize();
    });

   function resize()
   {
        var height = $(window).height();
        var width = $(window).width();

        if(width > 770) {
            $(".dm_animation_container, .animationContainer").css("height",height);
        } else {
            if(width > 640) {
                //$(".dm_animation_container, .animationContainer").css("height",600);
                $(".dm_animation_container, .animationContainer").css("height",height);
            } else {
                //$(".dm_animation_container, .animationContainer").css("height",400);
                $(".dm_animation_container, .animationContainer").css("height",height);
            }

        }
        /*
        var nheight = width*3/4;
        if(nheight > 768) { nheight = 768; }
        $(".dm_animation_container, .animationContainer").css("height", nheight);
        */
   }

   function disableScroll2(){
        //$("section, .znpb-footer-smart-area").hide();
        $('html, body').animate({ scrollTop: 0 }, 100);

        var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
        if(!isIE11) {
            $("body").css("overflow","hidden");
        }
    }

    var boolscrollable = true;

    function enableMouse() {
        function displaywheel(e){
            var evt=window.event || e //equalize event object
            var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
            if(delta < 0)
            {
                console.log(delta);
                console.log(boolscrollable);
                if(boolscrollable) {
                    pressDown();
                    boolscrollable = false;
                    setTimeout(function(){ boolscrollable = true }, 500);
                } else {

                }

            }
        }

        var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

        if (document.attachEvent) //if IE (and Opera depending on user setting)
            document.attachEvent("on"+mousewheelevt, displaywheel)
        else if (document.addEventListener) //WC3 browsers
            document.addEventListener(mousewheelevt, displaywheel, false)
    }

    function pressDown() {
        //jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(40) });
        var keyboardEvent = document.createEvent("KeyboardEvent");
        var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


        keyboardEvent[initMethod](
                        "keydown", // event type : keydown, keyup, keypress
                            true, // bubbles
                            true, // cancelable
                            window, // viewArg: should be window
                            false, // ctrlKeyArg
                            false, // altKeyArg
                            false, // shiftKeyArg
                            false, // metaKeyArg
                            40, // keyCodeArg : unsigned long the virtual key code, else 0
                            0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
        );
        document.dispatchEvent(keyboardEvent);
        console.log("trigger");
    }

/*
   function next() {
        //find button
        console.log(activeScene);
        console.log(jQuery(".scene7 div.element0[role='button']:eq(0)"));
        //$(".scene" + activeScene).closest("div:contains('NEXT')")[0].click();
        //$(".scene" + activeScene + " div[role='button']")
        //$("div:contains('NEXT')")[0].click();
        jQuery(".scene7 div.element0[role='button']:eq(0)").click().trigger('mouseenter');

   }




   var keys = {37: 1, 38: 1, 39: 1, 40: 1, 33:1, 34:1, 35:1, 36:1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            next();
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
*/

   function observer() {
    if (window.IntersectionObserver) {
        $.event.special.visibility = {
          setup: function() {
            function event(visibility) {
              var e = $.Event("visibility");
              e.visible = visibility;
              return e;
            }
            var element = this;
            var $element = $(this);
            var observer = new IntersectionObserver(function(entries) {
              var e = event($element.is(':visible'));
              ($.event.dispatch || $.event.handle).call(element, e);
            }, {
              root: document.body
            });
            observer.observe(this);
            $.data(this, 'observer', observer);
          },
          teardown: function() {
            var observer = $.data(this, 'observer');
            if (observer) {
              observer.unobserve(this);
              $.removeData(this, 'observer');
            }
          }
        };
      }

   }
});
>>>>>>> e47e3f3875bfec211162c9d0ea8349bc1734f8a0
