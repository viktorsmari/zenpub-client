import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionResources.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useCollectionResources = (collectionId: Collection['id']) => {
  const collectionQ = GQL.useCollectionResourcesQuery({
    variables: { collectionId }
  });

  const resourcesPage = usePage(collectionQ.data?.collection?.resources);

  return useMemo(
    () => ({
      resourcesPage
    }),
    [resourcesPage]
  );
};
