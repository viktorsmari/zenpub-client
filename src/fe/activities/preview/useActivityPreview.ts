import { Activity } from 'graphql/types.generated';
import { useActivityPreviewQuery } from './useActivityPreview.generated';
import { useMemo } from 'react';

export const useActivityPreview = (activityId: Activity['id']) => {
  const activityPreviewQ = useActivityPreviewQuery({
    variables: { activityId }
  });
  return useMemo(() => {
    return {
      activity: activityPreviewQ.data?.activity
    };
  }, [activityPreviewQ]);
};
