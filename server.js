const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost:27017/webdev");

app.use(cors({
    origin: "*",
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
    ],
    methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "OPTIONS",
    ],
    credentials: true,
}));

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require("./services/movies-service")(app);
require("./services/tweeter-service")(app);
require("./movies/service")(app);

app.listen(PORT);