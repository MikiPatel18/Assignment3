const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderCreatePage = function (req, res){
    res.render('create-new-movie',{
              title:"Create new movie"
               });
};

const addNewMovie = function(req, res){
    _renderCreatePage(req,res);
};

const doAddNewMovie = function(req, res){
    
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        director: req.body.director
        
    };
    const requestOptions ={
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
 request(
 requestOptions,
 (err, response, body) => {
     if (response.statusCode === 201){
         res.redirect('/');
     }
 });
    
};


const _renderHomePage = function(req, res, responseBody){
    res.render('list-display', { movies: responseBody});
};

const _renderMovieListPage = function(req, res, responseBody){
    res.render('movie-list', { movies: responseBody});
};

const _renderDetailPage = function(req, res, responseBody){
    res.render('display', { currentMovie: responseBody});
};


const moviesList= function(req,res){
    const path = '/api/movies';
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };
request(requestOptions,(err, response, body) => {
   _renderHomePage(req, res, body); 
    
});
};

const showMovies= function(req,res){
    const path = '/api/movies';
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };
request(requestOptions,(err, response, body) => {
   _renderMovieListPage(req, res, body); 
    
});
};

const movieDetail= function(req,res){
    const path = `/api/movies/${req.params.movieid}`;
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };

   request(requestOptions,(err, response, body) => {
   _renderDetailPage(req, res, body); 
    
});
};

module.exports = {
    moviesList,
    movieDetail,
    doAddNewMovie,
    addNewMovie,
    showMovies
};