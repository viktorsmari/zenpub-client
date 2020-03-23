import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useUserOutboxActivities = (userId: User['id']) => {
  const activitiesQ = GQL.useUserOutboxActivitiesQuery({
    variables: { userId }
  });

  const activitiesPage = usePage(activitiesQ.data?.user?.outbox);

  return useMemo(() => {
    return {
      activitiesPage
    };
  }, [activitiesPage]);
};
