import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import ConfirmAccountComp from 'pages/Confirm';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface ConfirmEmailRouter {
  token: string;
}
const ConfirmEmailRouter: FC<RouteComponentProps<ConfirmEmailRouter>> = ({
  match
}) => {
  return (
    <WithoutSidebarTemplate>
      <ConfirmAccountComp token={match.params.token} />
    </WithoutSidebarTemplate>
  );
};

export const ConfirmEmailRoute: RouteProps = {
  exact: true,
  path: '/confirm-email/:token',
  component: ConfirmEmailRouter
};
