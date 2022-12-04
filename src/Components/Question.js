import React,{useState} from 'react'

function Question() {
    const [img, setImg] = useState("");
    const setimage=()=>{
     fetch('https://dog.ceo/api/breeds/image/random')
     .then((res)=>res.json())
     .then((data)=>{
        setImg(data.message);
     })
    }
  return (
    <div>
    <img src={img} alt="image"/>
     <button onClick={setimage}>click here</button>
      
    </div>
  )
}

export default Question
