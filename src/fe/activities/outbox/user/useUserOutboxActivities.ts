import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserOutboxActivities.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useUserOutboxActivities = (userId: User['id']) => {
  const activitiesQ = GQL.useUserOutboxActivitiesQuery({
    variables: { userId }
  });

  const activities = useMemo<GQL.UserOutboxActivityFragment[]>(
    () => manageEdges(activitiesQ.data?.user?.outbox).nodes,
    [activitiesQ]
  );

  return useMemo(() => {
    return {
      activities
    };
  }, [activities]);
};
