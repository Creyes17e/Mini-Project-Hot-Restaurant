// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservations (DATA)
// =============================================================

var tables = [
  {
    customerName: "Marc Arguijo",
    customerEmail: "marcos.a.arguijo@gmail.com",
    customerID: "marguijo2401",
    phoneNumber: "(956)244-3937",
  },
];

var waitList = [
  {
    customerName: "Garrus Vakarrian",
    customerEmail: "archangel@gmail.com",
    customerID: "archangelOMEGA",
    phoneNumber: "(555)555-5555",
  },
];

// Routes
// =============================================================

//Basic route that sends the user first to the Home Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/reserve.html"));
});

// Displays all reserved TABLES
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Displays the current WAIT LIST
app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

// Create New Reservation - takes in JSON input

app.post("api/tables", function (req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  if (tables.length < 5) {
    tables.push(newReservation);
    res.json(newReservation);
  } else {
    waitList.push(newReservation);
    res.json(newReservation);
  }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
