const mongoose = require('mongoose')
const submission = require('./submissionModel')

const Question = new mongoose.Schema({
    _id: Number,
    type: String,
    upvotes: Number,
    downvotes: Number,
    text: String,
    submissions: [submission.submissionSchema]
})

module.exports = mongoose.model('Question', Question)