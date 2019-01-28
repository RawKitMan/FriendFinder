//Used to get the correct file path for the server
const path = require("path");

module.exports = (function (app) {

    //Below contains the routing for the two pages the user will visit. The home page and the survey page

    //GET request for the Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //GET request for the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //GET request for any URL where the request has neither of the above matches. The user should get the Home page for these cases.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
});