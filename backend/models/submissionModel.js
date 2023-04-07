const mongoose = require('mongoose')
const Comment = require('./commentModel')

const Submission = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        submissionText: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        submitterText: {
            type: String,
            required: true
        },
        date: Date,
        upvotes: {
            type: Number,
            default: 0
        },
        downvotes: {
            type: Number,
            default: 0
        },
        questionId: {
            type: Number,
            required: true
        },
        comments: [Comment]
    }
)

module.exports = mongoose.model('Submission', Submission)
