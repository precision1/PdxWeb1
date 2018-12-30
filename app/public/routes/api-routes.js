// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Cart = require("../models/cart.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all items
  app.get("/api/all", function(req, res) {
    Cart.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific item
  app.get("/api/:cart", function(req, res) {
    Cart.findAll({
      where: {
        title: req.params.cart
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add an item
  app.post("/api/new", function(req, res) {
    console.log("Cart Data:");
    console.log(req.body);
    Book.create({
      title: req.body.title,
      pages: req.body.quantity
    });
  });

  // Delete item
  app.post("/api/delete", function(req, res) {
    console.log("Cart Data:");
    console.log(req.body);
    Cart.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
