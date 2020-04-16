import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import { ResetPasswordPageHOC } from 'HOC/pages/resetPasswordRequest/resetPasswordRequestPage';

interface ResetPasswordPageRouter {}
const ResetPasswordPageRouter: FC<RouteComponentProps<
  ResetPasswordPageRouter
>> = ({ match }) => {
  return (
    <GuestTemplate>
      <ResetPasswordPageHOC />
    </GuestTemplate>
  );
};

export const ResetPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset',
  component: ResetPasswordPageRouter
};
