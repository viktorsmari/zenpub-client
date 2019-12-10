import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Service } from 'common/types';
import { alertRejectUnimplementedService } from 'common/util/ctx-mock/alertUnimplementedSubmit';

export interface EditCollectionFormValues {
  name: string;
  summary: string;
  image: string;
}

export type FormValuesSchema = Yup.ObjectSchema<EditCollectionFormValues>;
export const formValuesSchema: FormValuesSchema = Yup.object<
  EditCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const editCollectionSrv = createContext<
  Service<EditCollectionFormValues, { id: string }>
>(alertRejectUnimplementedService('editCollectionSrv CTX'));

export const formInitialValues: EditCollectionFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useEditCollectionForm = () => {
  const createService = useContext(editCollectionSrv);
  const formik = useFormik<EditCollectionFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals => createService(vals),
    validationSchema: formValuesSchema
  });
  return formik;
};
