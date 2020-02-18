import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import React, { createContext, SFC, useContext } from 'react';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';
import { Activity } from 'graphql/types.generated';

export interface Props {}

export interface CommunityPageActivitiesCtx {
  activitiesIds: Activity['id'][];
}
export const CommunityPageActivitiesCtx = createContext<
  CommunityPageActivitiesCtx
>(
  alertUnimplementedCtx<CommunityPageActivitiesCtx>(
    'CommunityPageActivitiesCtx'
  )
);

export const CommunityPageActivities: SFC<Props> = () => {
  const { activitiesIds } = useContext(CommunityPageActivitiesCtx);

  return (
    <>
      {activitiesIds.map(activityId => (
        <ActivityPreviewHOC activityId={activityId} key={activityId} />
      ))}
    </>
  );
};
