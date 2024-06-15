import React from 'react';
import { useFormik } from 'formik';
type Props = {};

const useCustomFormik = ({
  initialValues,
  validationSchema,
  submitForm,
}: any) => {
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log('this is values', values);
      await submitForm(values);
    },
  });
  return formik;
};

export default useCustomFormik;
