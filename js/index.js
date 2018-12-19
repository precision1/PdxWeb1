
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

    // iterateWords();


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
