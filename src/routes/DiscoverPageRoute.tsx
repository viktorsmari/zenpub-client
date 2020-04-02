import { DiscoverPage } from 'HOC/pages/discover/DiscoverPage';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface DiscoverPageRouter {}
const DiscoverPageRouter: FC<RouteComponentProps<DiscoverPageRouter>> = (
  {
    /* match */
  }
) => {
  const props: DiscoverPage = {};
  return (
    <WithSidebarTemplate>
      <DiscoverPage {...props} />
    </WithSidebarTemplate>
  );
};

export const DiscoverPageRoute: RouteProps = {
  exact: true,
  path: '/discover',
  component: DiscoverPageRouter
};
