import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import SearchComp from 'pages/search/Search';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface SearchPageRouter {}
const SearchPageRouter: FC<RouteComponentProps<SearchPageRouter>> = ({
  match
}) => {
  return (
    <WithSidebarTemplate>
      <SearchComp />
    </WithSidebarTemplate>
  );
};

export const SearchPageRoute: RouteProps = {
  exact: true,
  path: '/search',
  component: SearchPageRouter
};
