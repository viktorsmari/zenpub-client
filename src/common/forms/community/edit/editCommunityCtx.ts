import { useFormik } from 'formik';
import { useUpdateCommunityMutationMutation } from 'graphql/updateCommunity.generated';
import { useMemo } from 'react';
import {
  EditCommunityContext,
  EditCommunityFormValues
} from 'ui/modules/EditCommunityModal';
import * as Yup from 'yup';
import { useGetCommunityForEditQuery } from './getCommunityForEdit.generated';

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

export const useEditCommunityFormContext: EditCommunityContext = ({
  communityId,
  callOnSuccess
}) => {
  const community = useGetCommunityForEditQuery({ variables: { communityId } });
  const [create /* , result */] = useUpdateCommunityMutationMutation();
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
      create({ variables: { community: vals, communityId } }).then(
        callOnSuccess
      ),
    validationSchema,
    initialValues
  });
  return { formik };
};
