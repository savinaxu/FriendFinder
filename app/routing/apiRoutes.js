const friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        res.json(compatible(req.body))
        friendsData.push(req.body)
    })

    function compatible(user) {

        let scoreTotal = function(obj) {
            let total = 0
            obj.scores.forEach(function(score) {
                total += parseInt(score)
            })
            return total
        }

        let bff = friendsData[0]
        let friendScore = scoreTotal(friendsData[0])
        let userScore = scoreTotal(user)
        let totalDifference = Math.abs(friendScore - userScore)

        for (let i = 1; i < friendsData.length; i++) {
            let difference = totalDifference
            friendScore = scoreTotal(friendsData[i])
            totalDifference = Math.abs(friendScore - userScore)

            if (difference > totalDifference) {
                bff = friendsData[i]
            } else {
                totalDifference = difference
            }
        }
        return bff
    }


}