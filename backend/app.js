const express = require('express');
const mongoose = require('mongoose');

const app = express();
const User = require("./models/userModel.js")

app.use(express.json());

app.get('/add_user', (req, res) => {
    
    res.send(req.query.test)
})

app.get('/', (req, res) => {
    res.send({message: 'Hello World'});
});

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(3000, () => {console.log('Listening on port 3000')});
    }

    catch (err) {
        console.log(err);
    }
}

start();