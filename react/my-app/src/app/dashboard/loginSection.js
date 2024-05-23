'use client'
import React, {useState} from 'react'

const LoginSection = () => {
    const [userName, setUserName] = useState('')
  return (
    <div>
        <input placeholder='enter name' onChange={(e)=> setUserName(e.target.value)}/>
    </div>
  )
}

export default LoginSection