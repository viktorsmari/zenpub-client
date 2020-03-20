import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCollections.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCollections = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCollectionsQuery({
    variables: { userId }
  });

  const collections = useMemo<GQL.UserFollowedCollectionFragment[]>(
    () =>
      manageEdges(userQ.data?.user?.followedCollections).edges.map(
        followedCollection => followedCollection.collection
      ),
    [userQ]
  );

  return useMemo(
    () => ({
      collections
    }),
    [collections]
  );
};
