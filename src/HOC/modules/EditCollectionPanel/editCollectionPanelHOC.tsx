import React, { useMemo, FC, createContext, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as GQL from './CollectionEdit.generated';
import {
  EditCollectionFormValues,
  EditCollectionPanel
} from 'ui/modules/EditCollectionPanel';
import { Collection } from 'graphql/types.generated';

export const validationSchema: Yup.ObjectSchema<EditCollectionFormValues> = Yup.object<
  EditCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string() //.url()
});

export const editCollectionFormInitialValues: EditCollectionFormValues = {
  name: '',
  summary: '',
  icon: '',
  files: []
};

export interface EditCollectionPanelCtx {
  useEditCollectionPanelUploadIconMutation: typeof GQL.useEditCollectionPanelUploadIconMutation;
  useEditCollectionPanelQuery: typeof GQL.useEditCollectionPanelQuery;
  useEditCollectionPanelUpdateCollectionMutation: typeof GQL.useEditCollectionPanelUpdateCollectionMutation;
}
export const EditCollectionPanelCtx = createContext<EditCollectionPanelCtx>({
  useEditCollectionPanelUploadIconMutation:
    GQL.useEditCollectionPanelUploadIconMutation,
  useEditCollectionPanelQuery: GQL.useEditCollectionPanelQuery,
  useEditCollectionPanelUpdateCollectionMutation:
    GQL.useEditCollectionPanelUpdateCollectionMutation
});

export interface Props {
  collectionId: Collection['id'];
  done(): any;
}
export const EditCollectionPanelHOC: FC<Props> = ({
  done,
  collectionId
}: Props) => {
  const {
    useEditCollectionPanelQuery,
    useEditCollectionPanelUpdateCollectionMutation,
    useEditCollectionPanelUploadIconMutation
  } = useContext(EditCollectionPanelCtx);
  const collection = useEditCollectionPanelQuery({
    variables: { collectionId }
  });
  const [
    update /* , result */
  ] = useEditCollectionPanelUpdateCollectionMutation();
  const [mutateIcon] = useEditCollectionPanelUploadIconMutation();
  const initialValues = useMemo<EditCollectionFormValues>(
    () =>
      collection.data && collection.data.collection
        ? {
            icon: collection.data.collection.icon || '',
            name: collection.data.collection.name,
            summary: collection.data.collection.summary || '',
            files: []
          }
        : editCollectionFormInitialValues,
    [collection]
  );

  const updateCollection = ({
    icon,
    name,
    summary
  }: Pick<EditCollectionFormValues, 'icon' | 'name' | 'summary'>) =>
    update({
      variables: {
        collection: {
          icon,
          name,
          summary,
          preferredUsername: name
        },
        collectionId
      }
    });
  const uploadIcon = file =>
    mutateIcon({
      variables: { contextId: collectionId, upload: file }
    })
      .then(res => {
        return (
          (res && res.data && res.data.uploadIcon && res.data.uploadIcon.url) ||
          ''
        );
      })
      .catch(err => console.log(err));

  const formik = useFormik<EditCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      const file = (vals.files || []).map(file => {
        return file;
      })[0];

      if (file) {
        return uploadIcon(file)
          .then(iconUrl =>
            updateCollection({
              ...vals,
              icon: iconUrl || ''
            })
          )
          .then(done)
          .catch(err => console.log(err));
      } else {
        return updateCollection(vals)
          .then(done)
          .catch(err => console.log(err));
      }
    },
    validationSchema,
    initialValues
  });
  return <EditCollectionPanel cancel={done} formik={formik} />;
};
