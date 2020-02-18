import { Community, Collection } from 'graphql/types.generated';
import { CommunityPageCollectionsCtx } from 'HOC/pages/community/CommunityPageCollections';
import React, { FC, useMemo } from 'react';
import * as GQL from './CommunityPageCollectionsCtx.generated';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageCollectionsCtxProvider: FC<Props> = ({
  communityId,
  children
}) => {
  const communityQ = GQL.useCommunityPageCollectionsQuery({
    variables: { communityId }
  });

  const collectionsIds = useMemo(
    () =>
      (communityQ.data?.community?.collections?.edges || [])
        .map(collection => collection?.node.id)
        .filter((_): _ is Collection['id'] => !!_),
    [communityQ]
  );

  const ctx = useMemo<CommunityPageCollectionsCtx>(
    () => ({
      collectionsIds
    }),
    [collectionsIds]
  );

  return (
    <CommunityPageCollectionsCtx.Provider value={ctx}>
      {children}
    </CommunityPageCollectionsCtx.Provider>
  );
};
