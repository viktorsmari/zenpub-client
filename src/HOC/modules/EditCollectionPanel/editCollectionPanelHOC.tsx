import React, { useMemo, SFC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useCollectionEditPanelQuery,
  useUpdateCollectionMutation
} from './CollectionEdit.generated';
import { EditCollectionFormValues } from 'ui/modules/EditCollectionPanel';
import { Collection } from 'graphql/types.generated';
import { EditCollectionPanel } from 'ui/modules/EditCollectionPanel';

export const validationSchema: Yup.ObjectSchema<
  EditCollectionFormValues
> = Yup.object<EditCollectionFormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string().url()
});

export const editCollectionFormInitialValues: EditCollectionFormValues = {
  name: '',
  summary: '',
  icon: ''
};
export interface Props {
  collectionId: Collection['id'];
  done(): any;
}
export const EditCollectionPanelHOC: SFC<Props> = ({
  done,
  collectionId
}: Props) => {
  const collectionQ = useCollectionEditPanelQuery({
    variables: { collectionId }
  });
  const [update /* , result */] = useUpdateCollectionMutation();
  const initialValues = useMemo<EditCollectionFormValues>(
    () =>
      collectionQ.data && collectionQ.data.collection
        ? {
            icon: collectionQ.data.collection.icon || '',
            name: collectionQ.data.collection.name,
            summary: collectionQ.data.collection.summary || ''
          }
        : editCollectionFormInitialValues,
    [collectionQ]
  );
  const formik = useFormik<EditCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      update({
        variables: {
          collection: { ...vals, preferredUsername: vals.name },
          collectionId
        }
      }).then(done),
    validationSchema,
    initialValues
  });
  return <EditCollectionPanel cancel={done} formik={formik} />;
};
