import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import SignupComp from 'pages/Signup';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface SignupPageRouter {}
const SignupPageRouter: FC<RouteComponentProps<SignupPageRouter>> = ({
  match
}) => {
  return (
    <WithoutSidebarTemplate>
      <SignupComp />
    </WithoutSidebarTemplate>
  );
};

export const SignupPageRoute: RouteProps = {
  exact: true,
  path: '/signup',
  component: SignupPageRouter
};
