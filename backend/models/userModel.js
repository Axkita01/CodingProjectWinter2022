

mongoose = require('mongoose')

const User = new mongoose.Schema({
    _id: String,
    password: String,
    //postIds
    posts: [Number],
    //commentIds
    comments: [Number] 
}
)

module.exports = mongoose.model('User', User)