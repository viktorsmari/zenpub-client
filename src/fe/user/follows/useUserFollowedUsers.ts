import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedUsers.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedUsers = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedUsersQuery({
    variables: { userId }
  });

  const users = useMemo<GQL.UserFollowedUserFragment[]>(
    () =>
      manageEdges(userQ.data?.user?.followedUsers).nodes.map(
        followedUser => followedUser.user
      ),
    [userQ]
  );

  return useMemo(
    () => ({
      users
    }),
    [users]
  );
};
