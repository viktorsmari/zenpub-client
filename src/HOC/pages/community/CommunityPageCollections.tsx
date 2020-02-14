import { Community } from 'graphql/types.generated';
import { CollectionPreviewHOC } from 'HOC/modules/CollectionPreview/CollectionPreviewHOC';
import React, { createContext, SFC, useContext } from 'react';
import * as GQL from './CommunityPageCollections.generated';

export interface Props {
  communityId: Community['id'];
}

export interface CommunityPageCollectionsCtx {
  useCommunityPageCollectionsQuery: typeof GQL.useCommunityPageCollectionsQuery;
}
export const CommunityPageCollectionsCtx = createContext<
  CommunityPageCollectionsCtx
>({
  useCommunityPageCollectionsQuery: GQL.useCommunityPageCollectionsQuery
});

export const CommunityPageCollections: SFC<Props> = ({ communityId }) => {
  const { useCommunityPageCollectionsQuery } = useContext(
    CommunityPageCollectionsCtx
  );

  const communityQ = useCommunityPageCollectionsQuery({
    variables: { communityId }
  });
  if (
    communityQ.error ||
    communityQ.loading ||
    !communityQ.data ||
    !communityQ.data.community ||
    !communityQ.data.community.collections ||
    !communityQ.data.community.collections.edges
  ) {
    return null;
  }
  return (
    <>
      {communityQ.data.community.collections.edges.map(edge => {
        if (!edge) {
          return null;
        }
        const id = edge.node.id;
        return <CollectionPreviewHOC id={id} key={id} />;
      })}
    </>
  );
};
