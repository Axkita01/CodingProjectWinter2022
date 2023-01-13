const mongoose = require('mongoose')
const submission = require('./submissionModel')

const Question = new mongoose.Schema({
    _id: Number,
    qtype: String,
    title: String,
    upvotes: Number,
    downvotes: Number,
    text: String,
    submissions: [
        {
            title: String,
            author: String,
            submitterText: String,
            date: Date,
            upvotes: Number,
            downvotes: Number
        }
    ]
})

module.exports = mongoose.model('Question', Question)