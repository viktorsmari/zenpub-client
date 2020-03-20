import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionResources.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useCollectionResources = (collectionId: Collection['id']) => {
  const collectionQ = GQL.useCollectionResourcesQuery({
    variables: { collectionId }
  });

  const resources = useMemo<GQL.CollectionResourceFragment[]>(
    () => manageEdges(collectionQ.data?.collection?.resources).edges,
    [collectionQ]
  );

  return useMemo(
    () => ({
      resources
    }),
    [resources]
  );
};
