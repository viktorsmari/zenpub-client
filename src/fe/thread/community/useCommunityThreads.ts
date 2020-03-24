import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityThreads.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useCommunityThreads = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityThreadsQuery({
    variables: { communityId }
  });

  const threadsPage = usePage(communityQ.data?.community?.threads, {
    next: (cursor, update) => {
      communityQ.fetchMore({
        variables: { ...cursor, communityId, limit: 12 },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.community?.threads
            ? update(fetchMoreResult.community.threads)
            : prev;
        }
      });
    }
  });

  return useMemo(
    () => ({
      threadsPage
    }),
    [threadsPage]
  );
};
