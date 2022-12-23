import React, {useState} from "react";
import '../Styles/Editor.css'

export default function Editor (props) {
    const [input, changeInput] = useState('')
    return (
        <div
        className = 'editorContain'
        >
            <textarea
            style = {{resize: 'none'}} 
            className="editor"
            type = 'text' value = {input} onChange = {
                (e) => changeInput(e.target.value) 
            }/>
        </div>
    )
}