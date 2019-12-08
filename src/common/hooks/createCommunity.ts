import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Submit } from '../types';
import { alertRejectUnimplementedSubmit } from '../ctx-mock/alertUnimplementedSubmit';

export interface NewCommunityFormValues {
  name: string;
  summary: string;
  image: string;
}

export type ValidationSchema = Yup.ObjectSchema<NewCommunityFormValues>;
export const validationSchema: ValidationSchema = Yup.object<
  NewCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const createCommunitySrv = createContext<
  Submit<NewCommunityFormValues, void>
>(alertRejectUnimplementedSubmit('createCommunitySrv'));

export const initialValues: NewCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useCreateCommunityForm = () => {
  const onSubmit = useContext(createCommunitySrv);
  const formik = useFormik<NewCommunityFormValues>({
    initialValues,
    onSubmit,
    validationSchema
  });
  return formik;
};
