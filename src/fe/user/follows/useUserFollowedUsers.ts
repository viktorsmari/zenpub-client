import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedUsers.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedUsers = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedUsersQuery({
    variables: { userId }
  });

  const followedUsersPage = usePage(userQ.data?.user?.followedUsers);

  return useMemo(
    () => ({
      followedUsersPage
    }),
    [followedUsersPage]
  );
};
