import { GetCollectionQuery } from 'graphql/getCollection.generated';
import { useMemo } from 'react';
import { QueryResult } from 'react-apollo';
import * as Yup from 'yup';
import { CollectionUpdateInput } from 'graphql/types.generated';

export interface EditCollectionFormValues {
  name: string;
  summary: string;
  icon: string;
  preferredUsername?: string;
}

export type EditCollectionFormValuesSchema = Yup.ObjectSchema<
  EditCollectionFormValues
>;
export const editCollectionFormValuesSchema: EditCollectionFormValuesSchema = Yup.object<
  EditCollectionFormValues
>({
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
  icon: '',
  preferredUsername: ''
};

export const useEditCollectionFormValuesFromQueryResult = (
  qres: QueryResult<GetCollectionQuery>
): EditCollectionFormValues =>
  useMemo(
    () =>
      qres.data && qres.data.collection
        ? {
            icon: qres.data.collection.icon || '',
            name: qres.data.collection.name,
            summary: qres.data.collection.summary || '',
            preferredUsername: qres.data.collection.preferredUsername
          }
        : editCollectionFormInitialValues,
    [qres]
  );

export const getCollectionInputFromFormValues = (
  vals: EditCollectionFormValues
): CollectionUpdateInput => ({
  icon: vals.icon || '',
  name: vals.name,
  summary: vals.summary || '',
  preferredUsername: vals.name
});
