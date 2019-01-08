// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/index.html"));
  });

  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/services.html"));
  });
  app.get("/privacy", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/privacy.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/contact.html"));
  });
  app.get("/careers", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/careers.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../pages/about.html"));
  });
//   If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../pages/index.html"));
  });
};
