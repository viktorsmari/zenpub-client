import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Service } from 'common/types';
import { alertRejectUnimplementedService } from 'common/util/ctx-mock/alertUnimplementedSubmit';

export interface NewCommunityFormValues {
  name: string;
  summary: string;
  image: string;
}

export type FormValuesSchema = Yup.ObjectSchema<NewCommunityFormValues>;
export const formValuesSchema: FormValuesSchema = Yup.object<
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
  Service<NewCommunityFormValues, { id: string }>
>(alertRejectUnimplementedService('createCommunitySrv CTX'));

export const formInitialValues: NewCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useCreateCommunityForm = () => {
  const createService = useContext(createCommunitySrv);
  const formik = useFormik<NewCommunityFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals => createService(vals),
    validationSchema: formValuesSchema
  });
  return formik;
};
