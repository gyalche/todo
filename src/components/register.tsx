'use client';
import { MyButton } from '@/UI/button';
import InputComponent from '@/UI/inputComponent';
import useCustomFormik from '@/hooks/formik';
import { registerValidation } from '@/validations/authSchema';
import { Form, FormikProvider } from 'formik';
import React from 'react';
import { connectDB } from '../../utils/db';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { register } from '../../utils/(api)';
interface Props {}

export const RegisterComponent = (props: Props) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const router = useRouter();
  const handleRegisterSubmit = async (data: any) => {
    try {
      await connectDB();
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      console.log('res', res);
      if (!res.ok) {
        toast.error(responseData?.message);
        throw new Error(responseData.message || 'Something went wrong');
      }
      toast.success(responseData?.message);
      router.replace('/');
      return responseData;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const formik = useCustomFormik({
    initialValues,
    validationSchema: registerValidation,
    submitForm: handleRegisterSubmit,
  });

  const { errors, touched, handleSubmit, getFieldProps, values, handleChange } =
    formik;
  console.log('values', errors);

  return (
    <div className="border border-black-400 p-10">
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1>WELCOME TO REGISTER</h1>
            <InputComponent
              type="text"
              placeholder="enter username"
              value={values.username}
              name="username"
              error={errors.username}
              touched={errors.username}
              onChange={handleChange}
            />
            <InputComponent
              type="email"
              placeholder="enter email"
              error={errors.email}
              value={values.email}
              name="email"
              touched={errors.email}
              onChange={handleChange}
            />
            <InputComponent
              type="password"
              placeholder="enter password"
              error={errors.password}
              value={values.password}
              name="password"
              touched={errors.password}
              onChange={handleChange}
            />
            <MyButton variant="default" text="Register" className="w-full" />
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};
