/*////////////Main Body///////////*/

// $(document).ready(function(){
//     $('.variable-width').slick({
//       infinite: true,
//       speed: 2000,
//       slidesToShow: 1,
//       centerMode: true,
//       variableWidth: true,
//       centerPadding: 100,
//       autoplay: true,
//       touchMove: true,
//       respondTo: window
//     });
//   var filtered = false;
//   $('.ribbons').on('click', function(){
//   if (filtered === false) {
//     $('.variable-width').slick('slickFilter',':even');
//     $('.ribbons').text("VIEW ALL")
//     filtered = true;
//   } else {
//     $('.variable-width').slick('slickUnfilter');
//     $('.ribbons').text("VIEW AUSTIN OFFICE")
//     filtered = false;
//   }
//   });
//   $('.grey-ribbon').on('click', function(){
//   if (filtered === false) {
//     $('.variable-width').slick('slickFilter',':odd');
//     $('.grey-ribbon').text("VIEW ALL")
//     filtered = true;
//   } else {
//     $('.variable-width').slick('slickUnfilter');
//     $('.grey-ribbon').text("VIEW LOS ANGELES OFFICE")
//     filtered = false;
//   }
//   });
//   });
//   whr(document).ready(function(){
//     whr_embed(126006, {detail: 'titles', base: 'jobs', zoom: 'state', grouping: 'none'});
//   });


  //////*Carousel*//////////

  $(function(){
    "use strict";
  
      var bindToClass      = 'carousel',
          containerWidth   = 0,
          scrollWidth      = 0,
          posFromLeft      = 0,    // Stripe position from the left of the screen
          stripePos        = 0,    // When relative mouse position inside the thumbs stripe
          animated         = null,
          $indicator, $carousel, el, $el, ratio, scrollPos, nextMore, prevMore, pos, padding;
  
      // calculate the thumbs container width
      function calc(e){
          $el = $(this).find('.image-wrapper');
          el  = $el[0];
          $carousel = $el.parent();
          $indicator = $el.prev('.indicator');
  
          nextMore = prevMore  = false; // reset
  
          containerWidth       = el.clientWidth;
          scrollWidth          = el.scrollWidth; // the "<ul>"" width
          padding              = 0.2 * containerWidth; // padding in percentage of the area which the mouse movement affects
          posFromLeft          = $el.offset().left;
          stripePos            = e.pageX - padding - posFromLeft;
          pos                  = stripePos / (containerWidth - padding*2);
          scrollPos            = (scrollWidth - containerWidth ) * pos;
          
          if( scrollPos < 0 )
            scrollPos = 0;
          if( scrollPos > (scrollWidth - containerWidth) )
            scrollPos = scrollWidth - containerWidth;
          
          $(".detail").html("padding: "+padding+"<br>posFromLeft: "+posFromLeft+"<br>stripePos: "+stripePos+"<br>pos: "+pos+"<br>scrollPos: "+scrollPos+"<br>pageX: "+e.pageX);
        
          $el.animate({scrollLeft:scrollPos}, 200, 'swing');
          
          if( $indicator.length )
              $indicator.css({
                  width: (containerWidth / scrollWidth) * 100 + '%',
                  left: (scrollPos / scrollWidth ) * 100 + '%'
              });
  
          clearTimeout(animated);
          animated = setTimeout(function(){
              animated = null;
          }, 200);
  
          return this;
      }
  
      // move the stripe left or right according to mouse position
      function move(e){
          // don't move anything until inital movement on 'mouseenter' has finished
          if( animated ) return;
  
          ratio     = scrollWidth / containerWidth;
          stripePos = e.pageX - padding - posFromLeft; // the mouse X position, "normalized" to the carousel position
  
          if( stripePos < 0)
              stripePos = 0;
  
          pos = stripePos / (containerWidth - padding*2); // calculated position between 0 to 1
          // calculate the percentage of the mouse position within the carousel
          scrollPos = (scrollWidth - containerWidth ) * pos;   
  
          el.scrollLeft = scrollPos;
          if( $indicator[0] && scrollPos < (scrollWidth - containerWidth) )
            $indicator[0].style.left = (scrollPos / scrollWidth ) * 100 + '%';
  
          // check if element has reached an edge
          prevMore = el.scrollLeft > 0;
          nextMore = el.scrollLeft < (scrollWidth - containerWidth);
  
          $carousel.toggleClass('left', prevMore);
          $carousel.toggleClass('right', nextMore);
      }
  
      $.fn.carousel = function(options){
          $(document)
              .on('mouseenter.carousel', '.' + bindToClass, calc)
              .on('mousemove.carousel', '.' + bindToClass, move);
      };
  
      // automatic binding to all elements which have the class that is assigned to "bindToClass"
      $.fn.carousel();
  });

////////////////////////Typing Text////////////////
(function($) {
	var aiMsg = ["Looking for perks?", "We've got you covered.", "Looking for company culture?", "We embody balance."];
var i = 0;
	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg);
		function aiMSGLoop(wordArray) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			if(i < aiMsg.length){
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[i]).then(function() {
				setTimeout(function(){ 
					newElement
					.removeText(wordArray[i])
					.then(function() {
						i++;
					aiMSGLoop(wordArray);
						
				});
					 }, 2500);
			});
		}else{
			i=0;
			aiMSGLoop(wordArray);
		}
			
		}
	});
	//AI Text typer
	$.fn.writeText = function(content) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = 90;
			setInterval(function() {
				rand = Math.round(Math.random() * (300 + 1050));
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				} else {
					resolve();
				}
			}, rand);
		});
	};
	//AI Text Typer backspace
	$.fn.removeText = function(content) {
		var elem = this;
		return new Promise(function(resolve, reject) {
			var contentArray = content.split("");
			var current = 0;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text().slice(0, -1));
					current++;
				} else {
					elem.remove();
					resolve();
				}
			}, 70);
		});
	};
})(jQuery);
