import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { User } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import React, { FC, useMemo } from 'react';
import { Props, User as UserPageUI } from 'ui/pages/user';
import { useUser } from 'fe/user/useUser';
import { useUserFollowedCollections } from 'fe/collection/user/useUserFollowedCollections';
import { useUserFollowedCommunities } from 'fe/community/user/useUserFollowedCommunities';
import { useUserFollowedUsers } from 'fe/user/follows/useUserFollowedUsers';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';

export interface UserPage {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export enum UserPageTab {
  Activities,
  Likes
}
export const UserPage: FC<UserPage> = ({ userId, basePath }) => {
  const user = useUser(userId);
  const { activities } = useUserOutboxActivities(userId);
  const { collections } = useUserFollowedCollections(userId);
  const { communities } = useUserFollowedCommunities(userId);
  const { users } = useUserFollowedUsers(userId);
  const userPageProps = useMemo<Props>(() => {
    const {
      totalActivities,
      totalCollections,
      totalCommunities,
      totalUsers
    } = user;
    const ActivityBoxes = (
      <>
        {activities.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );
    const CollectionsBoxes = (
      <>
        {collections.map(collection => (
          <CollectionPreviewHOC
            collectionId={collection.id}
            key={collection.id}
          />
        ))}
      </>
    );
    const CommunityBoxes = (
      <>
        {communities.map(community => (
          <CommunityPreviewHOC communityId={community.id} key={community.id} />
        ))}
      </>
    );

    const UserBoxes = (
      <>
        {users.map(user => (
          <UserPreviewHOC userId={user.userId} key={user.userId} />
        ))}
      </>
    );

    const HeroUserBox = <HeroUser userId={userId} />;
    const Header = <></>;

    const props: Props = {
      basePath,
      ActivityBoxes,
      HeroUserBox,
      CollectionsBoxes,
      CommunityBoxes,
      UserBoxes,
      Header,
      totalActivities: `${totalActivities || '...'}`,
      totalCollections: `${totalCollections || '...'}`,
      totalCommunities: `${totalCommunities || '...'}`,
      totalUsers: `${totalUsers || '...'}`
    };
    return props;
  }, [activities, basePath, user, collections, communities, users]);
  return <UserPageUI {...userPageProps} />;
};
