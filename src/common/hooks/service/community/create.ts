import { FormikHook } from 'common/types';
import { useFormik } from 'formik';
import {
  CreateCommunityMutationMutationHookResult,
  useCreateCommunityMutationMutation
} from 'graphql/generated/createCommunity.generated';
import * as Yup from 'yup';

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

export const formInitialValues: NewCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useCreateCommunityForm = (): [
  FormikHook<NewCommunityFormValues>,
  CreateCommunityMutationMutationHookResult[1],
  CreateCommunityMutationMutationHookResult[0]
] => {
  const [create, result] = useCreateCommunityMutationMutation();
  const formik = useFormik<NewCommunityFormValues>({
    initialValues: formInitialValues,
    onSubmit: vals =>
      create({ variables: { community: { ...vals, preferredUsername: '' } } }),
    validationSchema: formValuesSchema
  });
  return [formik, result, create];
};
