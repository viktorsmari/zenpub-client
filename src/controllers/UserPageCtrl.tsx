import React, { FC, useMemo } from 'react';
import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { User } from 'graphql/types.generated';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
export { UserPageTab } from 'HOC/pages/user/UserPage';

export interface UserPageCtrl {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export const UserPageCtrl: FC<UserPageCtrl> = ({ tab, userId, basePath }) => {
  const { activities } = useUserOutboxActivities(userId);

  const userPageProps = useMemo<UserPage>(() => {
    const props: UserPage = {
      activities,
      tab,
      userId,
      basePath
    };
    return props;
  }, [activities, tab, userId, basePath]);
  return <UserPage {...userPageProps} />;
};
