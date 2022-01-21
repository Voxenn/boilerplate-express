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
    if(process.env.MESSAGE_STYLE === uppercase) {
        res.json(
                {
                    "message": "HELLO JSON"
                }
            );
    }  else {
            res.json(
                    {
                        "message": "Hello json"
                    }
                );
    }

});
console.log("Hello World");



































 module.exports = app;
