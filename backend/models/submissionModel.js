const mongoose = require('mongoose')
//const Comment = require('./commentModel')

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

module.exports.submissionModel = mongoose.model('Submission', Submission)
module.exports.submissionSchema = Submission
