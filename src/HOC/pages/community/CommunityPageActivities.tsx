import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityPageActivities';
import { Community } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import React, { SFC } from 'react';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageActivities: SFC<Props> = ({ communityId }) => {
  const { activities } = useCommunityOutboxActivities(communityId);

  return (
    <>
      {activities.map(activity => (
        <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
      ))}
    </>
  );
};
