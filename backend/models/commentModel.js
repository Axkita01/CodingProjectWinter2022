const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
    _id: Number,
    author: String,
    text: String,
    upvotes: Number,
    downvotes: Number,
    children: [Comment]
})

module.exports.commentModel = mongoose.model('Comment', Comment)
module.exports.commentSchema = Comment