import { Community } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import React, { createContext, SFC, useContext } from 'react';
import * as GQL from './CommunityPageActivities.generated';

export interface Props {
  communityId: Community['id'];
}

export interface CommunityPageActivitiesCtx {
  useCommunityPageActivitiesQuery: typeof GQL.useCommunityPageActivitiesQuery;
}
export const CommunityPageActivitiesCtx = createContext<
  CommunityPageActivitiesCtx
>({
  useCommunityPageActivitiesQuery: GQL.useCommunityPageActivitiesQuery
});

export const CommunityPageActivities: SFC<Props> = ({ communityId }) => {
  const { useCommunityPageActivitiesQuery } = useContext(
    CommunityPageActivitiesCtx
  );

  const communityQ = useCommunityPageActivitiesQuery({
    variables: { communityId }
  });
  if (
    communityQ.error ||
    communityQ.loading ||
    !communityQ.data ||
    !communityQ.data.community ||
    !communityQ.data.community.outbox ||
    !communityQ.data.community.outbox.edges
  ) {
    return null;
  }
  return (
    <>
      {' '}
      {communityQ.data.community.outbox.edges.map(edge => {
        if (!edge) {
          return null;
        }
        const id = edge.node.id;
        return <ActivityPreviewHOC activityId={id} key={id} />;
      })}
    </>
  );
};
