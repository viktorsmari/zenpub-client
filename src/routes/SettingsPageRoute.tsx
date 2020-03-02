import React, { FC } from 'react';
import { SettingsPage, SettingsPageTab } from 'HOC/pages/settings/SettingsPage';
import NotFound from 'pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { useMe } from 'fe/session/me';
import Login from 'pages/login/Login';

interface SettingsPageRouter {
  tab?: string;
}
const SettingsPageRouter: FC<RouteComponentProps<SettingsPageRouter>> = ({
  match
}) => {
  const { me, loading } = useMe();
  if (!loading && !me) {
    return <Login />;
  }

  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'preferences'
      ? SettingsPageTab.Preferences
      : !maybeTabStr
      ? SettingsPageTab.General
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: SettingsPage = {
    tab,
    basePath: `/settings`
  };

  return <SettingsPage {...props} />;
};

export const SettingsPageRoute: RouteProps = {
  exact: true,
  path: '/settings/:tab?',
  component: SettingsPageRouter
};
