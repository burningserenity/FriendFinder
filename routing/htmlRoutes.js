// Dependencies

var express = require('express');
var path = require("path");

var router = express.Router();

// Route to survey page
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Route to home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = router;
