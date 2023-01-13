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
        questionId: Number,
        comments: [
        {
            author: String,
            text: {
                type: String,
                required: true
            },
            upvotes: {
                type: Number,
                default: 0
            },
            downvotes:{
                type: Number,
                default: 0
            },
            children: [
                {
                  type: Array,
                  default: [],
                  author: String,
                  text: String,
                  upvotes: Number,
                  downvotes: Number
                }
            ]
        }
        ]
    }
)

module.exports.submissionModel = mongoose.model('Submission', Submission)
module.exports.submissionSchema = Submission