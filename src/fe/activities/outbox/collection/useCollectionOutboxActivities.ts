import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useCollectionOutboxActivities = (
  collectionId: Collection['id']
) => {
  const collectionQ = GQL.useCollectionOutboxActivitiesQuery({
    variables: { collectionId }
  });

  const activitiesPage = usePage(collectionQ.data?.collection?.outbox);

  return useMemo(
    () => ({
      activitiesPage
    }),
    [activitiesPage]
  );
};
