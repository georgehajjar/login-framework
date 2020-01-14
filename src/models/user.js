const bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  /* Custom method for our User model. This will check if an unhashed password entered
  by the user can be compared to the hashed password stored in our database */
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Before a User is created automatically hash password
  User.beforeCreate(user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
