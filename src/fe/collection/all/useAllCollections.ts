import { useAllCollectionsQuery } from './useAllCollections.generated';
import { useMemo } from 'react';
import { CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';

export const useAllCollections = () => {
  const allCollectionsQ = useAllCollectionsQuery();
  return useMemo(() => {
    const list = (allCollectionsQ.data?.collections.edges || []).filter(
      (
        maybeCollectionPreview
      ): maybeCollectionPreview is CollectionPreviewFragment =>
        !!maybeCollectionPreview
    );
    return {
      list,
      totalCount: allCollectionsQ.data?.collections.totalCount
    };
  }, [allCollectionsQ]);
};
