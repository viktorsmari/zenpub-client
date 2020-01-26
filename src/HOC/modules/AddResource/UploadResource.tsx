import React from 'react';
import { useFormik } from 'formik';
import { useMemo, SFC } from 'react';
import { useCreateResourceMutationMutation } from '../../../graphql/createResource.generated';
import { useUploadImageMutation } from 'graphql/uploadImage.generated';
import { useUploadResourceMutation } from 'graphql/uploadResource.generated';
import * as Yup from 'yup';
import {
  ResourceFormValues,
  UploadResource
} from 'ui/modules/AddResource/UploadResource';
// import { Resource } from 'graphql/types.generated';

export const validationSchema: Yup.ObjectSchema<
  ResourceFormValues
> = Yup.object<ResourceFormValues>({
  url: Yup.string().url(),
  name: Yup.string()
    .max(90)
    .required(),
  summary: Yup.string().max(1000),
  image: Yup.string().url()
});

export const resourceFormInitialValues: ResourceFormValues = {
  url: '',
  name: '',
  summary: '',
  image: '',
  resourceFiles: [],
  imageFiles: []
};

export interface Props {
  collectionId: string;
  done(): any;
}

export const UploadResourceHOC: SFC<Props> = ({
  done,
  collectionId
}: Props) => {
  const [create /* , result */] = useCreateResourceMutationMutation();
  const [mutateResource] = useUploadResourceMutation();
  const [mutateImage] = useUploadImageMutation();
  const initialValues = useMemo<ResourceFormValues>(
    () => resourceFormInitialValues,
    []
  );

  const formik = useFormik<ResourceFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      create({
        variables: {
          collectionId: collectionId,
          resource: {
            name: vals.name,
            summary: vals.summary,
            icon: vals.image,
            url: vals.url
          }
        }
      })
        .then(res => {
          const createdResourceId = res.data!.createResource!.id;
          const fileToUpload = vals!.resourceFiles!.map(file => {
            return file;
          });
          const imageToUpload = vals!.imageFiles!.map(file => {
            return file;
          });
          if (fileToUpload[0]) {
            mutateResource({
              variables: {
                contextId: createdResourceId,
                upload: fileToUpload[0]
              }
            })
              .then(() => {
                if (imageToUpload[0]) {
                  mutateImage({
                    variables: {
                      contextId: createdResourceId,
                      upload: fileToUpload[0]
                    }
                  });
                }
              })
              .catch(err => console.log(err));
          }
        })

        .then(done),
    validationSchema,
    initialValues
  });
  return <UploadResource cancel={done} formik={formik} />;
};

export default UploadResourceHOC;
