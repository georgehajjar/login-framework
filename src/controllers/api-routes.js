const db = require("../models");
const passport = require("../config/passport");
//const routes = require("../views/js/routes.js");

module.exports = function(app) {

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    // }).then(function() {
    //   res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/accounts',
    failureRedirect: '/login'
  }));

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email
      });
    }
  });
};
