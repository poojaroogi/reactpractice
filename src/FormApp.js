import React, {useState} from "react"

function FormApp(){
  const[firstName, setFirstName] = useState("")
  const[password, setPassword] = useState("")


  function handlefirst(e){
    setFirstName(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }


  function handleSubmit(e){
   e.preventDefault()
   console.log("form sunmitted: ", {firstName, password})
  }


  return(
    <div>

      <form onSubmit={handleSubmit}>
         <div>

          <label htmlFor="name">Name: </label>
          <input type="text" placeholder="Enter your Name" id="name" value={firstName} onChange={handlefirst}/>

        </div>
        

        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" placeholder="Enter your pasword" id="password" value={password} onChange={handlePassword}/>
        </div>

        <button type="submit">Submit</button>

      </form>
        

    </div>
  );
}
export default FormApp;