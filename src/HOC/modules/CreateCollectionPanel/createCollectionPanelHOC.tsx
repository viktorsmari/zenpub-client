import { useFormik } from 'formik';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import { useHistory } from 'react-router';
import {
  BasicCreateCollectionFormValues,
  CreateCollectionPanel
} from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import * as GQL from './createCollectionPanel.generated';

export const validationSchema: Yup.ObjectSchema<
  BasicCreateCollectionFormValues
> = Yup.object<BasicCreateCollectionFormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string().url()
});
export interface CreateCollectionPanelCtx {
  useCreateCollectionPanelCreateMutation: typeof GQL.useCreateCollectionPanelCreateMutation;
  useCreateCollectionPanelUploadIconMutation: typeof GQL.useCreateCollectionPanelUploadIconMutation;
}
export const CreateCollectionPanelCtx = createContext<CreateCollectionPanelCtx>(
  {
    useCreateCollectionPanelCreateMutation:
      GQL.useCreateCollectionPanelCreateMutation,
    useCreateCollectionPanelUploadIconMutation:
      GQL.useCreateCollectionPanelUploadIconMutation
  }
);

export const createCollectionFormInitialValues: BasicCreateCollectionFormValues = {
  name: '',
  summary: '',
  icon: '',
  files: []
};
export interface Props {
  communityId: string;
  done(): any;
}
export const CreateCollectionPanelHOC: SFC<Props> = ({
  communityId,
  done
}: Props) => {
  const {
    useCreateCollectionPanelCreateMutation,
    useCreateCollectionPanelUploadIconMutation
  } = useContext(CreateCollectionPanelCtx);

  const [create /* , result */] = useCreateCollectionPanelCreateMutation();
  const [uploadIcon] = useCreateCollectionPanelUploadIconMutation();
  const history = useHistory();
  const initialValues = useMemo<BasicCreateCollectionFormValues>(
    () => createCollectionFormInitialValues,
    []
  );
  const formik = useFormik<BasicCreateCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      const fileToUpload = vals!.files!.map(file => {
        return file;
      })[0];

      return create({
        variables: {
          communityId: communityId,
          collection: {
            preferredUsername: vals.name.split(' ').join('_'),
            name: vals.name,
            summary: vals.summary
          }
        }
      })
        .then(res => {
          const createdCollectionId = res.data!.createCollection!.id;
          if (fileToUpload) {
            uploadIcon({
              variables: {
                contextId: createdCollectionId,
                upload: fileToUpload
              }
            })
              .then(() => {
                history.push(`/collections/${createdCollectionId}`);
              })
              .catch(err => console.log(err));
          }
        })
        .then(done)
        .catch(err => console.log(err));
    },
    validationSchema,
    initialValues
  });
  return <CreateCollectionPanel cancel={done} formik={formik} />;
};
