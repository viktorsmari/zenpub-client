import { useFormik } from 'formik';
import React, { createContext, SFC, useContext } from 'react';
import { useHistory } from 'react-router';
import {
  BasicCreateCollectionFormValues,
  CreateCollectionPanel
} from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import * as GQL from './createCollectionPanel.generated';
import { CommunityCollectionsDocument } from 'fe/collection/community/useCommunityCollections.generated';

export const validationSchema: Yup.ObjectSchema<BasicCreateCollectionFormValues> = Yup.object<
  BasicCreateCollectionFormValues
>({
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

export const initialValues: BasicCreateCollectionFormValues = {
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
  const formik = useFormik<BasicCreateCollectionFormValues>({
    initialValues,
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
        },
        refetchQueries: fileToUpload
          ? []
          : [
              {
                query: CommunityCollectionsDocument,
                variables: { communityId }
              }
            ]
      })
        .then(res => {
          const createdCollectionId = res.data!.createCollection!.id;
          if (fileToUpload) {
            uploadIcon({
              variables: {
                contextId: createdCollectionId,
                upload: fileToUpload
              },
              refetchQueries: [
                {
                  query: CommunityCollectionsDocument,
                  variables: { communityId }
                }
              ]
            }).then(() => createdCollectionId);
          }
          return createdCollectionId;
        })
        .then(createdCollectionId => {
          history.push(`/collections/${createdCollectionId}`);
        })
        .then(done)
        .catch(err => console.log(err));
    },
    validationSchema
  });
  return <CreateCollectionPanel cancel={done} formik={formik} />;
};
