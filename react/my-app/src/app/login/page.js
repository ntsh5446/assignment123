"use client"
import React from 'react'
import {Input, Button} from "@nextui-org/react"
const login
=()=> {
  return ( 
    <div className="min-h-screen flex items-center  flex justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border">

       <div className="border border-purple-300 w-96 h-95 ">
        <div className='text-center'>
        <h1>Facebook</h1></div>
       <div className="  p-2 m-2">
      <Input type="email" placeholder="Enter your user or email" /> <br/></div>
      <div className="  p-2 m-2 ">
      <Input type="password"  placeholder="Enter your password" /><br/></div>
      <div className='text-center m-20'>
      <Button color="primary">login </Button></div>
    </div>
    </div>
  )
}
export default login