import React, {useMemo, useState} from "react";
import '../Styles/Submission.css'


const submission = 
{
    name: 'Sample1',
    type: 'Argumentative',
    upvotes: 1,
    downvotes: 5,
    questionNum: 1,
    text: 'sample writing prompt',
    submissions: [
        {
            submissionText: 'I answered the prompt',
            title: 'title',
            author: 'author',
            submitterText: 'stuff about this story',
            date: '12/26/2022',
            upvotes: 1,
            downvotes: 5,
            comments: [
                {
                    text: 'I commented',
                    children: [
                        'I replied'
                    ]
                }
            ]
        },
        {
            submissionText: 'I answered the prompt',
            title: 'title',
            author: 'author',
            submitterText: 'stuff about this story',
            date: '12/26/2022',
            upvotes: 1,
            downvotes: 5,
            comments: [
                {
                    text: 'I commented',
                    children: [
                        'I replied'
                    ]
                }
            ]
        }
    ]
}

//Will have submission text, comments, and place to comment
function PopUp (props) {
    return (
    <div className = 'popUp' >
        <div className = 'popUpInnerContain'>
            <span>
                {props.author}
            </span>
        </div>
        <div className = 'popUpInnerContain'>
            <p>
                {props.submitterText}
            </p>
        </div>
        <div className="popUpInnerContain">
            <p>
                {props.submissionText}
            </p>
        </div>
    </div>
    )
}

export default function Submission() {
    const [popUp, setPopUp] = useState(false)
    const [selected, changeSelected] = useState(null)
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
                        }}>
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
    }, [])
    return (
        <div className="submissionPageContainer">
            { popUp && <PopUp author = {submission.submissions[selected].author} submissionText = {submission.submissions[selected].submitterText}/>}
            <div className="submissionsList">
                {questions}
            </div>
            <button onClick = {() => {setPopUp(prev => !prev)}}>
                Click
            </button>
        </div>
    )
}