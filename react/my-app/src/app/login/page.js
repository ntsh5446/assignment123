'use client'
import React from 'react';
import { Input, Button } from "@nextui-org/react";
import Link from 'next/link';
import NavBar from '@/component/NavBar/page';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const login = () => {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center flex justify-right bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 text box-border">
          <div className="border border-purple-300 w-96 h-95 ">
            <div className='text-center text-5xl p-4 font-serif '>
              <h1>Facebook</h1>
            </div>
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
            {formik.errors.email ? <div className='text-blue-700'>{formik.errors.email}</div> : null}
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
            <div className='text-center  decoration-auto'>
              <Button color="primary">login </Button>
            </div>
            <div className='text-center p-6'>
              <Button color="primary">  <Link href="register">Create an account</Link></Button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{login()}</>;
};

export default Login;
