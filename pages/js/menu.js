

$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
     }
    else {
      $('nav').removeClass('scrolled');
    }
  });
});

// Main logo

$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('a.navbar-brand').addClass('collapses');
     }
    else {
      $('a.navbar-brand').removeClass('collapses');
    }
  });
});
