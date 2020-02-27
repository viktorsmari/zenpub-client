import React, { SFC, useMemo, createContext, useContext } from 'react';
import {
  CollectionPreview,
  Props as CollectionPreviewProps
} from 'ui/modules/CollectionPreview';
import { Collection } from 'graphql/types.generated';
import * as GQL from './CollectionPreview.generated';

export interface Props {
  id: Collection['id'];
}

export interface CollectionPreviewCtx {
  useCollectionPreviewQuery: typeof GQL.useCollectionPreviewQuery;
}
export const CollectionPreviewCtx = createContext<CollectionPreviewCtx>({
  useCollectionPreviewQuery: GQL.useCollectionPreviewQuery
});

export const CollectionPreviewHOC: SFC<Props> = ({ id }) => {
  const { useCollectionPreviewQuery } = useContext(CollectionPreviewCtx);
  const collectionQ = useCollectionPreviewQuery({ variables: { id } });
  const collectionPreviewProps = useMemo<CollectionPreviewProps | null>(
    () => {
      if (
        collectionQ.error ||
        collectionQ.loading ||
        !collectionQ.data ||
        !collectionQ.data.collection
      ) {
        return null;
      }
      const {
        icon,
        isLocal,
        canonicalUrl,
        name,
        summary,
        resourceCount
      } = collectionQ.data.collection;
      const props: CollectionPreviewProps = {
        icon: icon || '',
        link: {
          url: isLocal ? `/collections/${id}` : canonicalUrl || '',
          external: !isLocal
        },
        name: name,
        summary: summary || '',
        totalResources: resourceCount || null
      };
      return props;
    },
    [collectionQ]
  );
  return (
    collectionPreviewProps && <CollectionPreview {...collectionPreviewProps} />
  );
};
