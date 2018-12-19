
//////////////Modal//////////////

// Get the modal

let storemodal = document.getElementById('storeModal');

// Get the button that opens the modal

let storebtn = document.getElementById("storeBtn");

// Get the <span> element that closes the modal

let storespan = document.getElementsByClassName("storeclose")[0];

// When the user clicks the button, open the modal

storebtn.onclick = function() {

storemodal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal

storespan.onclick = function() {

storemodal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {

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

homebtn.onclick = function() {

homemodal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal

homespan.onclick = function() {

homemodal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {

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
