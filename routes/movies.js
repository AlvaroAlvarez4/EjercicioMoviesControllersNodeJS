var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesController');

/* localhost:3000/movies */
router.get('/', moviesController.listMovies);

// localhost:3000/movies/formmovie
router.get('/formMovie', moviesController.viewFormMovie);

//localhost:3000/movies/deleteMovie
router.get('/deleteMovie/:id_movie', moviesController.deleteMovie);

//localhost:3000//movies/viewMovie/:id_movie
router.get('/viewMovie/:id_movie', moviesController.selectSingleMovie);

//localhost:300/movies/saveMovie
router.post('/saveMovie', moviesController.saveNewMovie);

//localhost:3000/movies/updateMovie/:id_movie
router.post('/updateMovie/:id_movie', moviesController.updateMovie);
module.exports = router;