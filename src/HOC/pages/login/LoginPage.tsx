import { useFormik } from 'formik';
import React, { FC } from 'react';
import Login, { LoginFormValues } from 'ui/pages/login';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';

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
export const LoginPageHOC: FC<Props> = () => {
  const { login } = useAnon();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    onSubmit: ({ email, password }) => login(email, password),
    validationSchema
  });
  return <Login formik={formik} />;
};
