//////////////Modal//////////////
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
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


//////////////////////////////// END Modal//////////////////////////////////

////////////////////Shrinking Navbar////////////
// jQuery(document).ready(function ($) {

//     // call resizeHeader() onload if not home page
//     if (window.location.pathname !== '/') {
//         window.onload = resizeHeader()
//     }

//     //resize header func
//     function resizeHeader() {
//         window.addEventListener('scroll', function () {

//             var distanceY = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

//             nav = document.querySelector(".navcustom")

//             if (distanceY) {

//                 console.log('scrolled')

//                 nav.classList.add("smallerNav")
//             } else {
//                 if (nav.classList.contains("smallerNav")) {

//                     console.log('back to top')

//                     nav.classList.remove("smallerNav")
//                 }
//             }
//         })
//     }

// })

//////////////////End Shrinking Navbar/////////////


////////////////////////////Precision Analytics Charts and Graphs/////////////////////
var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1
});

   ////////////////////////End Precision Analytics Charts and Graphs//////////////////

///////Precision Core Values #2////
all();
function all() {

 // type anything here
var text = 'hover me';

// this function turns a string into an array
var createLetterArray = function createLetterArray(string) {
  return string.split('');
};

// this function creates letter layers wrapped in span tags
var createLetterLayers = function createLetterLayers(array) {
  return array.map(function (letter) {
    var layer = '';
    //specify # of layers per letter
    for (var i = 1; i <= 2; i++) {
      // if letter is a space
      if (letter == ' ') {
        layer += '<span class="space"></span>';
      } else {
        layer += '<span class="letter-' + i + '">' + letter + '</span>';
      }
    }
    return layer;
  });
};

// this function wraps each letter in a parent container
var createLetterContainers = function createLetterContainers(array) {
  return array.map(function (item) {
    var container = '';
    container += '<div class="wrapper">' + item + '</div>';
    return container;
  });
};

// use a promise to output text layers into DOM first
var outputLayers = new Promise(function (resolve, reject) {
  document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
  resolve();
});

// then adjust width and height of each letter
var spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(function () {
  return spans.map(function (span) {
    setTimeout(function () {
      span.parentElement.style.width = span.offsetWidth + 'px';
      span.parentElement.style.height = span.offsetHeight + 'px';
    }, 250);
  });
}).then(function () {
  // then slide letters into view one at a time
  var time = 250;
  return spans.map(function (span) {
    time += 75;
    setTimeout(function () {
      span.parentElement.style.top = '0px';
    }, time);
  });
});

}




