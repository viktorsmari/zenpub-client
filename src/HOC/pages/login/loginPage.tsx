import { useFormik } from 'formik';
import React, { FC } from 'react';
import Login, { LoginFormValues } from 'ui/pages/login';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object<
  LoginFormValues
>({
  email: Yup.string()
    .max(50)
    .required(),
  password: Yup.string()
    .max(50)
    .required()
});
export interface Props {}
export const LoginPageHOC: FC<Props> = ({}: Props) => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    onSubmit: vals => {},
    validationSchema
  });
  return <Login formik={formik} />;
};
