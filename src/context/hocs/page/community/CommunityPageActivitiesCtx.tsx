import { Activity, Community } from 'graphql/types.generated';
import { CommunityPageActivitiesCtx } from 'HOC/pages/community/CommunityPageActivities';
import React, { FC, useMemo } from 'react';
import * as GQL from './CommunityPageActivitiesCtx.generated';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageActivitiesCtxProvider: FC<Props> = ({
  communityId,
  children
}) => {
  const communityQ = GQL.useCommunityPageActivitiesQuery({
    variables: { communityId }
  });

  const activitiesIds = useMemo(
    () =>
      (communityQ.data?.community?.outbox?.edges || [])
        .map(activityEdge => activityEdge && activityEdge.node.id)
        .filter((_): _ is Activity['id'] => !!_),
    [communityQ]
  );

  const ctx = useMemo<CommunityPageActivitiesCtx>(
    () => ({
      activitiesIds
    }),
    [activitiesIds]
  );

  return (
    <CommunityPageActivitiesCtx.Provider value={ctx}>
      {children}
    </CommunityPageActivitiesCtx.Provider>
  );
};
