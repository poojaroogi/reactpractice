import React, { useEffect, useState } from "react";
import Child from "./components/callBack/Child";

function App() {
const[text, setText] = useState("")

function handleDataFromChild(data){
  setText(data)
}

  return (
    <div>
      <h4>Data from child component  : {text}</h4>
      <Child handleDataFromChild={handleDataFromChild}/>
    </div>
  );
}

export default App;