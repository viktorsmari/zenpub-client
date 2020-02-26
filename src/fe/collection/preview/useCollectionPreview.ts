import { Collection } from 'graphql/types.generated';
import { useCollectionPreviewQuery } from './useCollectionPreview.generated';
import { useMemo } from 'react';

export const useCollectionPreview = (collectionId: Collection['id']) => {
  const collectionPreviewQ = useCollectionPreviewQuery({
    variables: { collectionId }
  });
  return useMemo(() => {
    return {
      collection: collectionPreviewQ.data?.collection
    };
  }, [collectionPreviewQ]);
};
