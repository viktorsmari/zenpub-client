import { FeaturedCollections } from 'HOC/modules/FeaturedCollections/featuredCollections';
import React, { FC, useMemo } from 'react';
import { Discover, Props } from 'ui/pages/discover';
import { useInstanceOutboxActivities } from 'fe/activities/outbox/instance/useInstanceOutboxActivities';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { FeaturedCommunities } from 'HOC/modules/FeaturedCommunities/featuredCommunities';
import { useAllCommunities } from 'fe/community/all/useAllCommunities';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { useAllCollections } from 'fe/collection/all/useAllCollections';

export enum DiscoverPageTabs {
  Activities = 1,
  Communities,
  Collections
}
export interface DiscoverPage {
  tab: DiscoverPageTabs;
}
export const DiscoverPage: FC<DiscoverPage> = (
  {
    /* tab */
  }
) => {
  const { activitiesPage } = useInstanceOutboxActivities();
  const { allCommunitiesPage } = useAllCommunities();
  const { allCollectionsPage } = useAllCollections();
  const propsUI = useMemo<Props>(() => {
    const FeaturedCollectionsBox = <FeaturedCollections />;
    const FeaturedCommunitiesBox = <FeaturedCommunities />;
    const ActivitiesBox = (
      <>
        {activitiesPage.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} />
        ))}
      </>
    );

    const CollectionsBoxes = (
      <>
        {allCollectionsPage.edges.map(collection => (
          <CollectionPreviewHOC collectionId={collection.id} />
        ))}
      </>
    );
    const CommunitiesBoxes = (
      <>
        {allCommunitiesPage.edges.map(community => (
          <CommunityPreviewHOC communityId={community.id} />
        ))}
      </>
    );

    const props: Props = {
      ActivitiesBox,
      FeaturedCollectionsBox,
      FeaturedCommunitiesBox,
      CollectionsBoxes,
      CommunitiesBoxes
    };

    return props;
  }, [activitiesPage, allCommunitiesPage]);

  return <Discover {...propsUI} />;
};
