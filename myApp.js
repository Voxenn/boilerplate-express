require('dotenv').config();

var express = require('express');
var app = express();
let absolutePath = __dirname + "/views/index.html";
let absoluteStaticPath = __dirname + "/public";
app.use("/public", express.static(absoluteStaticPath));
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

app.get("/json", (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
app.get("/json", (req, res) => {
    var message = "Hello json"
    res.json(
                {
                    "message": process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message
                }
            );
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json(
                {
                    "time": req.time
                }
            );
});

app.get("/:word/echo", (req, res) => {
    res.json(
                {
                    "echo": req.params.word
                }
            );
});
console.log("Hello World");



































 module.exports = app;
