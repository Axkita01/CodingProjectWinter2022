import React from "react";
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
                <a href =  {`/problem/Discussion/${questionNum}`}>Discussion</a>
            </div>
            <div className="mini-nav-bar__item">
                <a href =  {`/problem/report/${questionNum}`}>Report A Problem</a>
            </div>
        </div>
    );
}