// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./routing/htmlRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
//app.use('*', htmlRoutes);
app.use(express.static(path.join(__dirname + '/node_modules')));

// Routing functions
// ============================================================
/*module.exports = {
    getSurvey : function(req, res) {
        res.sendFile(path.join(public/survey.html));
    },
    getGlob : function(req, res) {
        res.redirect('/');
    },
    getHome : function(req, res) {
        res.sendFile(path.join(public/home.html));
    }

}*/

// Run the server
// ============================================================
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});
