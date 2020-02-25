import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { User } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import React, { SFC } from 'react';
import { Props, User as UserPageUI } from 'ui/pages/user';

export interface UserPage {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export enum UserPageTab {
  Activities,
  Likes
}
export const UserPage: SFC<UserPage> = ({ userId, basePath }) => {
  const { activities } = useUserOutboxActivities(userId);
  const ActivityBoxes = (
    <>
      {activities.map(activity => (
        <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
      ))}
    </>
  );
  const HeroUserBox = <HeroUser userId={userId} />;

  const userPageProps: Props = {
    basePath,
    ActivityBoxes,
    HeroUserBox
  };

  return <UserPageUI {...userPageProps} />;
};
