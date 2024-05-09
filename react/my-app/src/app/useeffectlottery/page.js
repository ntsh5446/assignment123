'use client'
import  React, { useState,useEffect} from 'react'
import { Button } from '@nextui-org/react'
const page = () => {
    const lotteryItems=[
        "laptop",
        "phone",
        "ipad",
        "charger",
        "Earphone"
    ]
const [lotteryId, setlotteryId]= useState(null)
useEffect(() =>{
    setInterval(() => {
        const randomNum= Math.ceil(Math.random()*10)
        setlotteryId(randomNum)
    }, 100);
},[])
  return (
    <div>
    {lotteryId}
    {
    
        lotteryItems.map((Items,id)=>{
        
        return <div style={{backgroundColor: id===lotteryId ? 'red' : null}} className='w-32 shadow-lg m-2 p-2'>{Items}</div>
    })
}

  <Button>Spin</Button>
        </div>
  )
}
export default page