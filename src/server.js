const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s!", PORT);
  });
});
