import React, { SFC, useMemo } from 'react';
import { Collection } from 'graphql/types.generated';
import CollectionPage, {
  Props as CollectionPageProps
} from 'ui/pages/collection';

export interface Props {
  collectionId: Collection['id'];
}
export const CollectionPageHOC: SFC<Props> = ({ collectionId }) => {
  const collectionQ = useColl;
  const collectionPageProps = useMemo<CollectionPageProps | null>(
    () => {
      s;
    },
    [collectionQ]
  );
  return collectionPageProps && <CollectionPage {...collectionPageProps} />;
};
