import React from 'react';
import { useFormik } from 'formik';
import { useCreateCommunityMutationMutation } from 'graphql/createCommunity.generated';
import { useUploadImageMutation } from 'graphql/uploadImage.generated';
import { useMemo, SFC } from 'react';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import {
  BasicCreateCommunityFormValues,
  CreateCommunityPanel
} from 'ui/modules/CreateCommunityPanel';

export const validationSchema: Yup.ObjectSchema<
  BasicCreateCommunityFormValues
> = Yup.object<BasicCreateCommunityFormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const createCommunityFormInitialValues: BasicCreateCommunityFormValues = {
  name: '',
  summary: '',
  image: '',
  files: []
};
export interface Props {
  done(): any;
}
export const CreateCommunityPanelHOC: SFC<Props> = ({ done }: Props) => {
  // const community = useGetCommunityForEditQuery({ variables: { communityId } });
  const [create /* , result */] = useCreateCommunityMutationMutation();
  const [mutateImage] = useUploadImageMutation();
  const history = useHistory();
  const initialValues = useMemo<BasicCreateCommunityFormValues>(
    () => createCommunityFormInitialValues,
    []
  );
  const formik = useFormik<BasicCreateCommunityFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      create({
        variables: {
          community: {
            preferredUsername: vals.name.split(' ').join('_'),
            name: vals.name,
            summary: vals.summary
          }
        }
      })
        .then(res => {
          const createdCommunityId = res.data!.createCommunity!.id;
          const fileToUpload = vals!.files!.map(file => {
            return file;
          });
          if (fileToUpload[0]) {
            mutateImage({
              variables: {
                contextId: createdCommunityId,
                upload: fileToUpload[0]
              }
            })
              .then(() => {
                history.push(`/communities/${createdCommunityId}`);
              })
              .catch(err => console.log(err));
          }
        })
        .then(done)
        .catch(err => console.log(err)),
    validationSchema,
    initialValues
  });
  return <CreateCommunityPanel cancel={done} formik={formik} />;
};
