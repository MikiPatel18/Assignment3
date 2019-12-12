var express = require('express');
var router = express.Router();

const ctrlMovie = require('../controller/movies');
const ctrlAbout = require('../controller/about');
/* GET home page. */
router.get('/', ctrlMovie.moviesList); 
router.get('/movies/:movieid', ctrlMovie.movieDetail); 

router.route('/new')
.get(ctrlMovie.addNewMovie)
.post(ctrlMovie.doAddNewMovie);

router.get('/about', ctrlAbout.about);
router.get('/list', ctrlMovie.showMovies);

module.exports = router;


