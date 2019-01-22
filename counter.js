
// const cron = require("node-cron");
var express = require('express');
var http = require("http");
var fs = require("fs");

var cron = require('cron');
var cronJob = cron.job( '*/1 * * * *', function(){
    // perform operation e.g. GET request http.get() etc.
    console.log('running a task every minute');
    var a = 0;
    $(window).scroll(function () {
  
          var oTop = $('#counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
              $.fn.jQuerySimpleCounter = function (options) {
                  var settings = $.extend({
                      start: 0,
                      end: 100,
                      // easing: 'swing',
                      duration: 43200000,
                      complete: ''
                  }, options);
  
                  var thisElement = $(this);
  
                  $({ count: settings.start }).animate({ count: settings.end }, {
                      duration: settings.duration,
                      easing: settings.easing,
                      step: function () {
                          var mathCount = Math.ceil(this.count);
                          thisElement.text(mathCount);
                      },
                      complete: settings.complete
                  });
  
                  a = 1;
              };
  
  
              $('#number1').jQuerySimpleCounter({ end: 345, duration: 100 });
              $('#number2').jQuerySimpleCounter({ end: 27456, duration: 1000 });
              $('#number3').jQuerySimpleCounter({ end: 2810, duration: 1000 });
              $('#number4').jQuerySimpleCounter({ end: 563430, duration: 43200000 });
  
  
    }});
  
    console.log('Counter ran');
  
    console.info('cron job completed');
}); 
cronJob.start();
  


// cron.schedule('*/1 * * * *', function () {
//   console.log('running a task every minute');
//    // set later to use local time
//    later.date.localTime();
// });

//  cron.schedule('0  6 * * *', function () {

// console.log('running a task at 6am');
//  // set later to use local time
//  later.date.localTime();
//  });




//Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/pages/about.html", function (err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}



