import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityCollections.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export interface Props {
  communityId: Community['id'];
}

export const useCommunityCollections = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityCollectionsQuery({
    variables: { communityId }
  });

  const collections = useMemo<GQL.CommunityCollectionFragment[]>(
    () => manageEdges(communityQ.data?.community?.collections).nodes,
    [communityQ]
  );

  return useMemo(
    () => ({
      collections
    }),
    [collections]
  );
};
