const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
    name: String, 
    type: String,
    genre: String, 
    rating: Number
});

const Series = mongoose.model('Serie', serieSchema);

module.exports = Series;