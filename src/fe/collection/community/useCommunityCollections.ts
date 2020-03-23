import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export interface Props {
  communityId: Community['id'];
}

export const useCommunityCollections = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityCollectionsQuery({
    variables: { communityId }
  });

  const collectionsPage = usePage(communityQ.data?.community?.collections);

  return useMemo(
    () => ({
      collectionsPage
    }),
    [collectionsPage]
  );
};
