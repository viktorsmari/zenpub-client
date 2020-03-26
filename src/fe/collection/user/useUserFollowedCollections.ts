import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCollections = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCollectionsQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const followedCollectionsPage = usePage(
    userQ.data?.user?.followedCollections,
    ({ cursor, update }) => {
      userQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.followedCollections &&
            prev.user?.followedCollections
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  followedCollections: update({
                    prev: prev.user.followedCollections,
                    fetched: fetchMoreResult.user.followedCollections
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
      followedCollectionsPage
    }),
    [followedCollectionsPage]
  );
};
