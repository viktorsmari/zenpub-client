import { useAllCommunitiesQuery } from './useAllCommunities.generated';
import { useMemo } from 'react';
import { CommunityPreviewFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';

export const useAllCommunities = () => {
  const allCommunitiesQ = useAllCommunitiesQuery();
  return useMemo(() => {
    const list = (allCommunitiesQ.data?.communities.nodes || []).filter(
      (
        maybeCommunityPreview
      ): maybeCommunityPreview is CommunityPreviewFragment =>
        !!maybeCommunityPreview
    );
    return {
      list,
      totalCount: allCommunitiesQ.data?.communities.totalCount
    };
  }, [allCommunitiesQ]);
};
