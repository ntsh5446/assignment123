'use client'
import React,{useState} from 'react'

const page = () => {
let {Number,setNumber}=useState(5)

const increment=()=>{
    setNumber(number+1)
}

const decrement=()=>{
    setNumber(number+1)
}

  return (
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default page