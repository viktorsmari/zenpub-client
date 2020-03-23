import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useCommunityOutboxActivities = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityOutboxActivitiesQuery({
    variables: { communityId }
  });

  const activitiesPage = usePage(communityQ.data?.community?.outbox);
  return useMemo(
    () => ({
      activitiesPage
    }),
    [activitiesPage]
  );
};
