import React, { useMemo, FC, createContext, useContext } from 'react';
import { useFormik } from 'formik';
import * as GQL from './AddResource.generated';
import * as Yup from 'yup';
import {
  ResourceFormValues,
  UploadResource
} from 'ui/modules/AddResource/UploadResource';
import { accepted_license_types } from '../../../mn-constants';
import { CollectionResourcesDocument } from 'fe/resource/collection/useCollectionResources.generated';

export const validationSchema: Yup.ObjectSchema<ResourceFormValues> = Yup.object<
  ResourceFormValues
>({
  url: Yup.string().url(),
  name: Yup.string()
    .max(90)
    .required(),
  summary: Yup.string().max(1000),
  icon: Yup.string().url(),
  license: Yup.string()
});

export const resourceFormInitialValues: ResourceFormValues = {
  url: '',
  name: '',
  summary: '',
  icon: '',
  license: accepted_license_types[1],
  acceptedLicenses: accepted_license_types,
  resourceFiles: [],
  imageFiles: []
};

export interface Props {
  collectionId: string;
  done(): any;
}

export interface UploadResourceCtx {
  useAddResourceCreateResourceMutation: typeof GQL.useAddResourceCreateResourceMutation;
  useAddResourceUploadIconMutation: typeof GQL.useAddResourceUploadIconMutation;
  useAddResourceUploadMutation: typeof GQL.useAddResourceUploadMutation;
}
export const UploadResourceCtx = createContext<UploadResourceCtx>({
  useAddResourceCreateResourceMutation:
    GQL.useAddResourceCreateResourceMutation,
  useAddResourceUploadIconMutation: GQL.useAddResourceUploadIconMutation,
  useAddResourceUploadMutation: GQL.useAddResourceUploadMutation
});

export const UploadResourceHOC: FC<Props> = ({ done, collectionId }: Props) => {
  const {
    useAddResourceCreateResourceMutation,
    useAddResourceUploadIconMutation,
    useAddResourceUploadMutation
  } = useContext(UploadResourceCtx);
  const [create /* , result */] = useAddResourceCreateResourceMutation();
  const [mutateResource] = useAddResourceUploadMutation();
  const [mutateIcon] = useAddResourceUploadIconMutation();
  const initialValues = useMemo<ResourceFormValues>(
    () => resourceFormInitialValues,
    []
  );

  const formik = useFormik<ResourceFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      const fileToUpload = vals.resourceFiles?.map(file => {
        return file;
      })[0];
      const iconToUpload = vals.imageFiles?.map(file => {
        return file;
      })[0];

      return create({
        variables: {
          collectionId: collectionId,
          resource: {
            name: vals.name,
            summary: vals.summary,
            icon: vals.icon,
            url: vals.url,
            license: vals.license
          }
        },
        refetchQueries:
          fileToUpload || iconToUpload
            ? []
            : [
                {
                  query: CollectionResourcesDocument,
                  variables: { collectionId }
                }
              ]
      })
        .then(res => {
          const createdResourceId = res.data!.createResource!.id;

          if (fileToUpload) {
            return mutateResource({
              variables: {
                contextId: createdResourceId,
                upload: fileToUpload
              },
              refetchQueries: iconToUpload
                ? []
                : [
                    {
                      query: CollectionResourcesDocument,
                      variables: { collectionId }
                    }
                  ]
            }).then(() => createdResourceId);
          }
          return createdResourceId;
        })
        .then(createdResourceId => {
          if (iconToUpload) {
            return mutateIcon({
              variables: {
                contextId: createdResourceId,
                upload: iconToUpload
              },
              refetchQueries: [
                {
                  query: CollectionResourcesDocument,
                  variables: { collectionId }
                }
              ]
            });
          }
          return;
        })
        .catch(err => console.log(err))
        .then(done);
    },

    validationSchema,
    initialValues
  });
  return <UploadResource cancel={done} formik={formik} />;
};

export default UploadResourceHOC;
