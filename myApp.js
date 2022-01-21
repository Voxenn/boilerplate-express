var express = require('express');
var app = express();
let absolutePath = __dirname + "/views/index.html";
let absoluteStaticPath = __dirname + "/public";
app.use("/public", express.static(absoluteStaticPath));
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});
app.get("/json", (req, res) => {
    res.json(
        {
            "name":"Vernon",
            "career":"Developer",
            "hobby":"Gaming"
        }
    );
});
console.log("Hello World");



































 module.exports = app;
