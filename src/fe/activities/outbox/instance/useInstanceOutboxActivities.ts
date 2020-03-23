import { usePage } from 'fe/lib/helpers/usePage';
import { useMemo } from 'react';
import * as GQL from './useInstanceOutboxActivities.generated';

export const useInstanceOutboxActivities = () => {
  const activitiesQ = GQL.useInstanceOutboxActivitiesQuery();

  const activitiesPage = usePage(activitiesQ.data?.instance?.outbox);

  return useMemo(() => {
    return {
      activitiesPage
    };
  }, [activitiesPage]);
};
