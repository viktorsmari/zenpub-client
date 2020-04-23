import React, { FC, useMemo } from 'react';
import {
  CollectionPageTab,
  CollectionPage
} from 'HOC/pages/collection/CollectionPage';
import { NotFound } from 'ui/pages/notFound';
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
    maybeTabStr === 'followers'
      ? CollectionPageTab.Followers
      : maybeTabStr === 'activities'
      ? CollectionPageTab.Activities
      : !maybeTabStr
      ? CollectionPageTab.Resources
      : null;

  const props = useMemo<CollectionPage | null>(
    () =>
      tab === null
        ? null
        : {
            collectionId,
            tab,
            basePath: `/collections/${collectionId}`
          },
    [collectionId, tab]
  );

  if (!props) {
    return <NotFound />;
  }

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
