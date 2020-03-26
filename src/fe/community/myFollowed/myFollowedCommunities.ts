import { useMemo } from 'react';
import * as GQL from './myFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useMyFollowedCommunities = () => {
  const myFlwCommunitiesQ = GQL.useMyFollowedCommunitiesQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const communitiesPage = usePage(
    myFlwCommunitiesQ.data?.me?.user.followedCommunities,
    ({ cursor, update }) => {
      myFlwCommunitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user?.followedCommunities &&
            prev.me?.user?.followedCommunities
            ? {
                ...fetchMoreResult,
                me: {
                  ...fetchMoreResult.me,
                  user: {
                    ...fetchMoreResult.me.user,
                    followedCommunities: update({
                      prev: prev.me?.user.followedCommunities,
                      fetched: fetchMoreResult.me?.user.followedCommunities
                    })
                  }
                }
              }
            : prev;
        }
      });
    }
  );

  return useMemo(() => {
    return {
      communitiesPage
    };
  }, [communitiesPage]);
};
