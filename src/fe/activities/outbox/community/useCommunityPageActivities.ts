import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityOutboxActivities.generated';

export const useCommunityOutboxActivities = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityOutboxActivitiesQuery({
    variables: { communityId }
  });

  const activities = useMemo<GQL.CommunityOutboxActivityFragment[]>(
    () =>
      (communityQ.data?.community?.outbox?.edges || [])
        .map(activityEdge => activityEdge && activityEdge.node)
        .filter(
          (
            maybeActivity
          ): maybeActivity is GQL.CommunityOutboxActivityFragment =>
            !!maybeActivity
        ),
    [communityQ]
  );

  return useMemo(
    () => ({
      activities
    }),
    [activities]
  );
};
