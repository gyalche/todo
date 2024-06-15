'use client';
import { MyButton } from '@/UI/button';
import InputComponent from '@/UI/inputComponent';
import useCustomFormik from '@/hooks/formik';
import { cn } from '@/lib/utils';
import { registerValidation } from '@/validations/authSchema';
import { Form, FormikProvider } from 'formik';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { connectDB } from '../../utils/db';
import { useRouter } from 'next/navigation';
import { getSession } from '../../utils/getSession';

export default function Home() {
  const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleRegisterSubmit = async (data: any) => {
    try {
      await connectDB();
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (!res.ok) {
        toast.error(responseData?.message);
        throw new Error(responseData.message || 'Something went wrong');
      }
      toast.success(responseData?.message);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('user', JSON.stringify(responseData?.data));
      }
      router.replace('/dashboard');
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
  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen min-w-screen',
      )}
    >
      <div className="p-10 border border-black-200 space-y-10 min-h-fit">
        <h1 className="text-xl ">WELCOME TO LOGIN</h1>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="centerFlex">
              <InputComponent
                type="email"
                placeholder="enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <InputComponent
                type="password"
                placeholder="enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full items-center justify-start mt-5">
              <MyButton variant="default" text="Login" className="w-full" />
            </div>
          </Form>
        </FormikProvider>

        <div>
          <Link
            href="/register"
            className="w-full flex items-center justify-start text-sm hover:text-violet-600"
          >
            click to register
          </Link>
        </div>
      </div>
    </div>
  );
}
