// Route to survey page
app.get("/survey"), function(req, res) {
    res.sendFile(path.join(__dirname/../public/survey.html));
};

// Default to home page
app.get("*", function(req, res) {
    res.redirect('/');
});

// Route to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname/../public/home.html));
});
