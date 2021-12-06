const model = require("./model");

function findAllMovies() {
    return model.find();
}

function deleteMovie(id) {
    return model.deleteOne({_id: id});
}

function createMovie(movie) {
    return model.create(movie);
}

function findMovieById(id) {
    return model.findById(id);
}

function updateMovie(id, movie) {
    return model.updateOne({_id: id}, {$set: movie});
}

module.exports = {
    findAllMovies,
    deleteMovie,
    createMovie,
    findMovieById,
    updateMovie,
};