import ShareLinkModal from 'components/elements/CollectionModal';
import { Collection } from 'graphql/types.generated';
import UploadResourcePanelHOC from 'HOC/modules/AddResource/UploadResourceHOC';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { HeroCollectionHOC } from 'HOC/modules/HeroCollection/HeroCollectionHOC';
import React, {
  createContext,
  SFC,
  useContext,
  useEffect,
  useMemo
} from 'react';
import CollectionPage, {
  Props as CollectionPageProps
} from 'ui/pages/collection';
import * as GQL from './CollectionPage.generated';
import { CPActivityBoxes } from './CollectionPageActivityBoxes';
import { CPResourceActivityBoxes } from './CollectionPageResourceActivityBoxes';

export interface Props {
  collectionId: Collection['id'];
}

export interface CollectionPageCtx {
  useCollectionPageQuery: typeof GQL.useCollectionPageQuery;
}

const CollectionPageCtx = createContext<CollectionPageCtx>({
  useCollectionPageQuery: GQL.useCollectionPageQuery
});
export const CollectionPageHOC: SFC<Props> = ({ collectionId }) => {
  const { useCollectionPageQuery } = useContext(CollectionPageCtx);
  const collectionQ = useCollectionPageQuery({ variables: { collectionId } });
  useEffect(() => {
    collectionQ.refetch();
  }, []);

  const collectionPageProps = useMemo<CollectionPageProps | null>(
    () => {
      if (
        collectionQ.error ||
        collectionQ.loading ||
        !collectionQ.data ||
        !collectionQ.data.collection
      ) {
        return null;
      }

      const ResourcesBox = (
        <CPResourceActivityBoxes collectionId={collectionId} />
      );
      const ActivitiesBox = <CPActivityBoxes collectionId={collectionId} />;

      const HeroCollectionBox = (
        <HeroCollectionHOC collectionId={collectionId} />
      );

      const EditCollectionPanel: CollectionPageProps['EditCollectionPanel'] = ({
        done
      }) => <EditCollectionPanelHOC done={done} collectionId={collectionId} />;

      const UploadResourcePanel: CollectionPageProps['UploadResourcePanel'] = ({
        done
      }) => <UploadResourcePanelHOC done={done} collectionId={collectionId} />;

      const ShareLinkModalPanel: CollectionPageProps['ShareLinkModalPanel'] = ({
        done
      }) => {
        return (
          <ShareLinkModal
            toggleModal={done}
            modalIsOpen={true}
            collectionId={collectionId}
            collectionExternalId={collectionId}
          />
        );
      };

      const props: CollectionPageProps = {
        ActivitiesBox,
        ShareLinkModalPanel,
        HeroCollectionBox,
        ResourcesBox,
        EditCollectionPanel,
        UploadResourcePanel,
        basePath: `/collections/${collectionId}`
      };
      return props;
    },
    [collectionQ]
  );
  return collectionPageProps && <CollectionPage {...collectionPageProps} />;
};
