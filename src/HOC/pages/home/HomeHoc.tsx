import { useMyOutboxActivities } from 'fe/activities/outbox/my/useMyOutboxActivities';
import { useMyFollowedCollections } from 'fe/collection/myFollowed/myFollowedCollections';
import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import { useFormikPage } from 'fe/lib/helpers/usePage';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import React, { FC, useMemo } from 'react';
import { Home, HomePageTab, Props } from 'ui/pages/home';
import { MyFollowedCommunityDataFragment } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { MyFollowedCollectionDataFragment } from 'fe/collection/myFollowed/myFollowedCollections.generated';
export { HomePageTab } from 'ui/pages/home';

export interface HomePageHOC {
  tab: HomePageTab;
}

export const HomePageHOC: FC<HomePageHOC> = ({ tab }) => {
  const { myCommunityFollowsPage } = useMyFollowedCommunities();
  const [nextCommunitiesFormik] = useFormikPage(myCommunityFollowsPage);
  const FollowedCommunitiesElements = useMemo<
    Props['FollowedCommunitiesElements']
  >(() => {
    return (
      <>
        {myCommunityFollowsPage
          .edges!.map(follow => follow.context)
          .filter(
            (context): context is MyFollowedCommunityDataFragment =>
              context.__typename === 'Community'
          )
          .map(community => (
            <CommunityPreviewHOC
              communityId={community.id}
              key={community.id}
            />
          ))}
      </>
    );
  }, [myCommunityFollowsPage]);

  const {
    myCollectionFollowsPage: myFollowedCollectionsPage
  } = useMyFollowedCollections();
  const [nextCollectionsFormik] = useFormikPage(myFollowedCollectionsPage);
  const FollowedCollectionsElements = useMemo<
    Props['FollowedCollectionsElements']
  >(() => {
    return (
      <>
        {myFollowedCollectionsPage
          .edges!.map(follow => follow.context)
          .filter(
            (context): context is MyFollowedCollectionDataFragment =>
              context.__typename === 'Collection'
          )
          .map(collection => (
            <CollectionPreviewHOC
              collectionId={collection.id}
              key={collection.id}
            />
          ))}
      </>
    );
  }, [myFollowedCollectionsPage]);

  const { activitiesPage } = useMyOutboxActivities();
  const [nextInboxFormik] = useFormikPage(activitiesPage);
  const InboxElements = useMemo<Props['InboxElements']>(() => {
    return (
      <>
        {activitiesPage.edges!.map(
          userActivityEdge =>
            userActivityEdge && (
              <ActivityPreviewHOC
                activityId={userActivityEdge.id}
                key={userActivityEdge.id}
              />
            )
        )}
      </>
    );
  }, [activitiesPage]);

  const homeProps = useMemo<Props>(() => {
    const props: Props = {
      InboxElements,
      FollowedCollectionsElements,
      FollowedCommunitiesElements,
      nextCollectionsFormik,
      nextCommunitiesFormik,
      nextInboxFormik,
      tab
    };
    return props;
  }, [
    InboxElements,
    FollowedCollectionsElements,
    FollowedCommunitiesElements,
    nextCollectionsFormik,
    nextCommunitiesFormik,
    nextInboxFormik,
    tab
  ]);
  return <Home {...homeProps} />;
};
