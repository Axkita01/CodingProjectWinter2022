import React, {useMemo, useState} from "react";
import '../Styles/Submission.css'


const submission = 
{
    name: 'Sample1',
    type: 'Argumentative',
    upvotes: 1,
    downvotes: 5,
    _id: 1,
    text: 'sample writing prompt',
    submissions: [
        {
            _id: 1,
            submissionText: 'I answered the prompt',
            title: 'title',
            author: 'author',
            submitterText: 'stuff about this story',
            date: '12/26/2022',
            upvotes: 1,
            downvotes: 5,
            comments: [
                {
                    _id: 1,
                    author: 'commentAuthor',
                    text: 'I commented',
                    children: [
                        {
                        author: 'replierAuthor',
                        text: 'I replied',
                        upvotes: 0,
                        downvotes: 0
                        }
                    ]
                },
                {
                    _id: 1,
                    author: 'commentAuthor',
                    text: 'I commented',
                    children: [
                        {
                        author: 'replierAuthor',
                        text: 'I replied',
                        upvotes: 0,
                        downvotes: 0
                        }
                    ]
                }
            ]
        },
        {
            _id: 2,
            submissionText: 'I answered the prompt',
            title: 'title',
            author: 'author',
            submitterText: 'stuff about this story',
            date: '12/26/2022',
            upvotes: 1,
            downvotes: 5,
            comments: [
                {
                    _id: 1,
                    author: 'commentAuthor',
                    text: 'I commented',
                    upvotes: 1,
                    downvotes: 1,
                    children: [
                        {
                        author: 'replierAuthor',
                        text: 'I replied',
                        upvotes: 0,
                        downvotes: 0
                        }
                    ]
                }
            ]
        }
    ]
}

//Will have submission text, comments, and place to comment
function PopUp (props) {
    const comments = props.commentsArr.map(
        (item, idx) => {
            console.log(item.author)
        return (
            <div className = 'comment' key = {idx}>
                <div className="commentInnerContainer">
                    {item.author}
                </div>
                <div className="commentInnerContainer">
                    {item.text}
                </div>
                <div className="commentInnerContainer">
                    {
                        item.children.map(
                            (reply, index) => {
                                return (
                                    <div className = 'reply' key = {index}>
                                        <div className="replyInnerContainer">
                                            {reply.author}
                                        </div>
                                        <div className="replyInnerContainer">
                                            {reply.text}
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
        }
    )
    return (
    <div className = 'popUp' >
        <div className = 'popUpInnerContain' id = 'authorHeader'>
            {props.author}
        </div>
        <div className = 'popUpInnerContain' id = 'descContainer'>
            <p>
                {props.submitterText}
            </p>
        </div>
        <div className="popUpInnerContain" id = 'submissionTextContainer'>
            <p>
                {props.submissionText}
            </p>
        </div>
        <div className="comments">
           {comments}
        </div>
        <button className="exitPopupBtn" onClick = {() => props.exitFunction()}>
            x
        </button>
    </div>
    )
}

export default function Submission() {
    const [popUp, setPopUp] = useState(false)
    const [selected, changeSelected] = useState(null)
    const [sorted, changeSorted] = useState(null)

    const questions = useMemo(() => {
        const temp = submission.submissions.map((item, index) => {
            return (
                <div className = 'submissionContainer' key = {index}>
                    <div className = 'submissionListItem'>
                        {item.author}
                    </div>
                    <div className = 'submissionListItem'>
                        <a onClick = {() => {
                            changeSelected(index)
                            setPopUp(true)
                        }}
                        style = {{cursor: 'pointer'}}
                        >
                            {item.title}
                        </a>
                    </div>
                    <div className = 'submissionListItem'>
                        {item.submitterText}
                    </div>
                    <div className = 'submissionListItem'>
                        {item.date}
                    </div>
                </div>
            )
        })
        return temp
    }, [sorted])
    return (
        <div className="submissionPageContainer">
            { popUp && 
            <PopUp 
            submissionText = {submission.submissions[selected].submissionText} 
            author = {submission.submissions[selected].author} 
            submitterText = {submission.submissions[selected].submitterText} 
            commentsArr = {submission.submissions[selected].comments}
            exitFunction = {() => setPopUp(false)}
            />}
            {/* 
            Select portion does nothing right now, will add ability to change
            sorting of submissions based on different criterea
             */}
            <div className = 'sortSubmissions'>
                <select onChange = {(e) => {changeSorted(e.target.event)}}>
                    <option value = 'Recent'>
                        Recent
                    </option>
                    <option value = 'popular'>
                        Popularity
                    </option>
                </select>
            </div>
            <div className="submissionsList">
                {questions}
            </div>
        </div>
    )
}