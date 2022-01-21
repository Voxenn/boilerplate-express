require('dotenv').config();

var express = require('express');
var app = express();
let absolutePath = __dirname + "/views/index.html";
let absoluteStaticPath = __dirname + "/public";
app.use("/public", express.static(absoluteStaticPath));
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});
app.get("/json", (req, res) => {
    var message = "Hello json"
    if(process.env.MESSAGE_STYLE === "uppercase") {
        message.toUpperCase();
    }
    res.json({"message": message});
});
console.log("Hello World");



































 module.exports = app;
