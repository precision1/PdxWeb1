//Header

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

////////////////////////////////Modal//////////////////////////////////

// Order of Modal function needs to stay on top of page

// /////////////////////////////Background/////////////////
// $(function(){

//     var header = $('.site-header'),
//         canvas = $('<canvas></canvas>').appendTo(header)[0],

//         ctx    = canvas.getContext('2d'),
//         color  = '#9ae7fa',
//         idle   = mousePosition;

//     canvas.width         = window.innerWidth;
//     canvas.height        = header.outerHeight();
//     canvas.style.display = 'block';

//     ctx.fillStyle = color;
//     ctx.lineWidth = 1.0;
//     ctx.strokeStyle = color;


//     var mousePosition = { x: 100 * canvas.width / 100, y: 100 * canvas.height / 100 },
//         dots = { nb: 150, distance: 75, d_radius: 150, array: [], mousePosition: 100 };

//     function Dot(){
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;

//         this.vx = -.8 + Math.random();
//         this.vy = -.4 + Math.random();

//         this.radius = Math.random();
//     }

//     Dot.prototype = {
//         create: function(){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius * 2.5, 0,Math.PI * 3, false);
//             ctx.fill();
//         },

//         animate: function(){

//             for(var i = 1, dot=false; i < dots.nb; i++){

//                 dot = dots.array[i];

//                 if(dot.y < 0 || dot.y > canvas.height){
//                     dot.vx = dot.vx;
//                     dot.vy = - dot.vy;
//                 }else if(dot.x < 0 || dot.x > canvas.width){
//                     dot.vx = - dot.vx;
//                     dot.vy = dot.vy;
//                 }
//                 dot.x += dot.vx;
//                 dot.y += dot.vy;
//             }
//         },

//         line: function(){
//             for(var i = 0; i < dots.nb; i++){
//                 for(var j = 0; j < dots.nb; j++){
//                     i_dot = dots.array[i];
//                     j_dot = dots.array[j];

//                     if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//                         if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
//                             ctx.beginPath();
//                             ctx.moveTo(i_dot.x, i_dot.y) ;
//                             ctx.lineTo(j_dot.x, j_dot.y) ;
//                             ctx.stroke();
//                             ctx.closePath();
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     function createDots(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for(var i = 0; i < dots.nb; i++){
//             dots.array.push(new Dot());
//             dot = dots.array[i];

//             dot.create();
//         }

//         dot.line();
//         dot.animate();
//     }

//     idle = setInterval(createDots, 1000/50);

//     $(canvas).on('mousemove mouseleave', function(e){
//         if(e.type == 'mousemove'){
//             mousePosition.x = e.pageX;
//             mousePosition.y = e.pageY;
//         }
//         if(e.type == 'mouseleave'){
//             mousePosition.x = canvas.width / last;
//             mousePosition.y = canvas.height / 2;
//         }
//     });
//  })

//////////////////Text Animation for Jumbotron///////////////////

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


