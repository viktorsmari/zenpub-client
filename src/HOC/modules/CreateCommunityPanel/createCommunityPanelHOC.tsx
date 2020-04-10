import { useCreateCommunity } from 'fe/community/create/useCreateCommunity';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import {
  CreateCommunityFormValues,
  CreateCommunityPanel
} from 'ui/modules/CreateCommunityPanel';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<CreateCommunityFormValues> = Yup.object<
  CreateCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.mixed<File | string>()
});
export interface Props {
  done(): any;
}
export const CreateCommunityPanelHOC: FC<Props> = ({ done }: Props) => {
  const history = useHistory();
  const { create } = useCreateCommunity();
  const formik = useFormik<CreateCommunityFormValues>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: '',
      summary: '',
      icon: ''
    },
    onSubmit: vals => {
      return create(
        {
          preferredUsername: vals.name.split(' ').join('_'),
          name: vals.name,
          summary: vals.summary
        },
        vals.icon
      ).then(createdCommunityId => {
        createdCommunityId &&
          history.push(`/communities/${createdCommunityId}`);
      });
    }
  });
  return <CreateCommunityPanel cancel={done} formik={formik} />;
};
