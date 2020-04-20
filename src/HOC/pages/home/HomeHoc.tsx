import { useMyOutboxActivities } from 'fe/activities/outbox/my/useMyOutboxActivities';
import { useMyFollowedCollections } from 'fe/collection/myFollowed/myFollowedCollections';
import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import { useFormikPage } from 'fe/lib/helpers/usePage';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import React, { FC, useMemo } from 'react';
import { Home, HomePageTab, Props } from 'ui/pages/home';
export { HomePageTab } from 'ui/pages/home';

export interface HomePageHOC {
  tab: HomePageTab;
}

export const HomePageHOC: FC<HomePageHOC> = ({ tab }) => {
  const { myFollowedCommunitiesPage } = useMyFollowedCommunities();
  const [nextCommunitiesFormik] = useFormikPage(myFollowedCommunitiesPage);
  const FollowedCommunitiesElements = useMemo<
    Props['FollowedCommunitiesElements']
  >(() => {
    return (
      <>
        {myFollowedCommunitiesPage.edges!.map(
          followedCommunityEdge =>
            followedCommunityEdge && (
              <CommunityPreviewHOC
                communityId={followedCommunityEdge.community.id}
                key={followedCommunityEdge.community.id}
              />
            )
        )}
      </>
    );
  }, [myFollowedCommunitiesPage]);

  const { myFollowedCollectionsPage } = useMyFollowedCollections();
  const [nextCollectionsFormik] = useFormikPage(myFollowedCollectionsPage);
  const FollowedCollectionsElements = useMemo<
    Props['FollowedCollectionsElements']
  >(() => {
    return (
      <>
        {myFollowedCollectionsPage.edges!.map(
          followedCollectionEdge =>
            followedCollectionEdge && (
              <CollectionPreviewHOC
                collectionId={followedCollectionEdge.collection.id}
                key={followedCollectionEdge.collection.id}
              />
            )
        )}
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
