// Route to list of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// Route to handle survey results and compatibility calculations
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});
