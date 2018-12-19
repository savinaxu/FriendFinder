const path = require("path");

module.exports = function(app) {
    app.get("/home", function(req, res) {
        res.sendFile(path.jpin(__dirname, "../public/home.html"))
    })

    app.get("/survey", function(req, res) {
        res.sendFile(path.jpin(__dirname, "../public/survey.html"))
    })
}