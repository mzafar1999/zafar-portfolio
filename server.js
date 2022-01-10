const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer')
const app = express();
const path = require('path')
const favicon = require("serve-favicon");
var cors = require('cors')
app.use(cors({ credentials: true, origin: true }))

require("dotenv").config();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(bodyParser.json())
$.ajax({
    url: 'zafar-portfolio.herokuapp.com',
    type: 'POST',
    headers: { 'Accept': 'application/json;' },
    data: {
        "subject": "subject",
        "message": "some body text"
    },
}).done(function(res) {
    console.log(res); // it shows your email sent message.
});
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, 'build')));


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'm.zafar1990hz@gmail.com',
            pass: 'shahid1234'
        }
    });

    var mailOptions = {
        from: email,
        to: 'm.zafarhayatzada@gmail.com',
        subject: name,
        text: "from : " + email + " " + message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(501).send(error);
        } else {
            res.status(200).send('Email sent successfully ');
        }
    });
})


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(process.env.PORT || 5000, function() {
    console.log('app is listening on port 4000');
})