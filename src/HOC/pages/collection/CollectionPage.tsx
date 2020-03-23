import ShareLinkModal from 'components/elements/CollectionModal';
import { useCollectionOutboxActivities } from 'fe/activities/outbox/collection/useCollectionOutboxActivities';
import { useCollectionResources } from 'fe/resource/collection/useCollectionResources';
import { Collection } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import UploadResourcePanelHOC from 'HOC/modules/AddResource/UploadResourceHOC';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { HeroCollection } from 'HOC/modules/HeroCollection/HeroCollection';
import { ResourcePreviewHOC } from 'HOC/modules/previews/resource/ResourcePreview';
import React, { FC, useMemo } from 'react';
import CollectionPageUI, {
  Props as CollectionPageProps
} from 'ui/pages/collection';
import { Box } from 'rebass';

export enum CollectionPageTab {
  Activities,
  Resources
}
export interface CollectionPage {
  collectionId: Collection['id'];
  tab: CollectionPageTab;
  basePath: string;
}

export const CollectionPage: FC<CollectionPage> = props => {
  const { activitiesPage: activities } = useCollectionOutboxActivities(
    props.collectionId
  );
  const { resourcesPage: resources } = useCollectionResources(
    props.collectionId
  );
  const collectionPageProps = useMemo<CollectionPageProps | null>(() => {
    const {
      collectionId,
      basePath
      //tab
    } = props;

    const HeroCollectionBox = <HeroCollection collectionId={collectionId} />;

    const ActivitiesBox = (
      <>
        {activities.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const ResourcesBox = (
      <>
        {resources.edges.map(resource => (
          <Box mx={2} my={1}>
            <ResourcePreviewHOC resourceId={resource.id} key={resource.id} />
          </Box>
        ))}
      </>
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

    const uiProps: CollectionPageProps = {
      ActivitiesBox,
      ShareLinkModalPanel,
      HeroCollectionBox,
      ResourcesBox,
      EditCollectionPanel,
      UploadResourcePanel,
      basePath
    };
    return uiProps;
  }, [props, activities, resources]);
  return collectionPageProps && <CollectionPageUI {...collectionPageProps} />;
};
