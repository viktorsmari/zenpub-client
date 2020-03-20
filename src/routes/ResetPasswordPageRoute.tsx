import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import ResetPasswordComp from 'pages/Reset';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface ResetPasswordPageRouter {}
const ResetPasswordPageRouter: FC<RouteComponentProps<
  ResetPasswordPageRouter
>> = ({ match }) => {
  return (
    <WithoutSidebarTemplate>
      <ResetPasswordComp />
    </WithoutSidebarTemplate>
  );
};

export const ResetPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset',
  component: ResetPasswordPageRouter
};
