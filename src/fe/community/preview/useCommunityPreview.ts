import { Community } from 'graphql/types.generated';
import { useCommunityPreviewQuery } from './useCommunityPreview.generated';
import { useMemo } from 'react';

export const useCommunityPreview = (communityId: Community['id']) => {
  const communityPreviewQ = useCommunityPreviewQuery({
    variables: { communityId }
  });
  return useMemo(() => {
    return {
      community: communityPreviewQ.data?.community
    };
  }, [communityPreviewQ]);
};
