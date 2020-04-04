import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedUsers.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedUsers = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedUsersQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const followedUsersPage = usePage(
    userQ.data?.user?.followedUsers,
    ({ cursor, update }) => {
      return userQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.followedUsers &&
            prev.user?.followedUsers
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  followedUsers: update({
                    prev: prev.user.followedUsers,
                    fetched: fetchMoreResult.user.followedUsers
                  })
                }
              }
            : prev;
        }
      });
    }
  );

  return useMemo(
    () => ({
      followedUsersPage
    }),
    [followedUsersPage]
  );
};
