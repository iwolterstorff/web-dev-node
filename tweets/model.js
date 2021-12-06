const mongoose = require("mongoose");
const schema = require("./schema");

const model = mongoose.model("TweetModel", schema);
module.exports = model;