import React from 'react';
import { useFormik } from 'formik';
import { useCreateCollectionMutationMutation } from 'graphql/createCollection.generated';
import { useUploadIconMutation } from 'graphql/uploadIcon.generated';
import { useMemo, SFC } from 'react';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import {
  BasicCreateCollectionFormValues,
  CreateCollectionPanel
} from 'ui/modules/CreateCollectionPanel';

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
  const [create /* , result */] = useCreateCollectionMutationMutation();
  const [mutateIcon] = useUploadIconMutation();
  const history = useHistory();
  const initialValues = useMemo<BasicCreateCollectionFormValues>(
    () => createCollectionFormInitialValues,
    []
  );
  const formik = useFormik<BasicCreateCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      create({
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
          const fileToUpload = vals!.files!.map(file => {
            return file;
          });
          if (fileToUpload[0]) {
            mutateIcon({
              variables: {
                contextId: createdCollectionId,
                upload: fileToUpload[0]
              }
            })
              .then(() => {
                history.push(`/collections/${createdCollectionId}`);
              })
              .catch(err => console.log(err));
          }
        })
        .then(done)
        .catch(err => console.log(err)),
    validationSchema,
    initialValues
  });
  return <CreateCollectionPanel cancel={done} formik={formik} />;
};
