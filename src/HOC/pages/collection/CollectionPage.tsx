import ShareLinkModal from 'components/elements/CollectionModal';
import { Collection } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import UploadResourcePanelHOC from 'HOC/modules/AddResource/UploadResourceHOC';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { HeroCollectionHOC } from 'HOC/modules/HeroCollection/HeroCollectionHOC';
import React, { FC, useMemo } from 'react';
import CollectionPageUI, {
  Props as CollectionPageProps
} from 'ui/pages/collection';
import * as GQL from './CollectionPage.generated';
import { ResourceActivityMock } from './ResourceActivityMock';

export enum CollectionPageTab {
  Activities,
  Resources
}
export interface CollectionPage {
  collectionId: Collection['id'];
  tab: CollectionPageTab;
  // collection: Maybe<GQL.CollectionPageDataFragment>
  resources: GQL.CollectionPageResourceFragment[];
  activities: GQL.CollectionPageActivityFragment[];
  basePath: string;
}

export const CollectionPage: FC<CollectionPage> = props => {
  const collectionPageProps = useMemo<CollectionPageProps | null>(() => {
    const {
      collectionId,
      activities,
      resources,
      basePath
      //tab
    } = props;

    const HeroCollectionBox = <HeroCollectionHOC collectionId={collectionId} />;

    const ActivitiesBox = (
      <>
        {activities.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const ResourcesBox = (
      <>
        {resources.map(resource => (
          <ResourceActivityMock resource={resource} key={resource.id} />
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
  }, [props]);
  return collectionPageProps && <CollectionPageUI {...collectionPageProps} />;
};
