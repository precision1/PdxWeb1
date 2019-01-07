var express = require('express');
var nodemailer = require('nodemailer');
//var config = require('./config.js');
// var smtpTransport = require('nodemailer-smtp-transport');
var app = express();


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'hrprecisiondx@gmail.com',
        pass: 'Pdxlab123!'
    }
});

console.log('created');
transporter.sendMail({
from: 'hrprecisiondx@gmail.com',
  to: 'hrprecisiondx@gmail.com',
  subject: 'hello world!',
  text: 'hello world!'
});