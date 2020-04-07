import { useFormik } from 'formik';
import React, { FC } from 'react';
import SignUpModal, { SignUpFormValues } from 'ui/pages/signUp';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<SignUpFormValues> = Yup.object<
  SignUpFormValues
>({
  username: Yup.string()
    .min(3)
    .max(16)
    .required(),
  email: Yup.string()
    .max(50)
    .required(),
  name: Yup.string()
    .max(50)
    .required(),
  password: Yup.string()
    .max(50)
    .required(),
  passwordConfirm: Yup.string()
    .max(50)
    .required()
});

export interface Props {}

export const SignUpPageHOC: FC<Props> = ({}: Props) => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      username: '',
      passwordConfirm: ''
    },
    enableReinitialize: true,
    onSubmit: vals => {},
    validationSchema
  });
  return <SignUpModal formik={formik} />;
};
