import { Resource } from 'graphql/types.generated';
import { useResourcePreviewQuery } from './useResourcePreview.generated';
import { useMemo } from 'react';

export const useResourcePreview = (resourceId: Resource['id']) => {
  const resourcePreviewQ = useResourcePreviewQuery({
    variables: { resourceId }
  });
  return useMemo(() => {
    return {
      resource: resourcePreviewQ.data?.resource
    };
  }, [resourcePreviewQ]);
};
