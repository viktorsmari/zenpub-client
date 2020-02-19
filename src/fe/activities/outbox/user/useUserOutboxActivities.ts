import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserOutboxActivities.generated';

export const useUserOutboxActivities = (userId: User['id']) => {
  const activitiesQ = GQL.useUserOutboxActivitiesQuery({
    variables: { userId }
  });

  const activities = useMemo<GQL.UserOutboxActivityFragment[]>(() => {
    return (activitiesQ.data?.user?.outbox?.edges || [])
      .map(edge => edge?.node)
      .filter(
        (maybeNode): maybeNode is GQL.UserOutboxActivityFragment => !!maybeNode
      );
  }, [activitiesQ]);

  return useMemo(() => {
    return {
      activities
    };
  }, [activities]);
};
