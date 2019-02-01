
/*Array that will store objects containing people who have taken the survey. These objects will be used to compare and match with
the current survey taker. Below are two "dummy users for the initial users to compare against. This could be empty but the first user would have nobody to compar with*/
let friendData = [
    {
        name: "Rhonda Vaughn",
        imageURL: "https://bit.ly/2RuAemd",
        responses: ["5", "5", "1", "2", "2", "5", "1", "2", "3", "1"]
    },
    {
        name: "CJ Vaughn",
        imageURL: "https://bit.ly/2BeulEA",
        responses: ["5", "4", "3", "2", "4", "5", "3", "1", "2", "3"]
    }
];

//Get that data OUT THERE!!!
module.exports = friendData;