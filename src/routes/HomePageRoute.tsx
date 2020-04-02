import React, { FC } from 'react';
import Home from 'pages/home';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';

interface HomePageRouter {}
const HomePageRouter: FC<RouteComponentProps<HomePageRouter>> = ({ match }) => {
  return (
    <RedirectToLoginIfNotLoggedIn>
      <WithSidebarTemplate>
        <Home />
      </WithSidebarTemplate>
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const HomePageRoute: RouteProps = {
  exact: true,
  path: '/',
  component: HomePageRouter
};
