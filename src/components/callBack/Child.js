import React from 'react'

function Child({handleDataFromChild}) {

    function sendData(){
      handleDataFromChild("Good morning")
    }

  return (
    <div>
      <button onClick={sendData}>Send data to parent</button>
    </div>
  )
}

export default Child
