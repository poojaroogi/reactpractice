import React, { useEffect, useState } from "react";
import Practice from "./Practice"
import DisplayComponent from "./components/listingUpState/DisplayComponent";
import InputComponet from "./components/listingUpState/InputComponet";

function App() {
  const[text, setText] = useState("")

  return (
    <div>
      <InputComponet text={text} setText={setText}/>
      <DisplayComponent text={text}/>
    </div>
  );
}

export default App;