import React, {useEffect, useState} from "react";
import '../Styles/ProblemDesc.css'
import { getColorFromType } from "../Functions/functions";

const problem_object = 
{
    name: 'Sample1',
    type: 'Argumentative',
    upvotes: 1,
    downvotes: 5,
    questionNum: 1,
    text: 'sample writing prompt blah blah blah blah BLAH BLAH BLAH  blah blah blah blah blah blah blah blah  blah blah blah blah'
    ,
    submissions: [
    {
        submissionText: 'I answered the prompt',
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



export default function ProblemDesc(props) {
    //Will eventually indicate vote, null for none,
    //false for downvoted, true for upvoted
    const [vote, changeVote] = useState(null)
    return (
        <div className = 'problemDescContainer'>
            <div className = 'problemDescInnerContainer'>
                <span><h1>{problem_object.name}</h1></span>
            </div>
            <div className="problemDescInnerContainer">
                <span className="problemDescText" style={{justifyContent:'center'}}>
                    <h4 style = {{color: getColorFromType(problem_object.type), margin: 0}}>{problem_object.type}</h4>
                    <span className = 'descVotes'>
                        {problem_object.upvotes} 
                        <button 
                        style = {{color: (vote) ? '#FF5555': 'gray'}}
                        onClick = {() => {
                            //Eventually add database logic to up/down votes
                            if (vote) {
                                changeVote(null)
                                problem_object.upvotes -= 1
                            }
                            else {
                                if (vote === false) {
                                    problem_object.downvotes -= 1
                                }
                                changeVote(true)
                                problem_object.upvotes += 1
                            }
                        }}
                        >
                            {'\u25B2'}
                        </button> 
                        {problem_object.downvotes} 
                        <button 
                        style = {{color: (vote === false) ? '#5555FF': 'gray'}}
                        onClick = {() => {
                            if (vote === false) {
                                changeVote(null)
                                problem_object.downvotes -= 1
                            }
                            else {
                                if (vote === true) {
                                    problem_object.upvotes -= 1
                                }
                                changeVote(false)
                                problem_object.downvotes += 1
                            }
                        }}
                        >
                            {'\u25BC'}
                        </button>
                    </span>
                </span>
            </div>
            <div className="problemDescInnerContainer">
                <span className = 'problemDescText'>
                    <p>
                        {problem_object.text}
                    </p>
                </span>
            </div>
        </div>
    )
}