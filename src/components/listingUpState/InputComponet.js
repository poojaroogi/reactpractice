import React from 'react'

function InputComponet({text, setText}) {
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default InputComponet
