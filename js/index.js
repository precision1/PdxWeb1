
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

////////////////////Shrinking Navbar////////////
jQuery(document).ready(function ($) {

    // call resizeHeader() onload if not home page
    if (window.location.pathname !== '/') {
        window.onload = resizeHeader()
    }

    //resize header func
    function resizeHeader() {
        window.addEventListener('scroll', function () {

            var distanceY = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

            nav = document.querySelector(".navcustom")

            if (distanceY) {

                console.log('scrolled')

                nav.classList.add("smallerNav")
            } else {
                if (nav.classList.contains("smallerNav")) {

                    console.log('back to top')

                    nav.classList.remove("smallerNav")
                }
            }
        })
    }

})

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
