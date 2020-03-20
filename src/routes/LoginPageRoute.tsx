import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import LoginComp from 'pages/login/Login';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface LoginPageRouter {}
const LoginPageRouter: FC<RouteComponentProps<LoginPageRouter>> = ({
  match
}) => {
  return (
    <WithoutSidebarTemplate>
      <LoginComp />
    </WithoutSidebarTemplate>
  );
};

export const LoginPageRoute: RouteProps = {
  exact: true,
  path: '/login',
  component: LoginPageRouter
};
