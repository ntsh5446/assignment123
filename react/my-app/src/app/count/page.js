'use client'
import React,{useState} from 'react'

const page = () => {
let [number,setNumber]= useState(5)

const increment=()=>{
  if (number<10)
   setNumber(number + 1)
}

const decrement=()=>{
  if (number>0)
    setNumber(number - 1)
}

  return (
    <div>
        <button className='bg-teal-200 p-2 m-2' onClick={increment}>+</button>
        {number}
        <button className='bg-teal-200 p-2 m-2' onClick={decrement}>-</button>
    </div>
  )
}

export default page