import React, { FC } from 'react';
import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { User } from 'graphql/types.generated';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
export { UserPageTab } from 'HOC/pages/user/UserPage';

export interface UserPageCtrl {
  userId: User['id'];
  tab: UserPageTab;
}
export const UserPageCtrl: FC<UserPageCtrl> = ({ tab, userId }) => {
  const { activities } = useUserOutboxActivities(userId);

  const props: UserPage = {
    activities,
    tab,
    userId
  };

  return <UserPage {...props} />;
};
