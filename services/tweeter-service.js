let tweets = require("../data/tweets.json");

function findAllTweets(req, res) {
    res.json(tweets);
}

function createTweet(req, res) {
    const newTweet = {
        _id: (new Date()).getTime() + "",
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
    tweets = [
        newTweet,
        ...tweets,
    ];
    res.json(newTweet);
}

function deleteTweet(req, res) {
    const id = req.params['id'];
    tweets = tweets.filter(tweet => tweet._id !== id);
    res.sendStatus(200);
}

function likeTweet(req, res) {
    const id = req.params['id'];
    tweets = tweets.map(tweet => {
        if (tweet._id === id) {
            if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
            } else {
                tweet.liked = true;
                tweet.stats.likes++;
            }
            return tweet;
        } else {
            return tweet;
        }
    });
    res.sendStatus(200);
}

module.exports = (app) => {
    app.get("/api/tweets", findAllTweets);
    app.post("/api/tweets", createTweet);
    app.delete("/api/tweets/:id", deleteTweet);
    app.put("/api/tweets/:id/like", likeTweet);
}