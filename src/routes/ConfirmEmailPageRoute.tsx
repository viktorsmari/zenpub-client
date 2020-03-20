import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import ConfirmAccountComp from 'pages/Confirm';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps, Redirect } from 'react-router-dom';
import { useMe } from 'fe/session/me';

interface ConfirmEmailRouter {
  token: string;
}
const ConfirmEmailRouter: FC<RouteComponentProps<ConfirmEmailRouter>> = ({
  match
}) => {
  const meQ = useMe();
  if (meQ.loading) {
    return null;
  }
  if (meQ.me) {
    return <Redirect to="/#welcome" />;
  }
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
