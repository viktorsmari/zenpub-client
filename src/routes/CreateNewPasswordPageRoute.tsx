import CreateNewPasswordComp from 'pages/CreateNewPassword';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';

interface CreateNewPasswordPageRouter {}
const CreateNewPasswordPageRouter: FC<RouteComponentProps<
  CreateNewPasswordPageRouter
>> = ({ match }) => {
  return (
    <GuestTemplate>
      <CreateNewPasswordComp {...{ match }} />
    </GuestTemplate>
  );
};

export const CreateNewPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset/:token',
  component: CreateNewPasswordPageRouter
};
