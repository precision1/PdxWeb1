// $(".js-modal-btn").modalVideo();

/*////// Services Video////*/
// $(function() {
//     $('.no-button, .popup-vimeo').magnificPopup({
//         disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,
//         fixedContentPos: false,
        

//     });
// });




////Popup modal for both modal youtube videos/////////////
$('.my-btnn').on('click', function(){
  $('#'+$(this).data('modal')).css('display','block');
})

$('.close').on('click', function(){
  $('.modal').hide();
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.className == 'modal') {
    $('.modal').hide();
  }
}