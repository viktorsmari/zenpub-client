import ResetPasswordComp from 'pages/Reset';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';

interface ResetPasswordPageRouter {}
const ResetPasswordPageRouter: FC<RouteComponentProps<
  ResetPasswordPageRouter
>> = ({ match }) => {
  return (
    <GuestTemplate>
      <ResetPasswordComp />
    </GuestTemplate>
  );
};

export const ResetPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset',
  component: ResetPasswordPageRouter
};
