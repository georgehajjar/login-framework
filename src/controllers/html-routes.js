module.exports = function(app) {

  const isAuthenticated = (req, res, next) => {
    if (!req.user) {
      res.redirect("/login");
    }
    else {
      next();
    }
  };

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/js/accounts.js'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

  app.get("/login", (req, res) => {
    if (req.user) {
      console.log("redirecting to accounts, this means user is not null");
      res.redirect("/accounts");
      //res.sendFile(path.join(__dirname+'/views/js/accounts.js'));
    }
    else {
      console.log("Go to login page");
    }
  });

  // app.get("/accounts", (req, res) => {
  //   if (!isAuthenticated) {
  //     console.log("User is not authenticated");
  //     res.redirect("/");
  //   }
  //   else {
  //     console.log("User is authenticated!");
  //   }
  // });
};
