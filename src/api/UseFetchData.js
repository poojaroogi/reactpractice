import React,{useEffect, useState} from "react";
function useFetchData(){
const[product, setProduct] = useState([])
const[loading, setLoading] = useState(true)
const[error, setError] = useState(null)


const fetchProduct = async () => {
  setLoading(true)
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/postss");
    if(!response.ok) throw new Error(`Error fetch product, ${response.status}`);
    const data = await response.json()
    setProduct(data)
    setError(null)
  }catch(error){
    setError(error.message)
  }finally{
    setLoading(false)
  }
}

useEffect(()=>{
  fetchProduct()
},[])

if(loading){
 return <p>...loading</p>
}

if(error){
 return <p>{error}</p>
}

    return [product, error, loading]
}
export default useFetchData