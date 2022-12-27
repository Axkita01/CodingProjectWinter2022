import React, {useEffect} from "react";
import '../Styles/MiniNavBar.css'
import { useParams } from "react-router";


export default function MiniNavBar() {
    const questionNum = useParams().id
    
    

    return (
        <div className="mini-nav-bar">
            <div className="mini-nav-bar__item">
                <a href =  {`/problem/submission/${questionNum}`}>Submissions</a>
            </div>
            <div className="mini-nav-bar__item">
                <a href =  {`/problem/report/${questionNum}`}>Report A Problem</a>
            </div>
            {/*in below button, onCLick will eventually be database submission function
            have response return id of submission and redirect to submission page
            */}
            <div className="mini-nav-bar__item">
                <a onClick = {() => alert('submitted')} href = {`/problem/submission/${questionNum}`}>
                    Submit
                </a>
            </div>
        </div>
    );
}