import React, { FC } from 'react';
import MyCollections from 'pages/collections.all/collectionsFollowed';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';

interface MyCollectionsPageRouter {}
const MyCollectionsPageRouter: FC<RouteComponentProps<
  MyCollectionsPageRouter
>> = ({ match }) => {
  return (
    <RedirectToLoginIfNotLoggedIn>
      <WithSidebarTemplate>
        <MyCollections />
      </WithSidebarTemplate>
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const MyCollectionsPageRoute: RouteProps = {
  exact: true,
  path: '/mycollections',
  component: MyCollectionsPageRouter
};
