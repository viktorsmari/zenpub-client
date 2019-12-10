import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Service } from 'common/types';
import { alertRejectUnimplementedService } from 'common/util/ctx-mock/alertUnimplementedSubmit';

export interface NewCollectionFormValues {
  name: string;
  summary: string;
  image: string;
}

export type FormValuesSchema = Yup.ObjectSchema<NewCollectionFormValues>;
export const formValuesSchema: FormValuesSchema = Yup.object<
  NewCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const createCollectionSrv = createContext<
  Service<NewCollectionFormValues, { id: string }>
>(alertRejectUnimplementedService('createCollectionSrv CTX'));

export const formInitialValues: NewCollectionFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useCreateCollectionForm = () => {
  const createService = useContext(createCollectionSrv);
  const formik = useFormik<NewCollectionFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals => createService(vals),
    validationSchema: formValuesSchema
  });
  return formik;
};
