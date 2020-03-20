import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityOutboxActivities.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useCommunityOutboxActivities = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityOutboxActivitiesQuery({
    variables: { communityId }
  });

  const activities = useMemo<GQL.CommunityOutboxActivityFragment[]>(
    () => manageEdges(communityQ.data?.community?.outbox).edges,
    [communityQ]
  );

  return useMemo(
    () => ({
      activities
    }),
    [activities]
  );
};
