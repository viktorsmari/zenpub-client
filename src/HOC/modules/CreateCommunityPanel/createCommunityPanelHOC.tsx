import { useFormik } from 'formik';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import { useHistory } from 'react-router';
import {
  CreateCommunityFormValues,
  CreateCommunityPanel
} from 'ui/modules/CreateCommunityPanel';
import * as Yup from 'yup';
import * as GQL from './createCommunityPanel.generated';
import { GetSidebarQueryDocument } from 'graphql/getSidebar.generated';

export const validationSchema: Yup.ObjectSchema<CreateCommunityFormValues> = Yup.object<
  CreateCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string().url()
});
export interface CreateCommunityPanelCtx {
  useCreateCommunityPanelCreateMutation: typeof GQL.useCreateCommunityPanelCreateMutation;
  useCreateCommunityPanelUploadImageMutation: typeof GQL.useCreateCommunityPanelUploadImageMutation;
}
export const CreateCommunityPanelCtx = createContext<CreateCommunityPanelCtx>({
  useCreateCommunityPanelCreateMutation:
    GQL.useCreateCommunityPanelCreateMutation,
  useCreateCommunityPanelUploadImageMutation:
    GQL.useCreateCommunityPanelUploadImageMutation
});
export const createCommunityFormInitialValues: CreateCommunityFormValues = {
  name: '',
  summary: '',
  icon: '',
  files: []
};
export interface Props {
  done(): any;
}
export const CreateCommunityPanelHOC: SFC<Props> = ({ done }: Props) => {
  const {
    useCreateCommunityPanelCreateMutation,
    useCreateCommunityPanelUploadImageMutation
  } = useContext(CreateCommunityPanelCtx);
  const [create /* , result */] = useCreateCommunityPanelCreateMutation();
  const [mutateImage] = useCreateCommunityPanelUploadImageMutation();
  const history = useHistory();
  const initialValues = useMemo<CreateCommunityFormValues>(
    () => createCommunityFormInitialValues,
    []
  );
  const formik = useFormik<CreateCommunityFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      const fileToUpload = vals!.files!.map(file => {
        return file;
      })[0];
      return create({
        variables: {
          community: {
            preferredUsername: vals.name.split(' ').join('_'),
            name: vals.name,
            summary: vals.summary
          }
        },
        refetchQueries: fileToUpload ? [] : [{ query: GetSidebarQueryDocument }]
      })
        .then(res => {
          const createdCommunityId = res.data!.createCommunity!.id;

          if (fileToUpload) {
            mutateImage({
              variables: {
                contextId: createdCommunityId,
                upload: fileToUpload
              },
              refetchQueries: fileToUpload
                ? [{ query: GetSidebarQueryDocument }]
                : []
            }).then(() => createdCommunityId);
          }
          return createdCommunityId;
        })
        .then(createdCommunityId => {
          history.push(`/communities/${createdCommunityId}`);
        })
        .catch(err => console.log(err));
    },
    validationSchema,
    initialValues
  });
  return <CreateCommunityPanel cancel={done} formik={formik} />;
};
