import { Activity, User } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroUserHOC } from 'HOC/modules/HeroUser/HeroUserHOC';
import React, { createContext, SFC, useContext } from 'react';
import { Props, User as UserPage } from 'ui/pages/user';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';

export interface UserPageCtx {
  activitiesIds: Activity['id'][];
  userId: User['id'];
}
export const UserPageCtx = createContext(
  alertUnimplementedCtx<UserPageCtx>('UserPageCtx')
);

export const UserPageHOC: SFC = ({}) => {
  const { activitiesIds, userId } = useContext(UserPageCtx);
  const ActivityBoxes = (
    <>
      {activitiesIds.map(id => (
        <ActivityPreviewHOC activityId={id} key={id} />
      ))}
    </>
  );
  const HeroUserBox = <HeroUserHOC />;

  const userPageProps: Props = {
    basePath: `/user/${userId}`,
    ActivityBoxes,
    HeroUserBox
  };
  return <UserPage {...userPageProps} />;
};
