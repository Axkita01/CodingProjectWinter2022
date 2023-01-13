

mongoose = require('mongoose')

const User = new mongoose.Schema({
    _id: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    //postIds
    posts: [Number],
    //commentIds
    comments: [Number] ,
    //upvotedCommentIds
    upvotedComments: [Number],
    //downvotedCommentIds
    downvotedComments: [Number],
    //upvotedPostIds
    upvotedPosts: [Number],
    //downvotedPostIds
    downvotedPosts: [Number],
    //replyIds
    replies: [Number],
    //upvotedReplyIds
    upvotedReplies: [Number],
    //downvotedReplyIds
    downvotedReplies: [Number],
}
)

module.exports = mongoose.model('User', User)