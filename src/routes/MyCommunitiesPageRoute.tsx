import React, { FC } from 'react';
import { CommunitiesYours } from 'pages/communities.all/communitiesJoined';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';

interface MyCommunitiesPageRouter {}
const MyCommunitiesPageRouter: FC<RouteComponentProps<
  MyCommunitiesPageRouter
>> = ({ match }) => {
  return (
    <RedirectToLoginIfNotLoggedIn>
      <WithSidebarTemplate>
        <CommunitiesYours />
      </WithSidebarTemplate>
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const MyCommunitiesPageRoute: RouteProps = {
  exact: true,
  path: '/mycommunities',
  component: MyCommunitiesPageRouter
};
