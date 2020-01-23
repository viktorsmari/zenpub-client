import React from 'react';
import { useFormik } from 'formik';
import { useUpdateCommunityMutationMutation } from 'graphql/updateCommunity.generated';
import { useMemo, SFC } from 'react';
import * as Yup from 'yup';
import { useGetCommunityForEditQuery } from './getCommunityForEdit.generated';
import {
  EditCommunityFormValues,
  EditCommunityPanel
} from 'ui/modules/EditCommunityPanel';
import { Community } from 'graphql/types.generated';

export const validationSchema: Yup.ObjectSchema<
  EditCommunityFormValues
> = Yup.object<EditCommunityFormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const editCommunityFormInitialValues: EditCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};
export interface Props {
  communityId: Community['id'];
  done(): any;
}
export const EditCommunityPanelHOC: SFC<Props> = ({
  done,
  communityId
}: Props) => {
  const community = useGetCommunityForEditQuery({ variables: { communityId } });
  const [update /* , result */] = useUpdateCommunityMutationMutation();
  const initialValues = useMemo<EditCommunityFormValues>(
    () =>
      community.data && community.data.community
        ? {
            image: community.data.community.image || '',
            name: community.data.community.name,
            summary: community.data.community.summary || ''
          }
        : editCommunityFormInitialValues,
    [community]
  );
  const formik = useFormik<EditCommunityFormValues>({
    enableReinitialize: true,
    onSubmit: vals =>
      update({ variables: { community: vals, communityId } }).then(done),
    validationSchema,
    initialValues
  });
  return <EditCommunityPanel cancel={done} formik={formik} />;
};
