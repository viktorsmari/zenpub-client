import Maybe from 'graphql/tsutils/Maybe';
import { Collection, CollectionUpdateInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCollectionDataQuery,
  useEditCollectionMutation
} from './useEditCollection.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';

export const useEditCollection = (collectionId: Collection['id']) => {
  const [editMut, editMutStatus] = useEditCollectionMutation();
  const collectionEditQ = useEditCollectionDataQuery({
    variables: { collectionId }
  });

  const edit = useCallback(
    async (
      collectionInput: CollectionUpdateInput,
      iconFile: Maybe<File | string>
    ) => {
      if (editMutStatus.loading) {
        return;
      }
      return editMut({
        variables: {
          collectionId,
          icon: getMaybeUploadInput(iconFile),
          collection: {
            name: collectionInput.name,
            summary: collectionInput.summary
          }
        }
      });
    },
    [collectionId, editMut, editMutStatus]
  );
  return useMemo(() => {
    const collection = collectionEditQ.data?.collection;
    return {
      edit,
      collection
    };
  }, [edit, collectionEditQ]);
};
