const dao = require("../tweets/dao");

function findAllTweets(req, res) {
    dao.findAllTweets().then(tweets => res.json(tweets));
}

function createTweet(req, res) {
    const newTweet = {
        topic: "Web Development",
        userName: "ReactJS",
        verified: false,
        handle: "ReactJS",
        time: "2h",
        "avatar-image": "../../../images/react-blue.png",
        "logo-image": "../../../images/react-blue.png",
        stats: {
            comments: 123,
            retweets: 234,
            likes: 345,
        },
        ...req.body,
    }
    dao.createTweet(newTweet);
}

function deleteTweet(req, res) {
    dao.deleteTweet(req.params['id']);
}

function likeTweet(req, res) {

    // pure function, Tweet -> Tweet
    const pressLikeButton = tweet => {
        return {
            ...tweet,
            liked: !tweet.liked,
            stats: {
                ...tweet.stats,
                likes: tweet.liked ? tweet.stats.likes-- : tweet.stats.likes++,
            }
        }
    }

    const id = req.params['id'];
    const tweetToChange = dao.findTweetById(id);
    dao.updateTweet(id, pressLikeButton(tweetToChange));
    res.sendStatus(200);
}

module.exports = (app) => {
    app.get("/api/tweets", findAllTweets);
    app.post("/api/tweets", createTweet);
    app.delete("/api/tweets/:id", deleteTweet);
    app.put("/api/tweets/:id/like", likeTweet);
}