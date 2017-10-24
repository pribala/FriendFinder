// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
	// Basic route that sends the user first to the AJAX Page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "survey.html"));
	});

	app.get("*", function(req, res) {
	  res.sendFile(path.join(__dirname, "home.html"));
	});
};