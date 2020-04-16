import React, { FC, useMemo } from 'react';
import CreateNewPassword, {
  Props,
  NewPasswordFormValues
} from 'ui/pages/createNewPassword';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6)
    .max(50)
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required')
});
const initialValues = { password: '', passwordConfirm: '' };

export interface CreateNewPasswordPageHOC {
  token: string;
}

export const CreateNewPasswordPageHOC: FC<CreateNewPasswordPageHOC> = ({
  token
}) => {
  const { resetPwd } = useAnon();
  const formik = useFormik<NewPasswordFormValues>({
    onSubmit: ({ password }) => resetPwd({ password, token }),
    initialValues,
    validationSchema
  });
  const props = useMemo<Props>(() => {
    return {
      formik
    };
  }, [formik]);

  return <CreateNewPassword {...props} />;
};
