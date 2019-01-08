var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'hrprecisiondx@gmail.com',
           pass: 'Pdxlab123!'
       }
   });


app.use(express.static(__dirname + '../pages'));

app.get('../', function (req, res) {
    res.sendfile('../pages');
});

app.get('/send', function (req, res) {
git 
    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});


// Static directory to be served
app.use(express.static("/pages"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./routes/htmlRoutes")(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


// app.listen(8080, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Listening on port on 8080");
//     }
// });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  