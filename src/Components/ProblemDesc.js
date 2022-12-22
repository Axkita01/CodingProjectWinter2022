import React, {useEffect} from "react";
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
    return (
        <div className = 'problemDescContainer'>
            <div className = 'problemDescInnerContainer'>
                <span><h1>{problem_object.name}</h1></span>
            </div>
            <div className="problemDescInnerContainer">
                <span className="problemDescText" style={{justifyContent:'center'}}>
                    <h4 style = {{color: getColorFromType(problem_object.type), margin: 0}}>{problem_object.type}</h4>
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