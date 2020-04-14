import { CreateNewPasswordPageHOC } from 'HOC/pages/createNewPassword/CreateNewPassword';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC, useMemo } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface CreateNewPasswordPageRouter {
  token: string;
}
const CreateNewPasswordPageRouter: FC<RouteComponentProps<
  CreateNewPasswordPageRouter
>> = ({
  match: {
    params: { token }
  }
}) => {
  let props = useMemo<CreateNewPasswordPageHOC>(() => {
    return {
      token
    };
  }, [token]);
  return (
    <GuestTemplate>
      <CreateNewPasswordPageHOC {...props} />
    </GuestTemplate>
  );
};

export const CreateNewPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset/:token',
  component: CreateNewPasswordPageRouter
};
