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

/////////////////////////////////////////Contact Form//////////////////////
$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});

///////////////////////////////End Contact Form