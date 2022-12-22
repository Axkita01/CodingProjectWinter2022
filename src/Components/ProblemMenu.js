import React, {useState, useEffect, useMemo} from 'react'
import '../Styles/ProblemMenu.css'
import { getColorFromType } from '../Functions/functions'



const problems = [
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
    },
    {
        name: 'Sample2',
        type: 'Analysis',
        upvotes: 1,
        downvotes: 5,
        questionNum: 2,
        text: 'sample writing prompt',
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
    },
    {
        name: 'Sample3',
        type: 'Creative',
        upvotes: 1,
        downvotes: 5,
        questionNum: 3,
        text: 'sample writing prompt',
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
    },
]


export default function ProblemMenu () {
    const placeHolder = [null, null, null, null, null, null, null, null, null, null, null]
    

    //The bottom will fetch problems list from backend in production,
    //for now uses pre-defined problem list from above
    const [problemsList, setProblemsList] = useState(placeHolder)
    const [filteredResults, setFilteredResults] = useState(placeHolder)
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('')



    //INPUT: filter after submission from search bar
    //OUTPUT: None, changes state and shows problems matching search query
    function filterResults(query) {
        let temp = filteredResults.slice()
        temp = temp.filter(
            (value) => {
                return (
                   value.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
                )
                }
        )

        setFilteredResults(temp)
    }
    
    //INPUT: value selected from dropdown
    //OUTPUT: Filters results from the dropdown menu
    function filterResultsFromDropDown(value) {
        if (value === 'all') {setFilteredResults(problemsList); return;}
        let temp = problemsList.slice()
        temp = temp.filter(
            (item) => {
                return item.type === value
            }
        )
        setFilteredResults(temp)
    }

    //Eventually useEffect will fetch data
    useEffect(
        //Will eventually remove setTimout, have it to simulate loading time
        () => {
            setTimeout(() => {
                setLoading(false);
                setFilteredResults(problems)
                setProblemsList(problems)
            }
            , 
            1000)
        },
        []
    )

    //format problems into menu items using Array.map(), memoize it using 
    //useMemo hook
    const mappedProblems = useMemo(() => {
        return (
            filteredResults.map((item, index) => {
                if (item === null) { return }
                return (
                <div 
                key = {item.name}
                className = {`problemsListItem`} style = {{
                    backgroundColor: index%2 == 0 ? 'white': 'gray'
                }}>

                    {/*make anchor lead to problem page on click, will pass question number as url parameter*/}
                    <a className = 'problemAnchor' href = {`/problem/:${item.questionNum}`}>
                        <span className = 'problemsListItemText'>
                            {`${item.questionNum}. ${item.name}`}
                        </span>
                    </a>
                    <span className = 'problemsListItemText' style = {{
                        color: getColorFromType(item.type)
                    }}>
                        {item.type}
                    </span>
                    <span className = 'votesOnMenu'>
                        {'\u25B2' + ' ' + item.upvotes.toString() + ' ' + '\u25BC' + ' ' + item.downvotes.toString()}
                    </span>
                </div>
                )
            })
        ) 
    }, [filteredResults])

    return (
        <div className='menuContainer'>
            <div className = 'searchContainer'>
                <span>
                    Search: {' '}
                    <input
                    className = 'textInputBox' 
                    type = 'text' value = {filter} 
                    onChange = {(e) => {
                        setFilter(e.target.value)
                    }}
                    />
                    <button onClick = {() => filterResults(filter)}>
                        Submit
                    </button>
                </span>
                <span style = {{marginRight: '1vw'}}>
                    <select 
                    className='menuDropdown'
                    name = 'Question Type' onChange = {(e) => {
                        filterResultsFromDropDown(e.target.value)
                    }}>
                        <option value = 'all'>Show All Problems</option>
                        <option value = 'Argumentative'>Argumentative</option>
                        <option value = 'Creative'>Creative</option>
                        <option value = 'Analysis'>Analysis</option>
                    </select>
                </span>
            </div>
            {
            !loading ? 
            mappedProblems:
            placeHolder.map(
                (item, index) => {
                    return (
                        <div 
                        key = {index}
                        className ='problemsListItem loadingMenu' style = {{
                        backgroundColor: index%2 == 0 ? 'lightgray': 'gray'
                        }}/>
                    )
                }
                )
            }
        </div>
    )
}