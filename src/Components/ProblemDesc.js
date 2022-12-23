import React, {useEffect, useState} from "react";
import '../Styles/ProblemDesc.css'
import { getColorFromType } from "../Functions/functions";



export default function ProblemDesc(props) {
    //Will eventually indicate vote, null for none,
    //false for downvoted, true for upvoted
    const [vote, changeVote] = useState(null)
    return (
        <div className = 'problemDescContainer'>
            <div className = 'problemDescInnerContainer'>
                <span><h1>{props.problem_object.name}</h1></span>
            </div>
            <div className="problemDescInnerContainer">
                <span className="problemDescText" style={{justifyContent:'center'}}>
                    <h4 style = {{color: getColorFromType(props.problem_object.type), margin: 0}}>{props.problem_object.type}</h4>
                    <span className = 'descVotes'>
                        {props.problem_object.upvotes} 
                        <button 
                        style = {{color: (vote) ? '#FF5555': 'gray'}}
                        onClick = {() => {
                            //Eventually add database logic to up/down votes
                            if (vote) {
                                changeVote(null)
                                props.problem_object.upvotes -= 1
                            }
                            else {
                                if (vote === false) {
                                    props.problem_object.downvotes -= 1
                                }
                                changeVote(true)
                                props.problem_object.upvotes += 1
                            }
                        }}
                        >
                            {'\u25B2'}
                        </button> 
                        {props.problem_object.downvotes} 
                        <button 
                        style = {{color: (vote === false) ? '#5555FF': 'gray'}}
                        onClick = {() => {
                            if (vote === false) {
                                changeVote(null)
                                props.problem_object.downvotes -= 1
                            }
                            else {
                                if (vote === true) {
                                    props.problem_object.upvotes -= 1
                                }
                                changeVote(false)
                                props.problem_object.downvotes += 1
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
                        {props.problem_object.text}
                    </p>
                </span>
            </div>
        </div>
    )
}