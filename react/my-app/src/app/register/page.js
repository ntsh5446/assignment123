'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import Link from 'next/link';
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .length(8, "must be eight character")
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
});
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="min-h-screen flex items-center flex justify-right bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border">

    <div className='bg-gray-500 flex justify-center p-10 m-10'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="FirstName">First Name</label>
        <Input
          isClearable
          name='firstName'
          type="Input Firstname"
          variant="bordered"
          placeholder="Enter your Firstname"
          defaultValue=" "
          onClear={() => {
            formik.setFieldValue("firstName", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div className='text-red-700'>{formik.errors.firstName}</div> : null}
        <label htmlFor="Lastname">Last Name</label>
        <Input
          isClearable
          name='lastName'
          type="text"
          variant="bordered"
          placeholder="Enter your Lastname"
          defaultValue=" "

          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onClear={() => {
            formik.setFieldValue("lastName", '')
          }}
        />
        {/* {formik.errors.lastName} */}

        {formik.errors.lastName ? <div className='text-red-700'>{formik.errors.lastName}</div> : null}
        <label htmlFor="Email">Email</label>
        <Input
          isClearable
          type="email"
          name="email"
          variant="bordered"
          placeholder="Enter your Email"
          defaultValue="abc@gmail.com"
          onClear={() => {
            formik.setFieldValue("email", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {/* {formik.errors.email} */}
        {formik.errors.email ? <div className='text-red-700'>{formik.errors.email}</div> : null}

        <label htmlFor="Password">Password</label>
        <Input
          isClearable
          type="password"
          name="password"
          variant="bordered"
          placeholder="Enter your password"
          defaultValue=""
          onClear={() => {
            formik.setFieldValue("password", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
  
        {formik.errors.password ? <div className='text-red-700'>{formik.errors.password}</div> : null}
        <div className='p-2 m-2'>
          <Button color="primary"><Link href="Submit">Submit</Link></Button> </div>

      </form>
    </div>
    </div>
  );
};

export default SignupForm