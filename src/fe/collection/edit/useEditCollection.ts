import { useUpdateCollectionMutation } from 'fe/mutation/collection/update/useUpdateCollection.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { CollectionUpdateInput, Collection } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';

export const useEditCollection = (collectionId: Maybe<Collection['id']>) => {
  const [update, status] = useUpdateCollectionMutation();

  const edit = useCallback(
    async (collection: CollectionUpdateInput) => {
      if (!collectionId || status.loading) {
        return;
      }
      return update({ variables: { collectionId, collection } });
    },
    [collectionId, status]
  );

  return useMemo(() => {
    return {
      edit
    };
  }, [edit]);
};
