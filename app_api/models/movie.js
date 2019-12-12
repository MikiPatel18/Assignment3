const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    director:{
        type: String,
        required: true
    } 
});
/* const movieReviewSchema = new mongoose.Schema({
    name:{
        authorName: String,
        required: true,
        minlength:6
    },
    reviewMessage:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}); */
mongoose.model('movie',movieSchema); 

