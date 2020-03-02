import { SettingsPage, SettingsPageTab } from 'HOC/pages/settings/SettingsPage';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';
import NotFound from 'pages/not-found/NotFound';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface SettingsPageRouter {
  tab?: string;
}
const SettingsPageRouter: FC<RouteComponentProps<SettingsPageRouter>> = ({
  match
}) => {
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

  return (
    <RedirectToLoginIfNotLoggedIn>
      <SettingsPage {...props} />;
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const SettingsPageRoute: RouteProps = {
  exact: true,
  path: '/settings/:tab?',
  component: SettingsPageRouter
};
