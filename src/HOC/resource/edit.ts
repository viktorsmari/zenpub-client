import { useFormik } from 'formik';
import { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { Service } from 'common/types';
import { alertRejectUnimplementedService } from 'common/util/ctx-mock/alertUnimplementedSubmit';
import { EditResourceFormValues } from 'ui/modules/EditResourceModal';

export type FormValuesSchema = Yup.ObjectSchema<EditResourceFormValues>;
export const formValuesSchema: FormValuesSchema = Yup.object<
  EditResourceFormValues
>({
  url: Yup.string().required(),
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const editResourceSrv = createContext<
  Service<EditResourceFormValues, { id: string }>
>(alertRejectUnimplementedService('editResourceSrv CTX'));

export const formInitialValues: EditResourceFormValues = {
  url: '',
  name: '',
  summary: '',
  image: ''
};

export const useEditResourceForm = () => {
  const createService = useContext(editResourceSrv);
  const formik = useFormik<EditResourceFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals => createService(vals),
    validationSchema: formValuesSchema
  });
  return formik;
};
