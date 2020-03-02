import { AllCommunitiesPage } from 'HOC/pages/all-communities/AllCommunities';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface AllCommunitiesPageRouter {}
const AllCommunitiesPageRouter: FC<RouteComponentProps<
  AllCommunitiesPageRouter
>> = () => {
  //const props: AllCommunitiesPage = {};
  return <AllCommunitiesPage />;
};

export const AllCommunitiesPageRoute: RouteProps = {
  exact: true,
  path: '/communities',
  component: AllCommunitiesPageRouter
};
