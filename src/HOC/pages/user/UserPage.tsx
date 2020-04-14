import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { useUserFollowedCollections } from 'fe/collection/user/useUserFollowedCollections';
import { useUserFollowedCommunities } from 'fe/community/user/useUserFollowedCommunities';
import { useUserFollowedUsers } from 'fe/user/followed/user/useUserFollowedUsers';
import { useUser } from 'fe/user/useUser';
import { User } from 'graphql/types.generated';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import React, { FC, useMemo } from 'react';
import { Box } from 'rebass';
import { Props, User as UserPageUI } from 'ui/pages/user';
export interface UserPage {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export enum UserPageTab {
  Activities,
  Likes,
  Communities,
  Collections,
  Following
}
export const UserPage: FC<UserPage> = ({ userId, basePath }) => {
  const user = useUser(userId);
  const { activitiesPage } = useUserOutboxActivities(userId);
  const { followedCollectionsPage } = useUserFollowedCollections(userId);
  const { followedCommunitiesPage } = useUserFollowedCommunities(userId);
  const { followedUsersPage } = useUserFollowedUsers(userId);
  const userPageProps = useMemo<Props>(() => {
    const {
      totalActivities,
      totalCollections,
      totalCommunities,
      totalUsers
    } = user;
    const ActivityBoxes = (
      <>
        {activitiesPage.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );
    const CollectionsBoxes = (
      <>
        {followedCollectionsPage.edges.map(follow => (
          <Box m={2} mb={0} key={follow.collection.id}>
            <CollectionPreviewHOC
              collectionId={follow.collection.id}
              key={follow.collection.id}
            />
          </Box>
        ))}
      </>
    );
    const CommunityBoxes = (
      <>
        {followedCommunitiesPage.edges.map(follow => (
          <CommunityPreviewHOC
            communityId={follow.community.id}
            key={follow.community.id}
          />
        ))}
      </>
    );

    const UserBoxes = (
      <>
        {followedUsersPage.edges.map(follow => (
          <UserPreviewHOC
            userId={follow.user.userId}
            key={follow.user.userId}
          />
        ))}
      </>
    );

    const HeroUserBox = <HeroUser userId={userId} />;

    const props: Props = {
      basePath,
      ActivityBoxes,
      HeroUserBox,
      CollectionsBoxes,
      CommunityBoxes,
      UserBoxes,
      userName: user.user?.name || '',
      totalActivities: `${totalActivities || '0'}`,
      totalCollections: `${totalCollections || '0'}`,
      totalCommunities: `${totalCommunities || '0'}`,
      totalUsers: `${totalUsers || '0'}`,
      userLink: user.user?.website || ''
    };
    return props;
  }, [
    activitiesPage,
    basePath,
    user,
    followedCollectionsPage,
    followedCommunitiesPage,
    followedUsersPage
  ]);
  return <UserPageUI {...userPageProps} />;
};
