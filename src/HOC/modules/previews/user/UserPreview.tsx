import { useUserPreview } from 'fe/user/preview/useUserPreview';
import { User } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  User as UserPreviewUI /* , Props as UserPreviewProps */
} from 'ui/modules/Previews/User';

export interface Props {
  userId: User['id'];
}

export const UserPreviewHOC: FC<Props> = ({ userId }) => {
  const { user } = useUserPreview(userId);

  const userPreviewProps = useMemo</* UserPreviewProps */ {} | null>(() => {
    if (!user) {
      return null;
    }

    const {
      // icon,
      // name,
      // summary,
      // myFollow,
      // collectionCount,
      // followerCount,
      // threads
    } = user;

    const props /* : UserPreviewProps */ = {
      // icon: icon || '',
      // name,
      // summary: summary || '',
      // collectionsCount:collectionCount || 0,
      // followed: !!myFollow,
      // followersCount:followerCount || 0,
      // threadsCount:threads?.totalCount || 0
    };
    return props;
  }, [user]);

  return userPreviewProps && <UserPreviewUI {...userPreviewProps} />;
};
