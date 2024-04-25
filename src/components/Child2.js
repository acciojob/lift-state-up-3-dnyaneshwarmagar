import React from 'react'

const Child2 = ({setSelectedOption}) => {
    return (
        <div>
            <h1>Child Component 2</h1>
            <button onClick={()=>{setSelectedOption("Option 2")}}>Option 2</button>
        </div>
    )
}

export default Child2