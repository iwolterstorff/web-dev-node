const dao = require("./dao");

function findAllMovies(req, res) {
    dao.findAllMovies().then(movies => res.json(movies));
}

function deleteMovie(req, res) {
    dao.deleteMovie(req.params.id).then(status => res.send(status));
}

function createMovie(req, res) {
    dao.createMovie(req.body).then(insertedMovie => res.json(insertedMovie));
}

function findMovieById(req, res) {
    dao.findMovieById(req.params.id).then(movie => res.json(movie));
}

function updateMovie(req, res) {
    dao.updateMovie(req.params.id, req.body).then(status => res.send(status));
}

module.exports = function(app) {
    app.get("/rest/movies", findAllMovies);
    app.get("/rest/movies/:id", findMovieById);
    app.delete("/rest/movies/:id", deleteMovie);
    app.post("/rest/movies", createMovie);
    app.put("/rest/movies/:id", updateMovie);
}