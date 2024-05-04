"use client"
import React from 'react'
import {Input, Button, DateInput } from "@nextui-org/react";
import {CalendarDate} from "@internationalized/date";
import Link from 'next/link';
const Register
=()=> {
  return (
    <div className="min-h-screen flex items-center flex justify-center bg-gray-500 
    py-12 px-4 sm:px-6 lg:px-8 text box-border">

       <div className="border border-purple-300 w-96 h-95 ">
        <div className='text-center text-5xl p-4  '>
        <h1>Sign up</h1></div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-3 p-2 m-1">
      <Input type="First Name" placeholder='First Name' />
      <Input type="Last Name"  placeholder="Last Name" /></div>
      <div className="m2 p-2">
      <Input type="email" placeholder="Enter your user or email" /> <br/>
      <Input type="password"  placeholder="Enter your password" /><br/></div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-3 p-2 m-1">
      <DateInput label={"Birth date"} placeholderValue={new CalendarDate(1995, 11, 6)} className="max-w-sm" />
      <div className='text-center p-6'>
      <Button color="primary"><Link href="profile">Sign Up</Link></Button></div>
    </div>
</div>
</div>
  )
}

export default Register