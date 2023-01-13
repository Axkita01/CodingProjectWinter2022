const express = require('express');
const mongoose = require('mongoose');

const app = express();
const User = require("./models/userModel.js")
const Question = require("./models/questionModel.js")


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.json());

app.post('/add_user', async (req, res) => {
    const id = Math.round((Math.random(0, 10)*1000))
    const user = new User({
        _id: id,
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        posts: [],
        comments: [],
        upvotedComments: [],
        downvotedComments: [],
        upvotedPosts: [],
        downvotedPosts: [],
        replies: [],
        upvotedReplies: [],
        downvotedReplies: []
    })

    try {
        await user.save()
        res.send('User added')
    }

    catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.post('/add_question', async (req, res) => {
    try {
        const id = Math.round((Math.random(0, 10)*1000))
        const question = new Question({
            _id: id,
            qtype: req.query.type,
            title: req.query.title,
            upvotes: 0,
            downvotes: 0,
            text: req.query.text,
            submissions: []
        })
        await question.save()
        res.send('Question added')
    }

    catch (err) {
        console.log(err)
        res.send(err)
    }
})

app.get('/get_question', async (req, res) => {
    const id = req.query.id
    try {
        const question = await Question.findOne({_id: id})
        console.log(question)
        res.send(question)
    }

    catch (err) {
        res.send(err)
    }
});


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(3000, () => {console.log('Listening on port 3000')});
    }

    catch (err) {
        console.log(err);
    }
}

start();