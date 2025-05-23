import React, { useEffect, useState }  from 'react';
import {getPost, deletePost} from "./PostApi"

function Two() {
  const[postData, setPostData] = useState([])

  const fetchProduct = async () => {
   const response = await getPost()
   setPostData(response.data)
  }

  useEffect(()=>{
    fetchProduct()
  },[])

  const cartDiv = {
    height : "300px",
    width : "300px",
    border : "2px solid grey",
    padding : "15px",
    listStyle : "none",
    overflow : "none",
    margin : "10px",
    textAlign:"center"
  }

  const mainCart={
    display :'flex',
    justifyContent : "space-evenly",
    alignItems : "center",
    flexWrap : "wrap",
  }

  const titleStyle={
    fontSize : "14px",
    height : "60px", 
    padding : "10px"
  }

  const titleDiv={
    height : "40px",
    padding : "10px",
    fontSize : "22px"
  }


  const handleDelete = async (id) => {
  const response = await deletePost(id)
  if(response.status === 200){
   const deletedPost =  postData.filter((d) => d.id !== id)
   setPostData(deletedPost)
  }
  }


  return (
    <div>
      <ul style={mainCart}>
        {
          postData.map((val)=>{
            const{id, title, body} = val
            return(
              <li key={id} style={cartDiv}>
                <p>{id}</p>
                <p style={titleDiv}>{title.slice(0,50)}...</p>
                <p style={titleStyle}>{body.slice(0, 100)}...</p>
                <button style={{backgroundColor:"green"}}>Edit</button>{" "}
                <button style={{backgroundColor:"red"}} onClick={() => handleDelete(id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
        
    </div>
  );
}

export default Two;
