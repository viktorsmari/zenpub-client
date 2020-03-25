import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCommunities = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCommunitiesQuery({
    variables: { userId }
  });

  const followedCommunitiesPage = usePage(
    userQ.data?.user?.followedCommunities,
    ({ cursor, update }) => {
      userQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.followedCommunities &&
            prev.user?.followedCommunities
            ? update({
                prev: prev.user.followedCommunities,
                fetched: fetchMoreResult.user.followedCommunities
              })
            : prev;
        }
      });
    }
  );

  return useMemo(
    () => ({
      followedCommunitiesPage
    }),
    [followedCommunitiesPage]
  );
};
