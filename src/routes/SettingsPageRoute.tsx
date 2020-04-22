import { SettingsPage, SettingsPageTab } from 'HOC/pages/settings/SettingsPage';
import { NotFound } from 'ui/pages/notFound';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';

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
      : maybeTabStr === 'logs'
      ? SettingsPageTab.ModerationLogs
      : maybeTabStr === 'invites'
      ? SettingsPageTab.Invites
      : maybeTabStr === 'instance'
      ? SettingsPageTab.Instance
      : maybeTabStr === 'flags'
      ? SettingsPageTab.Flags
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
    <RedirectAnonymousToLogin>
      <WithoutSidebarTemplate>
        <SettingsPage {...props} />
      </WithoutSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const SettingsPageRoute: RouteProps = {
  exact: true,
  path: '/settings/:tab?',
  component: SettingsPageRouter
};
