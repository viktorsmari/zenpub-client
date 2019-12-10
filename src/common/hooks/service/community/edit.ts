import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Service } from 'common/types';
import { alertRejectUnimplementedService } from 'common/util/ctx-mock/alertUnimplementedSubmit';

export interface EditCommunityFormValues {
  name: string;
  summary: string;
  image: string;
}

export type FormValuesSchema = Yup.ObjectSchema<EditCommunityFormValues>;
export const formValuesSchema: FormValuesSchema = Yup.object<
  EditCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const editCommunitySrv = createContext<
  Service<EditCommunityFormValues, { id: string }>
>(alertRejectUnimplementedService('editCommunitySrv CTX'));

export const formInitialValues: EditCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useEditCommunityForm = () => {
  const createService = useContext(editCommunitySrv);
  const formik = useFormik<EditCommunityFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals => createService(vals),
    validationSchema: formValuesSchema
  });
  return formik;
};
