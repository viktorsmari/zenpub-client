import { User } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import React, { SFC } from 'react';
import { Props, User as UserPageUI } from 'ui/pages/user';
import { UserPageActivitiesFragment } from './UserPage.generated';

export interface UserPage {
  userId: User['id'];
  activities: UserPageActivitiesFragment[];
}

export const UserPage: SFC<UserPage> = ({ userId, activities }) => {
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
