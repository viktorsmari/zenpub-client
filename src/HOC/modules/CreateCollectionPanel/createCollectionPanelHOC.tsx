import { useCreateCollection } from 'fe/collection/create/useCreateCollection';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
  BasicCreateCollectionFormValues,
  CreateCollectionPanel
} from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

export const validationSchema: Yup.ObjectSchema<BasicCreateCollectionFormValues> = Yup.object<
  BasicCreateCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string().url(),
  files: Yup.array()
});
export interface Props {
  communityId: string;
  done(): any;
}
export const CreateCollectionPanelHOC: FC<Props> = ({
  communityId,
  done
}: Props) => {
  const history = useHistory();
  const { create } = useCreateCollection(communityId);

  const formik = useFormik<BasicCreateCollectionFormValues>({
    initialValues: {
      name: '',
      summary: '',
      icon: '',
      files: []
    },
    enableReinitialize: true,
    onSubmit: vals => {
      const fileToUpload = vals.files?.shift();

      return create(
        {
          preferredUsername: vals.name.split(' ').join('_'),
          name: vals.name,
          summary: vals.summary,
          icon: vals.icon
        },
        fileToUpload
      )
        .then(
          createdCollectionId =>
            createdCollectionId &&
            history.push(`/collections/${createdCollectionId}`)
        )
        .catch(err => console.log(err));
    },
    validationSchema
  });
  return <CreateCollectionPanel cancel={done} formik={formik} />;
};
