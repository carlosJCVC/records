const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: { type: String, required: true},
    path: { type: String, required: true},
    date: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Video', VideoSchema);
