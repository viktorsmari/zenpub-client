import { useUserPreview } from 'fe/user/preview/useUserPreview';
import { User } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  User as UserPreviewUI,
  Props as UserPreviewProps
} from 'ui/modules/Previews/User';

export interface Props {
  userId: User['id'];
}

export const UserPreviewHOC: FC<Props> = ({ userId }) => {
  const { user } = useUserPreview(userId);

  const userPreviewProps = useMemo<UserPreviewProps | null>(() => {
    if (!user) {
      return null;
    }

    const { userName, displayUsername, image, icon, summary } = user;

    const props: UserPreviewProps = {
      image: icon || image || '',
      name: userName || '',
      username: displayUsername,
      bio: summary || ''
    };
    return props;
  }, [user]);

  return userPreviewProps && <UserPreviewUI {...userPreviewProps} />;
};
