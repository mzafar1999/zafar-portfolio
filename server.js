const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const favicon = require("serve-favicon")
const cors = require('cors')
require("dotenv").config()
app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(process.env.PORT || 5000, function() {
    console.log('app is listening on port 4000');
})