import React, { SFC, createContext, useContext } from 'react';
import { Collection } from 'graphql/types.generated';
import * as GQL from './CollectionPageActivityBoxes.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';

export interface CPActivityBoxesCtx {
  useCollectionPageActivitiesQuery: typeof GQL.useCollectionPageActivitiesQuery;
}
export const CPActivityBoxesCtx = createContext<CPActivityBoxesCtx>({
  useCollectionPageActivitiesQuery: GQL.useCollectionPageActivitiesQuery
});

export interface CPActivityBoxes {
  collectionId: Collection['id'];
}
export const CPActivityBoxes: SFC<CPActivityBoxes> = ({ collectionId }) => {
  const { useCollectionPageActivitiesQuery } = useContext(CPActivityBoxesCtx);
  const collectionQ = useCollectionPageActivitiesQuery({
    variables: { collectionId }
  });
  console.log(collectionQ);
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
  return (
    <>
      {collectionQ.data.collection.outbox.edges.map(edge => {
        if (!edge) {
          return null;
        }
        const id = edge.node.id;
        return <ActivityPreviewHOC activityId={id} key={id} />;
      })}
    </>
  );
};
