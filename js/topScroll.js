/////////////////////////////////////////Start Button Scroll/////////////////////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/////////////////////////////////////////////////End Scroll Button/////////////////////////////////

//Header
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let storebtn = document.getElementById("storeBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
storebtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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


