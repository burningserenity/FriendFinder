// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname + '/node_modules')));
app.use('/api/friends', apiRoutes);
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
app.use(function(req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.redirect('/');
    }
});

// Run the server
// ============================================================
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});
