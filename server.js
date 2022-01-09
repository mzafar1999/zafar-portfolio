const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer')
const app = express();
const path = require('path')
const favicon = require("serve-favicon");
require("dotenv").config();

app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

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



app.listen(process.env.PORT || 5000, function() {
    console.log('app is listening on port 4000');
})