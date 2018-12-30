// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Book = sequelize.define("cart", {
  title: Sequelize.STRING,
  quantity: Sequelize.INTEGER
});

// Syncs with DB
Cart.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Cart;
