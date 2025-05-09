import React, { useState } from 'react'

function CounterApp() {
const[count, setCount] = useState(0)

function handleDecrement(){
    setCount(count-1)
}

function handleReset(){
    setCount(0)
}

function handleIncrement(){
    setCount(count+1)

}
    return (
        <div>

            <h3>count value is : {count}</h3>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>+</button>

       </div>
  )
}

export default CounterApp


 
