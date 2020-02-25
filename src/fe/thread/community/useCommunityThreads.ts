import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityThreads.generated';

export const useCommunityThreads = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityThreadsQuery({
    variables: { communityId }
  });

  const threads = useMemo<GQL.CommunityThreadFragment[]>(
    () =>
      (communityQ.data?.community?.threads?.edges || [])
        .map(threadEdge => threadEdge?.node)
        .filter(
          (maybeThread): maybeThread is GQL.CommunityThreadFragment =>
            !!maybeThread
        ),
    [communityQ]
  );

  return useMemo(
    () => ({
      threads
    }),
    [threads]
  );
};
