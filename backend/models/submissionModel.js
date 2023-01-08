const mongoose = require('mongoose')
const Comment = require('./commentModel')

const Submission = mongoose.Schema(
    {
        _id: Number,
        submissionText: String,
        title: String,
        author: String,
        submitterText: String,
        date: Date,
        upvotes: Number,
        downvotes: Number,
        comments: [Comment.commentSchema]
    }
)

module.exports.submissionModel = mongoose.model('Submission', Submission)
module.exports.submissionSchema = Submission