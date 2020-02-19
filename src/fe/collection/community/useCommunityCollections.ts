import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityCollections.generated';

export interface Props {
  communityId: Community['id'];
}

export const useCommunityCollections = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityCollectionsQuery({
    variables: { communityId }
  });

  const collections = useMemo<GQL.CommunityCollectionFragment[]>(
    () =>
      (communityQ.data?.community?.collections?.edges || [])
        .map(collectionEdge => collectionEdge?.node)
        .filter(
          (
            maybeCollection
          ): maybeCollection is GQL.CommunityCollectionFragment =>
            !!maybeCollection
        ),
    [communityQ]
  );

  return useMemo(
    () => ({
      collections
    }),
    [collections]
  );
};
