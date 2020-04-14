import React, { FC, useMemo } from 'react';
import { Home, HomePageTab, Props } from 'pages/home';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';
import NotFound from 'pages/not-found/NotFound';

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
    <RedirectToLoginIfNotLoggedIn>
      <WithSidebarTemplate>
        <Home {...homeProps} />
      </WithSidebarTemplate>
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const HomePageRoute: RouteProps = {
  exact: true,
  path: '/:tab?',
  component: HomePageRouter
};
