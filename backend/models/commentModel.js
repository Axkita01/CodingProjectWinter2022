const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0
    },
    downvotes:{
        type: Number,
        required: true,
        default: 0
    },
    children: [
        {
          type: Array,
          default: []  
        }
    ]
})

module.exports.commentModel = mongoose.model('Comment', Comment)
module.exports.commentSchema = Comment