
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [selectedOption,setSelectedOption] = useState("");
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child1  setSelectedOption={setSelectedOption}/>
        <Child2 setSelectedOption={setSelectedOption}/>
        <p>Selcted Option: {selectedOption}</p>
    </div>
  )
}

const Child1 = ({setSelectedOption}) => {
  return (
      <div>
          <h1>Child Component 1</h1>
          <button onClick={()=>{setSelectedOption("Option 1")}}>Option 1</button>
      </div>
  )
}

const Child2 = ({setSelectedOption}) => {
  return (
      <div>
          <h1>Child Component 2</h1>
          <button onClick={()=>{setSelectedOption("Option 2")}}>Option 2</button>
      </div>
  )
}

export default App
