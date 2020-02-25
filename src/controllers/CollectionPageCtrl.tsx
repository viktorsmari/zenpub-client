import { useCollectionOutboxActivities } from 'fe/activities/outbox/collection/useCollectionOutboxActivities';
import { useCollectionResources } from 'fe/resource/collection/useCollectionResources';
import { Collection } from 'graphql/types.generated';
import {
  CollectionPage,
  CollectionPageTab
} from 'HOC/pages/collection/CollectionPage';
import React, { FC, useMemo } from 'react';
export { CollectionPageTab } from 'HOC/pages/collection/CollectionPage';

export interface CollectionPageCtrl {
  collectionId: Collection['id'];
  tab: CollectionPageTab;
  basePath: string;
}

export const CollectionPageCtrl: FC<CollectionPageCtrl> = ({
  collectionId,
  tab,
  basePath
}) => {
  const { activities } = useCollectionOutboxActivities(collectionId);
  const { resources } = useCollectionResources(collectionId);
  const collectionPageProps = useMemo<CollectionPage>(() => {
    const props: CollectionPage = {
      activities,
      collectionId,
      resources,
      tab,
      basePath
    };
    return props;
  }, [activities, collectionId, resources, tab, basePath]);
  return collectionPageProps && <CollectionPage {...collectionPageProps} />;
};
