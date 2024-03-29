//This page will contain the information for a single problem as well as
//the editor and submission button
import React, {useState, useEffect} from 'react'
import '../Styles/Problems.css'
import ProblemDesc from '../Components/ProblemDesc'
import Editor from '../Components/Editor'
import MiniNavBar from '../Components/MiniNavBar'

const problem_object = 
{
    name: 'Sample1',
    type: 'Argumentative',
    upvotes: 1,
    downvotes: 5,
    _id: 1,
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

export default function ProblemPage() {
    //current state for input on editor
    const [loading, setLoading] = useState(true)
    return (
        <div className='problemPageContainer'>
            <div className='problemPageInnerContainer'>
                <ProblemDesc problem_object = {problem_object}/>
            </div>
            <div  className='problemPageInnerContainer' style = {{flexDirection: 'column', height: '70vh'}}>
                <MiniNavBar/>
                <Editor problem_id = {problem_object._id} className = 'editorBox'/>
            </div>
        </div>
    )
    
}