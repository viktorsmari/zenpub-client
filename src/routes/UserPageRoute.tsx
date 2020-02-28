import React, { FC } from 'react';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
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
      : maybeTabStr === 'communities'
      ? UserPageTab.Communities
      : maybeTabStr === 'collections'
      ? UserPageTab.Collections
      : maybeTabStr === 'following'
      ? UserPageTab.Following
      : !maybeTabStr
      ? UserPageTab.Activities
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: UserPage = {
    tab,
    userId,
    basePath: `/user/${userId}`
  };

  return <UserPage {...props} />;
};

export const UserPageRoute: RouteProps = {
  exact: true,
  path: '/user/:userId/:tab?',
  component: UserPageRouter
};
