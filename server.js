var express = require('express');
var nodemailer = require('nodemailer');
//var config = require('./config.js');
// var smtpTransport = require('nodemailer-smtp-transport');
var app = express();


// var transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'hrprecisiondx@gmail.com',
//         pass: 'Pdxlab123!'
//     }
// });

// console.log('created');
// transporter.sendMail({
// from: 'hrprecisiondx@gmail.com',
//   to: 'hrprecisiondx@gmail.com',
//   subject: '',
//   text: ''
// });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'hrprecisiondx@gmail.com',
           pass: 'Pdxlab123!'
       }
   });

//    const mailOptions = {
//     from: '#user_email', // sender address
//     to: 'hrprecisiondx@gmail.com', // list of receivers
//     subject: 'Contact Form Submission - Precision Website', // Subject line
//     html: '#textarea1'// plain text body
//   };

//   transporter.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
//  });




app.use(express.static(__dirname + '../pages'));

app.get('../', function (req, res) {
    res.sendfile('../pages/contact.html');
});

app.get('/send', function (req, res) {

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

app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});