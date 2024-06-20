import React from 'react'
import {useEffect,useState} from "react"

export default function Timer() {
  const [count,setCount] = useState(0)
  const [stop,SetStop] = useState(false)
   useEffect(() => {
    let intervel
    if(stop){
        intervel = setInterval(()=>{
          setCount(count+1)
        },1000)
    }
    return () => clearInterval(intervel);
   },[count,stop])
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>SetStop(!stop)}>{stop?"Start":"stop"}</button>
    </div>
  )
}