const testHTML = `
 <!DOCTYPE html>
 <html>
 <head>
 </head>
<body>
<!-- Header-->
<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light navcustom">
    <a class="navbar-brand" href="../pages/index.html">
      <img id="main-logo" src="../assets/images/Logo.svg" alt="Kiwi standing on oval">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="../pages/services.html">Services
          <span class="sr-only">(current)</span>
        </a>
        <a class="nav-item nav-link aboutus" href="../pages/about.html">About Us</a>
        <a class="nav-item nav-link" href="../pages/contact.html">Contact</a>
        <a class="nav-item nav-link" href="../pages/careers.html">Careers</a>
        <!--Store Drop Down Menu-->
        <!-- <div class="dropdown">
          <button class="dropbtn">Store</button>
          <div class="dropdown-content">
            <a href="../pages/storeClientST.html">Client/Specimen Technician</a>
            <a href="../pages/storeRep.html">Sales Representative</a>
          </div>
        </div> -->
      </div>
    </div>
    <!-- The Modal - Client Portal -->
    <!-- Trigger/Open The Modal -->
    <button id="myBtn1">Client Portal</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p class="index-modal-title">Please navigate to your testing panel by choosing one of the two options.
        </p>
        <div class="modal-buttons-index">
          <button class="index-modal-btn-store">
            <a class="client-portal-modal" href="https://pdx.careevolve.com/doctors/framepage.asp">CareEvolve</a>
          </button>
          <button class="index-modal-btn-store">
            <a class="client-portal-modal" href="https://analytics.precisiondxlab.com/">Precision Analytics
            </a>
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>
<!--/Navbar-->
<main>
  <!--Jumbotron-->
  <div class="aboutContainer">
  </div>
  <!--Jumbotron-->
  <div class="jumbotron jumbotron-contact" style="margin:0; padding:0; overflow:hidden;">
    <div class="sp-container">
      <image src="../assets/images/Building and Laboratory/indexImage.jpg" class="contact-image"></image>
      <!-- <div class="sp-content">
        <div class="sp-globe"></div>
        <h2 class="frame-1">About Us</h2>
      </div> -->
    </div>
  </div>
  <!--/Jumbotron-->
  <!--About-->
  <div class="jumbotron jumbotron-fluid-about" style="margin:0;">
    <div class="container">
      <h2 class="title-home">Our Purpose Is Simple</h2>
      <p class="lead-hello" style="font-weight:bold; color:#2e6da4;">_____</p>
      <p class="services-main-paragraph" style="color:gray;"> At Precision Diagnostics, we’re committed to
        understanding and meeting the needs of today’s healthcare community
        while helping to forge a better tomorrow. Our purpose is to be an integral part of a fully coordinated care
        system,
        one that is aimed at reducing costs and improving outcomes. Along with our partners – including payers,
        pharmacy
        benefit managers (PBMs), pharmacies, physicians, and technology solution providers – we are working to help
        transform
        the laboratory industry by leveraging next generation testing technology, data analytics, and a holistic
        approach
        to provide important diagnostic information to our partners.</p>
    </div>
  </div>
  <!--Video-->
  <div class="video-container-about" style="margin:0;">
    <div class="about-video">
      <video class="video-about" src="../assets/videos/about/infinitetesttubes.mp4" preload muted autoplay loop style="width:100%; height:60vh;margin:0;">
      </video>
    </div>
  </div>
  <div class="jumbotron jumbotron-fluid-about" style="margin:0; background-color: rgb(16, 31, 46); ">
    <div class="container">
      <h2 class="title-home" style="color:white; padding-top:25px;">Company by the Numbers: Today</h2>
      <p class="lead-hello" style="font-weight:bold; color:#2e6da4;  padding-bottom:25px;">_____</p>
    </div>
  </div>
  <!---Counter-->
  <div id="counter" style="margin-top:-30px;">
    <div id="projectFacts" class="sectionClass" style="margin:0;">
      <div class="fullWidth eight columns" style="margin:0;padding:0;">
        <div id="counter">
          <div class="projectFactsWrap" style="margin-bottom:0;padding:0;">
            <div class="item wow fadeInUpBig animated animated" data-number="12" style="visibility: visible;">
              <i class="fa fa-briefcase"></i>
              <p id="number1" class="number">345</p>
              <span></span>
              <p>Employees</p>
            </div>
            <div class="item wow fadeInUpBig animated animated" data-number="55" style="visibility: visible;">
              <i class="fa fa-flask" aria-hidden="true"></i>
              <p id="number2" class="number" class="count">27,456</p>
              <span></span>
              <p>Major/Minor DDI</p>
            </div>
            <div class="item wow fadeInUpBig animated animated" data-number="359" style="visibility: visible;">
              <i class="fa fa-coffee"></i>
              <p id="number3" class="number" class="count">2,810</p>
              <span></span>
              <p>Cups of coffee</p>
            </div>
            <div class="item wow fadeInUpBig animated animated" data-number="246" style="visibility: visible;">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>
              <p id="number4" class="number" class="count">559,705</p>
              <span></span>
              <p>Data Points per Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Scroll Button-->
  <button onclick="topFunction()" id="myBtn" title="Go to top">
    <i class="fa fa-angle-double-up" style="font-size:20px;color: #4587a4;">Top</i>
  </button>
  <!--/Scroll Button-->
</main>
<!--/About-->
<!--Footer-->
<div class="parallax2" style="margin-top: 80px;">
  <div class="footercard">
    <!-- <div class="footer-container"> -->
    <!--Top Footer-->
    <div class="lookWrap">
      <div id="look">
        <!--Section 1-->
        <div class="section">
          <!--Logo-->
          <img id="main-logo" src="../assets/images/Logo.svg"></img>
          <br>
          <!--Get in touch form-->
          <!--Get in touch form-->
          <!--Import jQuery before materialize.js-->
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <!-- Compiled and minified JavaScript -->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
          <script>
            $(document).ready(function () {
              var user, to, subject, text;
              $("#send_email").click(function () {
                // enter your email account that you want to recieve emails at.
                to = "hrprecisiondx@gmail.com";
                name = $("#name").val();
                user = $("#user_email").val();
                text = $("#textarea1").val();
                // $("#message").text("Sending E-mail...Please wait");
                $.get("http://localhost:8080/send", {
                  to: to,
                  name: name,
                  user: user,
                  text: text
                }, function (data) {
                  if (data == "sent") {
                    console.log("Email sent");
                  }
                });
              });
            });
          </script>
          <div class="container-form">
            <h3 style="margin-top:0px;">Get In Touch Today</h3>
            <!-- <h4>__________________</h4> -->
            <form method="post" name="myemailform" form action="http://localhost:8080" method="POST">
              Name:
              <input type="text" name="name" id="name">
              <br> Email:
              <input type="text" name="email" id="user_email">
              <br> Enter your message:
              <textarea name="message" id="textarea1"></textarea>
              <br>
              <input type="submit" value="Send Form" id="send_email">
            </form>
          </div>
        </div>
        <!--End Section 1-->
        <!--Section 2-->
        <div class="section">
          <!--Menu-->
          <div class="container-links" style="margin-left:100px; font-size:9pt;margin-top:80px; margin-bottom:30px;">
            <h5>Menu</h5>
            <div class="w-100"></div>
            <div class="col1">
              <a href="../pages/services.html" class="card-link">Services</a>
            </div>
            <!-- <div class="col1"><a href="../pages/storeClientST.html" class="card-link">Store</a></div> -->
            <div class="w-100"></div>
            <div class="col1">
              <a href="../pages/privacy.html" class="card-link">Privacy & Notice</a>
            </div>
            <div class="col1">
              <a href="https://precisiontox.safemedicaldata.com/" class="card-link">Archived Reports
              </a>
            </div>
            <div class="col1">
              <a href="../pages/careers.html" class="card-link">Careers</a>
            </div>
            <div class="col1">
              <a href="https://form.jotform.com/51114198189964" class="card-link">Customer Satisfaction Survey</a>
            </div>
            <div class="col1">
              <a href="https://www.dxlink.com/patientportal/signin.html?cn=%20precistox#/login" class="card-link">Patient
                Portal</a>
            </div>
          </div>
        </div>
        <!--End Section 2-->
        <!--Section 3-->
        <div class="section">
          <!--Find Us-->
          <h5 style="margin-left: 50px; width:100%; margin-top:80px;">Find Us</h5>
          <div class="find-us" style=" font-size:9pt; margin-left: 50px; width:100%;">
            <i class="fas fa-map-marker-alt" class="card-link"></i> 4215 Sorrento Valley Blvd., San Diego, CA 92121
            <br>
            <br>
            <i class="fas fa-map-marker-alt" style="font-size: 9pt;"></i> 49 State Road, Suite N 103, Dartmouth, MA
            02747
          </div>
        </div>
        <!--End Section 3-->
        <!--Section 4-->
        <div class="section">
          <!---Lets Talk-->
          <div class="lets-talk">
            <h5 style="margin-left:10px; width:100%; margin-top:80px;">Let's Talk</h5>
            <div class="lets-talk" style=" font-size:9pt;margin-left: 10px; width:100%;">
              <i class="fas fa-phone"></i> 800.635.6901
              <br>
              <i class="fa fa-envelope" aria-hidden="true"></i> info@precisiondxlab.com
            </div>
          </div>
        </div>
        <!--End Section 4-->
        <!--Bottom of Footer-->
        <div class="bottom-footer">
          <!---Copyright-->
          <div class="section2">
            <div class="copyright-container">
              <div class="" style="width:100%; margin-left:350px;">©2019 Precision Diagnostics. All rights
                reserved.
              </div>
            </div>
          </div>
          <!--Social Media-->
          <div class="section3">
            <div class="media-container" style="margin-left:220px; width:100%;">
              <a href="https://www.facebook.com/precisiondiagnostics" class="fab fa-facebook-f" id="icon"></a>
              <a href="https://www.linkedin.com/company/precisiondxlab" class="fab fa-linkedin" id="icon"></a>
              <a href="https://twitter.com/PrecisionDxLab" class="fab fa-twitter" id="icon"></a>
            </div>
          </div>
        </div>
        <!--End bottom footer-->
      </div>
    </div>
  </div>
</div>
</div>
</div>
<!--/Footer-->
<!-- jQuery -->
<!-- Bootstrap Core JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js" integrity="sha256-dHf/YjH1A4tewEsKUSmNnV05DDbfGN3g7NMq86xgGh8="
  crossorigin="anonymous"></script>
<!-- Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- JavaScript -->
<script src="../js/index.js"></script>
<script src="../js/topScroll.js"></script>
<script src="../js/about.js"></script>
<script src="../counter.js"></script>
</body>
</html>
`;
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(testHTML);

