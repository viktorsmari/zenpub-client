import { useMemo } from 'react';
import * as GQL from './myFollowedCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useMyFollowedCollections = () => {
  const myFlwCollectionsQ = GQL.useMyFollowedCollectionsQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const myFollowedCollectionsPage = usePage(
    myFlwCollectionsQ.data?.me?.user.followedCollections,
    ({ cursor, update }) => {
      return myFlwCollectionsQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user?.followedCollections &&
            prev.me?.user?.followedCollections
            ? {
                ...fetchMoreResult,
                me: {
                  ...fetchMoreResult.me,
                  user: {
                    ...fetchMoreResult.me.user,
                    followedCollections: update({
                      prev: prev.me?.user.followedCollections,
                      fetched: fetchMoreResult.me?.user.followedCollections
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
      myFollowedCollectionsPage
    };
  }, [myFollowedCollectionsPage]);
};
