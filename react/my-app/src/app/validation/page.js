'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";


const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
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
      fullName: '',
      lastName: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='	
    bg-gray-500 flex justify-center p-10 m-10'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">fullName Name</label>
        <Input
          isClearable
          name='fullName'
          type="Input fullname"
          variant="bordered"
          placeholder="Enter your fullname"
          defaultValue=" "
          onClear={() => {
            formik.setFieldValue("fullName", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.fullName}
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

        <label htmlFor="Address">Address</label>
        <Input
          isClearable
          type="text"
          name="Address"
          variant="bordered"
          placeholder="Enter your Address"
          defaultValue=""
          onClear={() => {
            formik.setFieldValue("address", '')
          }}
          className="max-w-xs"
          onChange={formik.handleChange}
          value={formik.values.Address}
        />
        {/* {formik.errors.Address} */}
        {formik.errors.Address ? <div className='text-red-700'>{formik.errors.Address}</div> : null}
        <div className='p-2 m-2'>
          <Button color="primary" type='submit'>Submit</Button> </div>

      </form>
    </div>
  );
};

export default SignupForm