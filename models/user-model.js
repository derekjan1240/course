const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    collectionCourse: [String],
    googleId: String,
    twitterId: String,
    thumbnail: String,
    active:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;