// Set window and document from jsdom
const { window } = jsdom;
const { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

const $ = global.jQuery = require('jquery');

console.log(`jQuery ${jQuery.fn.jquery} working! Yay!!!`);
const inputElement = $('#fiptest');
console.log(inputElement.length);


app = express();

//execute every 2:30am morning
// cron.schedule('30 2 * * *', function(){
//  console.log('running a task every two minutes');
// }); */}


// //execute every 1 min
// cron.schedule('*/1 * * * *', function () {
//   console.log('running a task every minute');
//   var a = 0;
//   $(window).scroll(function () {

//         var oTop = $('#counter').offset().top - window.innerHeight;
//         if (a == 0 && $(window).scrollTop() > oTop) {
//             $.fn.jQuerySimpleCounter = function (options) {
//                 var settings = $.extend({
//                     start: 0,
//                     end: 100,
//                     // easing: 'swing',
//                     duration: 43200000,
//                     complete: ''
//                 }, options);

//                 var thisElement = $(this);

//                 $({ count: settings.start }).animate({ count: settings.end }, {
//                     duration: settings.duration,
//                     easing: settings.easing,
//                     step: function () {
//                         var mathCount = Math.ceil(this.count);
//                         thisElement.text(mathCount);
//                     },
//                     complete: settings.complete
//                 });

//                 a = 1;
//             };


//             $('#number1').jQuerySimpleCounter({ end: 345, duration: 100 });
//             $('#number2').jQuerySimpleCounter({ end: 27456, duration: 4320 });
//             $('#number3').jQuerySimpleCounter({ end: 2810, duration: 4320 });
//             $('#number4').jQuerySimpleCounter({ end: 563430, duration: 43200000 });


//   }});

//   console.log('Counter ran');


  // var a = 0;
  // $(window).scroll(function () {

  //       var oTop = $('#counter').offset().top - window.innerHeight;
  //       if (a == 0 && $(window).scrollTop() > oTop) {
  //           $.fn.jQuerySimpleCounter = function (options) {
  //               var settings = $.extend({
  //                   start: 0,
  //                   end: 100,
  //                   easing: 'swing',
  //                   duration: 43200000,
  //                   complete: ''
  //               }, options);

  //               var thisElement = $(this);

  //               $({ count: settings.start }).animate({ count: settings.end }, {
  //                   duration: settings.duration,
  //                   easing: settings.easing,
  //                   step: function () {
  //                       var mathCount = Math.ceil(this.count);
  //                       thisElement.text(mathCount);
  //                   },
  //                   complete: settings.complete
  //               });

  //               a = 1;
  //           };


  //           $('#number1').jQuerySimpleCounter({ end: 345, duration: 100 });
  //           $('#number2').jQuerySimpleCounter({ end: 27456, duration: 4320 });
  //           $('#number3').jQuerySimpleCounter({ end: 2810, duration: 4320 });
  //           $('#number4').jQuerySimpleCounter({ end: 563430, duration: 43200000 });

  //           console.log('running a task everyday at 6am');








  // //execute everyday at 6am
  // cron.schedule('0  6 * * *', function () {

  //     console.log('running a task at 6am');

  //     var a = 0;
  //   $(window).scroll(function () {

  //         var oTop = $('#counter').offset().top - window.innerHeight;
  //         if (a == 0 && $(window).scrollTop() > oTop) {
  //             $.fn.jQuerySimpleCounter = function (options) {
  //                 var settings = $.extend({
  //                     start: 0,
  //                     end: 100,
  //                     easing: 'swing',
  //                     duration: 43200000,
  //                     complete: ''
  //                 }, options);

  //                 var thisElement = $(this);

  //                 $({ count: settings.start }).animate({ count: settings.end }, {
  //                     duration: settings.duration,
  //                     easing: settings.easing,
  //                     step: function () {
  //                         var mathCount = Math.ceil(this.count);
  //                         thisElement.text(mathCount);
  //                     },
  //                     complete: settings.complete
  //                 });

  //                 a = 1;
  //             };


  //             $('#number1').jQuerySimpleCounter({ end: 345, duration: 100 });
  //             $('#number2').jQuerySimpleCounter({ end: 27456, duration: 43200000 });
  //             $('#number3').jQuerySimpleCounter({ end: 2810, duration: 43200000 });
  //             $('#number4').jQuerySimpleCounter({ end: 563430, duration: 43200000 });

  //             console.log('running a task everyday at 6am');
  //         }});





  // })

  // app.listen(3128)};






  // Routes
  // =============================================================



  // // LISTENER
  // // The below code effectively "starts" our server
  // // =============================================================================
  // app.listen(PORT, function() {
  //   console.log("App listening on PORT: " + PORT);
  // });

  // Starts our server
  server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
  })
