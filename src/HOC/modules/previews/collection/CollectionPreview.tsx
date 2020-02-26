import { Collection } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Collection as CollectionPreviewUI,
  Props as CollectionPreviewProps
} from 'ui/modules/Previews/Collection';
import { useCollectionPreview } from 'fe/collection/preview/useCollectionPreview';

export interface Props {
  collectionId: Collection['id'];
}

export const CollectionPreviewHOC: FC<Props> = ({ collectionId }) => {
  const { collection } = useCollectionPreview(collectionId);

  const collectionPreviewProps = useMemo<CollectionPreviewProps | null>(() => {
    if (!collection) {
      return null;
    }

    const {
      icon,
      isLocal,
      canonicalUrl,
      name,
      summary,
      resourceCount,
      displayUsername,
      myFollow
    } = collection;

    const props: CollectionPreviewProps = {
      displayUsername,
      icon: icon || '',
      isFollowing: !!myFollow,
      link: {
        url: isLocal ? `/collections/${collectionId}` : canonicalUrl || '',
        external: !isLocal
      },
      name,
      summary: summary || '',
      totalResources: resourceCount || null
    };
    return props;
  }, [collection]);

  return (
    collectionPreviewProps && (
      <CollectionPreviewUI {...collectionPreviewProps} />
    )
  );
};
