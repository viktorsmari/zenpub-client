import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import { ResetPasswordPageHOC } from 'HOC/pages/resetPasswordRequest/resetPasswordRequestPage';
import { RedirectAuthenticatedToHome } from './wrappers/RedirectBySession';

interface ResetPasswordPageRouter {}
const ResetPasswordPageRouter: FC<RouteComponentProps<
  ResetPasswordPageRouter
>> = ({ match }) => {
  return (
    <RedirectAuthenticatedToHome>
      <GuestTemplate>
        <ResetPasswordPageHOC />
      </GuestTemplate>
    </RedirectAuthenticatedToHome>
  );
};

export const ResetPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset',
  component: ResetPasswordPageRouter
};
