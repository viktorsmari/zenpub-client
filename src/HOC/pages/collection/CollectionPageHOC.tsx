import React, { SFC, useMemo } from 'react';
import { Collection } from 'graphql/types.generated';
import CollectionPage, {
  Props as CollectionPageProps
} from 'ui/pages/collection';
import { useCollectionPageQuery } from './CollectionPage.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroCollectionHOC } from 'HOC/modules/HeroCollection/HeroCollectionHOC';

export interface Props {
  collectionId: Collection['id'];
}
export const CollectionPageHOC: SFC<Props> = ({ collectionId }) => {
  const collectionQ = useCollectionPageQuery({ variables: { collectionId } });
  const collectionPageProps = useMemo<CollectionPageProps | null>(
    () => {
      if (
        collectionQ.error ||
        collectionQ.loading ||
        !collectionQ.data ||
        !collectionQ.data.collection ||
        !collectionQ.data.collection.outbox ||
        !collectionQ.data.collection.outbox.edges
      ) {
        return null;
      }
      const activityEdges = collectionQ.data.collection.outbox.edges;

      const ActivityBoxes = activityEdges
        .map(edge => {
          if (!edge) {
            return null;
          }
          return <ActivityPreviewHOC activityId={edge.node.id} />;
        })
        .filter((_): _ is JSX.Element => !!_);
      const HeroCollectionBox = (
        <HeroCollectionHOC collectionId={collectionId} />
      );

      const props: CollectionPageProps = {
        ActivityBoxes,
        HeroCollectionBox
      };
      return props;
    },
    [collectionQ]
  );
  return collectionPageProps && <CollectionPage {...collectionPageProps} />;
};
