'use client'

import React, { useEffect, useState,useRef } from 'react'

const page = () => {

    const items = ['russaian', 'indian', 'japanese', 'nepali']
     
     
   
    const [randomIndex, setRandomIndex] = useState(null)
    const myInterval= useRef(null)
    const [isStop,setisStop]=useState(false)

    useEffect(() => {
        
        if(!isStop){
            myInterval.current= setInterval(() => {

                let randomItemIndex = Math.floor(Math.random() * items.length)
    
                setRandomIndex(randomItemIndex)
            }, 100)
        }
     
        return ()=>clearInterval(myInterval.current)

    }, [isStop])


    const stop=()=>{
         setisStop(!isStop)
    }

    return (


        <div className='m-2 gap-5 flex-col'>
            {randomIndex}
            <div className='flex justify-center items-center'>
                {items.map((item, id) => {
                    return <div style={{
                        backgroundColor: randomIndex === id ? "pink" : "green"
                    }} className="mt-12  p-2 shadow-lg m-2">
                        {item}
                    </div>
                })}
            </div>

            <div className='flex justify-center items-center mt-10'><button className='shadow-lg p-2' onClick={stop}>{isStop===true?"START":"STOP"}</button></div>

        </div>


    )
}

export default page