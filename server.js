const express = require('express');
const cors = require('cors');
const app = express();

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

app.listen(process.env.PORT);