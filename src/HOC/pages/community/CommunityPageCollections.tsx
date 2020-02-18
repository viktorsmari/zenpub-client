import { Collection } from 'graphql/types.generated';
import { CollectionPreviewHOC } from 'HOC/modules/CollectionPreview/CollectionPreviewHOC';
import React, { createContext, SFC, useContext } from 'react';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';

export interface Props {}

export interface CommunityPageCollectionsCtx {
  collectionsIds: Collection['id'][];
}
export const CommunityPageCollectionsCtx = createContext<
  CommunityPageCollectionsCtx
>(
  alertUnimplementedCtx<CommunityPageCollectionsCtx>(
    'CommunityPageCollectionsCtx'
  )
);

export const CommunityPageCollections: SFC<Props> = () => {
  const { collectionsIds } = useContext(CommunityPageCollectionsCtx);

  return (
    <>
      {collectionsIds.map(collectionId => (
        <CollectionPreviewHOC id={collectionId} key={collectionId} />
      ))}
    </>
  );
};
