import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityThreads.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useCommunityThreads = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityThreadsQuery({
    variables: { communityId }
  });

  const threads = useMemo<GQL.CommunityThreadFragment[]>(
    () => manageEdges(communityQ.data?.community?.threads).nodes,
    [communityQ]
  );

  return useMemo(
    () => ({
      threads
    }),
    [threads]
  );
};
