var express = require("express");
var path = require("path");
var bodyParser = require('body-parser') // middleware for parsing the body of a request
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let tables = [];
let waitList = [];

// route first to the AJAX home Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// route to the reservations page
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname, "/app.js"));
  });

// route to the tables/waitlist page
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.customerID.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    console.log(tables.length);
    if (tables.length < 5) {
        tables.push(newReservation);
        res.json(newReservation);
        console.log(tables.length);
    }
    else {
        waitList.push(newReservation);
        res.json(newReservation);
    }
});

app.post("/api/clear", function(req, res) {
    tables.length = 0;
    waitList.length = 0;
    res.json({ ok: true });
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });