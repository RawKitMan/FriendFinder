
//Using Express for all of our server need
const express = require("express");
const app = express();

//Sets the Port for our server listener used down below
const PORT = 3000;

//Middleware used so Express can handle data parsing as JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Accesses the routing files and helps our server determine what needs to be done based on the requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Our listener to start the server up
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
}); 