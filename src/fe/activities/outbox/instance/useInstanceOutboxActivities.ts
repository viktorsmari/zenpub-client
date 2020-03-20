import { manageEdges } from 'fe/lib/helpers/edges';
import { useMemo } from 'react';
import * as GQL from './useInstanceOutboxActivities.generated';

export const useInstanceOutboxActivities = () => {
  const activitiesQ = GQL.useInstanceOutboxActivitiesQuery();

  const activities = useMemo<GQL.InstanceOutboxActivityFragment[]>(
    () => manageEdges(activitiesQ.data?.instance?.outbox).edges,
    [activitiesQ]
  );

  return useMemo(() => {
    return {
      activities
    };
  }, [activities]);
};
