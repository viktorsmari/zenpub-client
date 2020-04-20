import React, { FC, useMemo } from 'react';
import { Home, HomePageTab, Props } from 'pages/home';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { NotFound } from 'ui/pages/notFound';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';

interface HomePageRouter {
  tab?: string;
}
const HomePageRouter: FC<RouteComponentProps<HomePageRouter>> = ({ match }) => {
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'mycommunities'
      ? HomePageTab.MyCommunities
      : maybeTabStr === 'mycollections'
      ? HomePageTab.MyCollections
      : !maybeTabStr
      ? HomePageTab.Activities
      : null;

  const homeProps: Props | null = useMemo(() => {
    if (!tab) {
      return null;
    }
    return { tab };
  }, [tab]);

  if (!homeProps) {
    return <NotFound />;
  }

  return (
    <RedirectAnonymousToLogin>
      <WithSidebarTemplate>
        <Home {...homeProps} />
      </WithSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const HomePageRoute: RouteProps = {
  exact: true,
  path: '/:tab?',
  component: HomePageRouter
};
