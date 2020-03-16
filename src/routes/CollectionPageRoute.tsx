import React, { FC } from 'react';
import {
  CollectionPageTab,
  CollectionPage
} from 'HOC/pages/collection/CollectionPage';
import NotFound from 'pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface CollectionPageRouter {
  collectionId: string;
  tab?: string;
}
const CollectionPageRouter: FC<RouteComponentProps<CollectionPageRouter>> = ({
  match
}) => {
  const collectionId = match.params.collectionId;
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'activities'
      ? CollectionPageTab.Activities
      : !maybeTabStr
      ? CollectionPageTab.Resources
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: CollectionPage = {
    collectionId,
    tab,
    basePath: `/collections/${collectionId}`
  };
  return (
    <WithSidebarTemplate>
      <CollectionPage {...props} />
    </WithSidebarTemplate>
  );
};

export const CollectionPageRoute: RouteProps = {
  exact: true,
  path: '/collections/:collectionId/:tab?',
  component: CollectionPageRouter
};
