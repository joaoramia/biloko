var mongoose = require( 'mongoose' );

var videoSchema = new mongoose.Schema({
    youtubeID: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    type: {
      type: String,
      required: true
    },
    length: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    views: Number
});

mongoose.model('Video', videoSchema);
