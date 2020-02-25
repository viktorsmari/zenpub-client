import { Collection } from 'graphql/types.generated';
import { useCollectionDataQuery } from '../collection/useCollection.generated';
import { useMemo } from 'react';
import { useFollowContext } from 'fe/context/follow/useFollowContext';
import { useEditCollection } from '../collection/edit/useEditCollection';
import { useMe } from 'fe/session/me';
import { useCreateThreadContext } from 'fe/context/createThread/useCreateThreadContext';
import { useFeaturedContext } from 'fe/context/feature/useFeatureContext';

export const useCollection = (collectionId: Collection['id']) => {
  const { me } = useMe();

  const collectionQ = useCollectionDataQuery({ variables: { collectionId } });
  const { createThread } = useCreateThreadContext(collectionId);
  const collection = collectionQ.data?.collection;
  const { toggleFollow: toggleJoin } = useFollowContext(collection);
  const { toggleFeatured, isFeatured } = useFeaturedContext(collection);
  const { edit } = useEditCollection(collectionId);
  const canModify =
    !!me && !!collection?.creator && me.user.id === collection.creator.id;

  return useMemo(() => {
    return {
      toggleFeatured,
      collection,
      createThread,
      toggleJoin,
      edit,
      canModify,
      isFeatured
    };
  }, [
    isFeatured,
    collection,
    toggleJoin,
    edit,
    canModify,
    createThread,
    toggleFeatured
  ]);
};
