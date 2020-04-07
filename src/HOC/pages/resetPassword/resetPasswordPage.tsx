import { useFormik } from 'formik';
import React, { FC } from 'react';
import ResetPassword, { ResetPasswordFormValues } from 'ui/pages/resetPassword';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<ResetPasswordFormValues> = Yup.object<
  ResetPasswordFormValues
>({
  email: Yup.string()
    .max(50)
    .required()
});
export interface Props {}
export const LoginPageHOC: FC<Props> = ({}: Props) => {
  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      email: ''
    },
    enableReinitialize: true,
    onSubmit: vals => {},
    validationSchema
  });
  return <ResetPassword formik={formik} />;
};
