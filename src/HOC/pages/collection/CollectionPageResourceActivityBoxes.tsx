import { Collection } from 'graphql/types.generated';
import React, { createContext, SFC, useContext } from 'react';
import { CPResourceActivity } from './CollectionPageResourceActivity';
import * as GQL from './CollectionPageResourceActivityBoxes.generated';

export interface CPResourceActivityBoxesCtx {
  useCollectionPageResourceActivitiesQuery: typeof GQL.useCollectionPageResourceActivitiesQuery;
}
export const CPResourceActivityBoxesCtx = createContext<
  CPResourceActivityBoxesCtx
>({
  useCollectionPageResourceActivitiesQuery:
    GQL.useCollectionPageResourceActivitiesQuery
});
export const CPResourceActivityBoxes: SFC<{
  collectionId: Collection['id'];
}> = ({ collectionId }) => {
  const { useCollectionPageResourceActivitiesQuery } = useContext(
    CPResourceActivityBoxesCtx
  );
  const collectionQ = useCollectionPageResourceActivitiesQuery({
    variables: { collectionId }
  });
  if (
    collectionQ.error ||
    collectionQ.loading ||
    !collectionQ.data ||
    !collectionQ.data.collection ||
    !collectionQ.data.collection.resources ||
    !collectionQ.data.collection.resources.edges
  ) {
    return null;
  }
  return (
    <>
      {collectionQ.data.collection.resources.edges
        .map(edge => {
          if (!edge || !edge.node) {
            return null;
          }
          const resource = edge.node;
          return <CPResourceActivity resource={resource} key={resource.id} />;
        })
        .filter((_): _ is JSX.Element => !!_)}
    </>
  );
};
