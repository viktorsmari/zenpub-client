import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { User } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import React, { SFC } from 'react';
import { Props, User as UserPageUI } from 'ui/pages/user';
import { UserPageActivitiesFragment } from './UserPage.generated';

export interface UserPageCtx {
  activities: UserPageActivitiesFragment[];
}

export interface UserPage {
  userId: User['id'];
}

export const UserPage: SFC<UserPage> = ({ userId }) => {
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
    basePath: `/user/${userId}`,
    ActivityBoxes,
    HeroUserBox
  };

  return <UserPageUI {...userPageProps} />;
};
