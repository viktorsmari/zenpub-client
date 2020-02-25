import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionOutboxActivities.generated';

export const useCollectionOutboxActivities = (
  collectionId: Collection['id']
) => {
  const collectionQ = GQL.useCollectionOutboxActivitiesQuery({
    variables: { collectionId }
  });

  const activities = useMemo<GQL.CollectionOutboxActivityFragment[]>(
    () =>
      (collectionQ.data?.collection?.outbox?.edges || [])
        .map(activityEdge => activityEdge && activityEdge.node)
        .filter(
          (
            maybeActivity
          ): maybeActivity is GQL.CollectionOutboxActivityFragment =>
            !!maybeActivity
        ),
    [collectionQ]
  );

  return useMemo(
    () => ({
      activities
    }),
    [activities]
  );
};
