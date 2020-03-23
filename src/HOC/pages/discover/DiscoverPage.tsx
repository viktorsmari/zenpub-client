import { FeaturedCollections } from 'HOC/modules/FeaturedCollections/featuredCollections';
import React, { FC, useMemo } from 'react';
import { Discover, Props } from 'ui/pages/discover';
import { useInstanceOutboxActivities } from 'fe/activities/outbox/instance/useInstanceOutboxActivities';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { FeaturedCommunities } from 'HOC/modules/FeaturedCommunities/featuredCommunities';

export interface DiscoverPage {}
export const DiscoverPage: FC<DiscoverPage> = () => {
  const { activitiesPage } = useInstanceOutboxActivities();
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

    const props: Props = {
      ActivitiesBox,
      FeaturedCollectionsBox,
      FeaturedCommunitiesBox
    };

    return props;
  }, [activitiesPage]);

  return <Discover {...propsUI} />;
};
