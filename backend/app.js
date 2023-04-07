const express = require('express');
const mongoose = require('mongoose');

const app = express();
const User = require("./models/userModel.js")
const Question = require("./models/questionModel.js")
const Submission = require("./models/submissionModel.js")


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.json());



app.get('/getUser', async (req, res) => {
    const id = req.query.id
    try {
        const userInfo = await User.findOne({_id: id})
        if (userInfo === null) {
            res.status(400).send('User not found')
        }
        res.send(userInfo)
    }

    catch (err) {
        res.status(400).send(err)
    }
})

app.post('/add_user', async (req, res) => {
    const id = Math.round((Math.random(0, 10)*1000))
    const user = new User({
        _id: id,
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        posts: [],
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
        res.status(501).send(err)
    }
})

app.get('/get_question', async (req, res) => {
    const id = req.query.id
    try {
        const question = await Question.findOne({_id: id})
        res.send(question)
    }

    catch (err) {
        res.status(400).send("Question Not Found")
    }
});


app.post('/add_submission', async (req, res) => {
    try {
        let id = math.round((Math.random(0, 10)*1000))
        let IDIndatabase = Submission.findOne({_id: id})
        while (IDIndatabase != null) {
            id = math.round((Math.random(0, 10)*1000))
            IDIndatabase = Submission.findOne({_id: id})
        }
        const submission = new Submission({
            _id: id,
            submissionText: req.query.submissionText,
            title: req.query.title,
            questionId: req.query.questionId,
            date: Date.now(),
            submitterText: req.query.submitterText,
            comments: []
        })
        let question = Question.findById(req.query.questionId)
        question.submissions.push(submission)
        await question.save()
        await submission.save()
        res.send(`Submission added to question ${req.query.questionId}`)
    }

    catch(err) {
        res.status(400).send("Question Submission Failed")
    }
})

app.get('/get_submission', async (req, res) => {
    try {
        let submission = await Submission.findById(req.query.id)
        res.send(submission)
    }
    
    catch(err) {
        res.status(400).send("Submission Not Found")
    }
})

const start = async () => {
    try {
        mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(3000, () => {console.log('Listening on port 3000')});
    }

    catch (err) {
        console.log(err);
    }
}

start();