const model = require("./model");

function findAllTweets() {
    return model.find();
}

function createTweet(tweet) {
    return model.create(tweet);
}

function deleteTweet(id) {
    return model.deleteOne({_id: id});
}

function findTweetById(id) {
    return model.findById(id);
}

function updateTweet(id, tweet) {
    return model.updateOne({_id: id}, {$set: tweet});
}

module.exports = {
    findAllTweets,
    createTweet,
    deleteTweet,
    updateTweet,
    findTweetById,
}