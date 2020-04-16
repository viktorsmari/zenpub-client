import { useMemo } from 'react';
import * as GQL from './myFollowedCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useMyFollowedCollections = () => {
  const myFlwCollectionsQ = GQL.useMyFollowedCollectionsQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const myFollowedCollectionsPage = usePage(
    myFlwCollectionsQ.data?.me?.user.collectionFollows,
    ({ cursor, update }) => {
      return myFlwCollectionsQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user?.collectionFollows &&
            prev.me?.user?.collectionFollows
            ? {
                ...fetchMoreResult,
                me: {
                  ...fetchMoreResult.me,
                  user: {
                    ...fetchMoreResult.me.user,
                    collectionFollows: update({
                      prev: prev.me?.user.collectionFollows,
                      fetched: fetchMoreResult.me?.user.collectionFollows
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
