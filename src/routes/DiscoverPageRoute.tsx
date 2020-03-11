import { DiscoverPage } from 'HOC/pages/discover/DiscoverPage';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface DiscoverPageRouter {}
const DiscoverPageRouter: FC<RouteComponentProps<DiscoverPageRouter>> = (
  {
    /* match */
  }
) => {
  const props: DiscoverPage = {};

  return <DiscoverPage {...props} />;
};

export const DiscoverPageRoute: RouteProps = {
  exact: true,
  path: '/discover',
  component: DiscoverPageRouter
};
