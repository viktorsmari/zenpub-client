import { SignUpPageHOC } from 'HOC/pages/signUp/SignUpPage';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';

interface SignupPageRouter {}
const SignupPageRouter: FC<RouteComponentProps<SignupPageRouter>> = ({
  match
}) => {
  return (
    <GuestTemplate withoutHeader>
      <SignUpPageHOC />
    </GuestTemplate>
  );
};

export const SignupPageRoute: RouteProps = {
  exact: true,
  path: '/signup',
  component: SignupPageRouter
};
