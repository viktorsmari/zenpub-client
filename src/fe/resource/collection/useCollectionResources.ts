import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionResources.generated';

export const useCollectionResources = (collectionId: Collection['id']) => {
  const collectionQ = GQL.useCollectionResourcesQuery({
    variables: { collectionId }
  });

  const resources = useMemo<GQL.CollectionResourceFragment[]>(
    () =>
      (collectionQ.data?.collection?.resources?.edges || [])
        .map(resourceEdge => resourceEdge?.node)
        .filter(
          (maybeResource): maybeResource is GQL.CollectionResourceFragment =>
            !!maybeResource
        ),
    [collectionQ]
  );

  return useMemo(
    () => ({
      resources
    }),
    [resources]
  );
};
