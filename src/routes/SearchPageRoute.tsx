import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import SearchComp from 'pages/search/Search';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { searchDisabled } from 'mn-constants';
import { NotFound } from 'ui/pages/notFound';

interface SearchPageRouter {}
const SearchPageRouter: FC<RouteComponentProps<SearchPageRouter>> = ({
  match
}) => {
  return searchDisabled ? (
    <NotFound />
  ) : (
    <WithSidebarTemplate>
      <SearchComp />
    </WithSidebarTemplate>
  );
};

export const SearchPageRoute: RouteProps = {
  exact: false,
  path: '/search',
  component: SearchPageRouter
};
