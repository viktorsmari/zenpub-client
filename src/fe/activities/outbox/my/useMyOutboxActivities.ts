import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import * as GQL from './useMyOutboxActivities.generated';

export const useMyOutboxActivities = () => {
  const activitiesQ = GQL.useMyOutboxActivitiesQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    activitiesQ.data?.me?.user.outbox,
    ({ cursor, update }) => {
      return activitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user.outbox && prev.me?.user.outbox
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.me.user,
                  outbox: update({
                    prev: prev.me.user.outbox,
                    fetched: fetchMoreResult.me.user.outbox
                  })
                }
              }
            : prev;
        }
      });
    }
  );

  return useMemo(() => {
    return {
      activitiesPage
    };
  }, [activitiesPage]);
};
