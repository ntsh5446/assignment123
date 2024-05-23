'use client'
import { Button } from '@nextui-org/react'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const MainTrafficComponent =()=>{
    const value = useSelector(state=> state.counter.value)

    return (
        <div>
          {value}
            <Button >Pay</Button>
        </div>
    )
}

export default MainTrafficComponent