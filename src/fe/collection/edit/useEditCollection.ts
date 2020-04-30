import Maybe from 'graphql/tsutils/Maybe';
import { Collection, CollectionUpdateInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCollectionDataQuery,
  useEditCollectionMutation
} from './useEditCollection.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';

export interface EditCollection {
  collection: CollectionUpdateInput;
  icon: Maybe<File | string>;
}
export const useEditCollection = (collectionId: Collection['id']) => {
  const [editMut, editMutStatus] = useEditCollectionMutation();
  const collectionEditQ = useEditCollectionDataQuery({
    variables: { collectionId }
  });

  const edit = useCallback(
    async ({ collection, icon }: EditCollection) => {
      if (editMutStatus.loading) {
        return;
      }
      return editMut({
        variables: {
          collectionId,
          icon: getMaybeUploadInput(
            icon,
            collectionEditQ.data?.collection?.icon?.url
          ),
          collection: {
            name: collection.name,
            summary: collection.summary
          }
        }
      });
    },
    [collectionId, editMut, editMutStatus, collectionEditQ]
  );
  return useMemo(() => {
    const collection = collectionEditQ.data?.collection;
    return {
      edit,
      collection
    };
  }, [edit, collectionEditQ]);
};
