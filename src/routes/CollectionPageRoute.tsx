import React, { FC } from 'react';
import {
  CollectionPageTab,
  CollectionPage
} from 'HOC/pages/collection/CollectionPage';
import NotFound from 'pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

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
    maybeTabStr === 'resources'
      ? CollectionPageTab.Resources
      : !maybeTabStr
      ? CollectionPageTab.Activities
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: CollectionPage = {
    collectionId,
    tab,
    basePath: `/collections/${collectionId}`
  };
  return <CollectionPage {...props} />;
};

export const CollectionPageRoute: RouteProps = {
  exact: true,
  path: '/collections/:collectionId/:tab?',
  component: CollectionPageRouter
};
