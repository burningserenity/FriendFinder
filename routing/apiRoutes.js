var express = require('express');
var path = require('path');
var fs = require('fs');

var router = express.Router();

var friends = require('../app/data/friends');

var totDiff = 0;
var diffArr = [];
var match = 0;

// Route to list of all possible friends
router.get("/", function(req, res) {
    res.json(friends);
});

// Route to handle survey results and compatibility calculations
router.post("/", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    //res.json(newFriend);

    outerloop: for (i = 0; i < friends.length; i++) {
        for (j = 0; j < friends[i].scores.length; j++) {
            if (newFriend.scores.join("") == friends[i].scores.join("")) break outerloop;
            var diff = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            totDiff += diff;
        }
        diffArr.push(totDiff);
        totDiff = 0;
    }

    for (i = 0; i < diffArr.length; i++) {
        if (diffArr[i] < diffArr[i-1]) match = diffArr.indexOf(diffArr[i]);
    }

    console.log(friends[match])
    res.send(friends[match]);
});

module.exports = router;
