import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionOutboxActivities.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useCollectionOutboxActivities = (
  collectionId: Collection['id']
) => {
  const collectionQ = GQL.useCollectionOutboxActivitiesQuery({
    variables: { collectionId }
  });

  const activities = useMemo<GQL.CollectionOutboxActivityFragment[]>(
    () => manageEdges(collectionQ.data?.collection?.outbox).nodes,
    [collectionQ]
  );

  return useMemo(
    () => ({
      activities
    }),
    [activities]
  );
};
