//This file needs to access the friends array stored in another file
let friendData = require("../data/friends");

module.exports = function (app) {

    //Get that data
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //This gets the user data from survey.html and puts it into the friends array. 
    app.post("/api/friends", function (req, res) {
        let newUser = req.body;  
        console.log(newUser);
        
        //We only want fully completed forms to be pushed in. If anything is missing, nothing gets through.
        if (newUser.name !== "" && newUser.imageURL !== "" && typeof newUser.responses !== "undefined" && newUser.responses.length === 10) {
            friendData.push(newUser);
        };
    });
};