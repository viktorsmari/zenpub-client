import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { UserPage } from 'HOC/pages/user/UserPage';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface UserPageRouteController
  extends RouteComponentProps<{ userId: string }> {}
const UserPageRouteController: FC<UserPageRouteController> = ({ match }) => {
  const userId = match.params.userId;
  const { activities } = useUserOutboxActivities(userId);

  const props: UserPage = {
    activities,
    userId
  };
  return <UserPage {...props} />;
};

export const UserPageRoute: RouteProps = {
  exact: true,
  path: '/user/:id/:tab?',
  component: UserPageRouteController
};
