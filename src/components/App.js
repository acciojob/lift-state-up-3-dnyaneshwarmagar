
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [selectedOption,setSelectedOption] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <Child1  setSelectedOption={setSelectedOption}/>
        <Child2 setSelectedOption={setSelectedOption}/>
        <p>Selcted Option: {selectedOption}</p>
    </div>
  )
}

export default App
