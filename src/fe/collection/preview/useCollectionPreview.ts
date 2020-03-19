import { Collection } from 'graphql/types.generated';
import { useCollectionPreviewQuery } from './useCollectionPreview.generated';
import { useMemo } from 'react';
import { useFollowContext } from 'fe/context/follow/useFollowContext';

export const useCollectionPreview = (collectionId: Collection['id']) => {
  const collectionPreviewQ = useCollectionPreviewQuery({
    variables: { collectionId }
  });
  const { toggleFollow } = useFollowContext(
    collectionPreviewQ.data?.collection
  );
  return useMemo(() => {
    return {
      collection: collectionPreviewQ.data?.collection,
      toggleFollow
    };
  }, [collectionPreviewQ, toggleFollow]);
};
