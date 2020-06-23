// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Table Reservations (DATA)
// =============================================================

// var reservations = [
//   {
//     customerName: "Marc Arguijo",
//     customerEmail: "marcos.a.arguijo@gmail.com",
//     customerID: "marguijo2401",
//     phoneNumber: "(956)244-3937",
//   },
// ];

// var waitingList = [
//   {
//     customerName: "Garrus Vakarrian",
//     customerEmail: "archangel@gmail.com",
//     customerID: "archangelOMEGA",
//     phoneNumber: "(555)555-5555",
//   },
// ];

// Routes
// =============================================================

// Basic route that sends the user first to the Home Page
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/reserve", function (req, res) {
//   res.sendFile(path.join(__dirname, "reservation.html"));
// });

// // Displays all reservations
// app.get("/api/reservations", function (req, res) {
//   return res.json(reservations);
// });

// // Displays all waiting lists reservations
// app.get("/api/waiting", function (req, res) {
//   return res.json(waitingList);
// });

// // Displays a single reservation, or returns false
// app.get("/api/reservations/:customerName", function (req, res) {
//   var chosen = req.params.customerName;

//   console.log(chosen);

//   for (var i = 0; i < reservations.length; i++) {
//     if (chosen === reservations[i].customerName) {
//       return res.json(reservations[i]);
//     }
//   }

//   return res.json(false);
// });

// // Display a single waiting list reservation, or returns false
// app.get("/api/waiting/:customerName", function (req, res) {
//   var chosen = req.params.customerName;

//   console.log(chosen);

//   for (var i = 0; i < waitingList.length; i++) {
//     if (chosen === waitingList[i].customerName) {
//       return res.json(waitingList[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Reservation - takes in JSON input
// app.post("/api/reservations", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newReservation = req.body;

//   // Using a RegEx Pattern to remove spaces from newReservation
//   newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newReservation);

//   if (reservations.length < 4) {
//     reservations.push(newReservation);
//     res.json(newReservation);
//   } else {
//     waitingList.push(newReservation);
//     res.json(newReservation);
//   }
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
