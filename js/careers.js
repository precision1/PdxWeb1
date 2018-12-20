/*////////////Main Body///////////*/

$(document).ready(function(){
    $('.variable-width').slick({
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      centerPadding: 100,
      autoplay: true,
      touchMove: true,
      respondTo: window
    });
  var filtered = false;
  $('.ribbons').on('click', function(){
  if (filtered === false) {
    $('.variable-width').slick('slickFilter',':even');
    $('.ribbons').text("VIEW ALL")
    filtered = true;
  } else {
    $('.variable-width').slick('slickUnfilter');
    $('.ribbons').text("VIEW AUSTIN OFFICE")
    filtered = false;
  }
  });
  $('.grey-ribbon').on('click', function(){
  if (filtered === false) {
    $('.variable-width').slick('slickFilter',':odd');
    $('.grey-ribbon').text("VIEW ALL")
    filtered = true;
  } else {
    $('.variable-width').slick('slickUnfilter');
    $('.grey-ribbon').text("VIEW LOS ANGELES OFFICE")
    filtered = false;
  }
  });
  });
  whr(document).ready(function(){
    whr_embed(126006, {detail: 'titles', base: 'jobs', zoom: 'state', grouping: 'none'});
  });


  //////*Carousel*//////////
  