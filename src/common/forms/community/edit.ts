import { GetCommunityQueryQuery } from 'graphql/generated/getCommunity.generated';
import { useMemo } from 'react';
import { QueryResult } from 'react-apollo';
import * as Yup from 'yup';

export interface EditCommunityFormValues {
  name: string;
  summary: string;
  image: string;
}

export type EditCommunityFormValuesSchema = Yup.ObjectSchema<
  EditCommunityFormValues
>;
export const editCommunityFormValuesSchema: EditCommunityFormValuesSchema = Yup.object<
  EditCommunityFormValues
>({
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

export const useEditCommunityFormValuesFromQueryResult = (
  qres: QueryResult<GetCommunityQueryQuery>
): EditCommunityFormValues =>
  useMemo(
    () =>
      qres.data && qres.data.community
        ? {
            image: qres.data.community.image || '',
            name: qres.data.community.name,
            summary: qres.data.community.summary || ''
          }
        : editCommunityFormInitialValues,
    [qres]
  );
