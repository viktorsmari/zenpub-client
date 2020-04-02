import SignupComp from 'pages/Signup';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';

interface SignupPageRouter {}
const SignupPageRouter: FC<RouteComponentProps<SignupPageRouter>> = ({
  match
}) => {
  return (
    <GuestTemplate>
      <SignupComp />
    </GuestTemplate>
  );
};

export const SignupPageRoute: RouteProps = {
  exact: true,
  path: '/signup',
  component: SignupPageRouter
};
