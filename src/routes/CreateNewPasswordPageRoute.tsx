import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import CreateNewPasswordComp from 'pages/CreateNewPassword';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface CreateNewPasswordPageRouter {}
const CreateNewPasswordPageRouter: FC<RouteComponentProps<
  CreateNewPasswordPageRouter
>> = ({ match }) => {
  return (
    <WithoutSidebarTemplate>
      <CreateNewPasswordComp {...{ match }} />
    </WithoutSidebarTemplate>
  );
};

export const CreateNewPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset/:token',
  component: CreateNewPasswordPageRouter
};
