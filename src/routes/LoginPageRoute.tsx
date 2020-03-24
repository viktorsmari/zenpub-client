import LoginComp from 'pages/login/Login';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';

interface LoginPageRouter {}
const LoginPageRouter: FC<RouteComponentProps<LoginPageRouter>> = ({
  match
}) => {
  return (
    <GuestTemplate>
      <LoginComp />
    </GuestTemplate>
  );
};

export const LoginPageRoute: RouteProps = {
  exact: true,
  path: '/login',
  component: LoginPageRouter
};
