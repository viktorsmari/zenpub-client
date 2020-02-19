import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { Community } from 'graphql/types.generated';
import { CollectionPreviewHOC } from 'HOC/modules/CollectionPreview/CollectionPreviewHOC';
import React, { SFC } from 'react';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageCollections: SFC<Props> = ({ communityId }) => {
  const { collections } = useCommunityCollections(communityId);

  return (
    <>
      {collections.map(collection => (
        <CollectionPreviewHOC id={collection.id} key={collection.id} />
      ))}
    </>
  );
};
