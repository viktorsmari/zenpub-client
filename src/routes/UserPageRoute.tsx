import React, { FC } from 'react';
import { UserPageCtrl, UserPageTab } from 'controllers/UserPageCtrl';
import NotFound from 'pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface UserPageRouter {
  userId: string;
  tab?: string;
}
const UserPageRouter: FC<RouteComponentProps<UserPageRouter>> = ({ match }) => {
  const userId = match.params.userId;
  const maybeTabStr = match.params.tab;

  const tab =
    maybeTabStr === 'likes'
      ? UserPageTab.Likes
      : !maybeTabStr
      ? UserPageTab.Activities
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: UserPageCtrl = {
    tab,
    userId,
    basePath: `/user/${userId}`
  };

  return <UserPageCtrl {...props} />;
};

export const UserPageRoute: RouteProps = {
  exact: true,
  path: '/user/:userId/:tab?',
  component: UserPageRouter
};
