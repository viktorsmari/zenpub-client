import React, { createContext, useContext } from 'react';
import { useFormik } from 'formik';
import { useMemo, FC } from 'react';
import * as Yup from 'yup';
import * as GQL from './editCommunityPanel.generated';
import {
  EditCommunityFormValues,
  EditCommunityPanel
} from 'ui/modules/EditCommunityPanel';
import { Community } from 'graphql/types.generated';

export const validationSchema: Yup.ObjectSchema<EditCommunityFormValues> = Yup.object<
  EditCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string() //.url()
});

export const editCommunityFormInitialValues: EditCommunityFormValues = {
  name: '',
  summary: '',
  icon: '',
  files: []
};

export interface EditCommunityPanelCtx {
  useEditCommunityPanelQuery: typeof GQL.useEditCommunityPanelQuery;
  useEditCommunityPanelUpdateMutation: typeof GQL.useEditCommunityPanelUpdateMutation;
  useEditCommunityPanelUploadIconMutation: typeof GQL.useEditCommunityPanelUploadIconMutation;
}
export const EditCommunityPanelCtx = createContext<EditCommunityPanelCtx>({
  useEditCommunityPanelQuery: GQL.useEditCommunityPanelQuery,
  useEditCommunityPanelUpdateMutation: GQL.useEditCommunityPanelUpdateMutation,
  useEditCommunityPanelUploadIconMutation:
    GQL.useEditCommunityPanelUploadIconMutation
});

export interface Props {
  communityId: Community['id'];
  done(): any;
}
export const EditCommunityPanelHOC: FC<Props> = ({
  done,
  communityId
}: Props) => {
  const {
    useEditCommunityPanelQuery,
    useEditCommunityPanelUploadIconMutation,
    useEditCommunityPanelUpdateMutation
  } = useContext(EditCommunityPanelCtx);
  const resultQ = useEditCommunityPanelQuery({ variables: { communityId } });
  const [update /* , result */] = useEditCommunityPanelUpdateMutation();
  const [mutateIcon] = useEditCommunityPanelUploadIconMutation();
  const initialValues = useMemo<EditCommunityFormValues>(
    () =>
      resultQ.data && resultQ.data.community
        ? {
            icon: resultQ.data.community.icon || '',
            name: resultQ.data.community.name,
            summary: resultQ.data.community.summary || '',
            files: []
          }
        : editCommunityFormInitialValues,
    [resultQ]
  );

  const uploadIcon = file =>
    mutateIcon({
      variables: { contextId: communityId, upload: file }
    })
      .then(res => {
        return (
          (res && res.data && res.data.uploadIcon && res.data.uploadIcon.url) ||
          ''
        );
      })
      .catch(err => console.log(err));

  const updateCommunity = ({
    icon,
    name,
    summary
  }: Pick<EditCommunityFormValues, 'icon' | 'name' | 'summary'>) =>
    update({
      variables: {
        community: {
          icon,
          name,
          summary
        },
        communityId
      }
    });

  const formik = useFormik<EditCommunityFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      const file = vals.files!.map(file => {
        return file;
      })[0];

      if (file) {
        uploadIcon(file)
          .then(iconUrl =>
            updateCommunity({
              ...vals,
              icon: iconUrl || ''
            })
          )
          .then(done)
          .catch(err => console.log(err));
      } else {
        updateCommunity(vals)
          .then(done)
          .catch(err => console.log(err));
      }
    },
    validationSchema,
    initialValues
  });
  return <EditCommunityPanel cancel={done} formik={formik} />;
};
