import { Community } from 'graphql/types.generated';
import { useCommunityDataQuery } from './useCommunity.generated';
import { useMemo } from 'react';
import { useFollowContext } from 'fe/context/follow/useFollowContext';
import { useEditCommunity } from './edit/useEditCommunity';
import { useMe } from 'fe/session/me';
import { useCreateThreadContext } from 'fe/context/createThread/useCreateThreadContext';
import { useFeaturedContext } from 'fe/context/feature/useFeatureContext';

export const useCommunity = (communityId: Community['id']) => {
  const { me } = useMe();

  const communityQ = useCommunityDataQuery({ variables: { communityId } });
  const { createThread } = useCreateThreadContext(communityId);
  const community = communityQ.data?.community;
  const { toggleFollow: toggleJoin } = useFollowContext(community);
  const { toggleFeatured, isFeatured } = useFeaturedContext(community);
  const { edit } = useEditCommunity(communityId);
  const canModify =
    !!me && !!community?.creator && me.user.id === community.creator.id;

  return useMemo(() => {
    return {
      toggleFeatured,
      community,
      createThread,
      toggleJoin,
      edit,
      canModify,
      isFeatured
    };
  }, [
    isFeatured,
    community,
    toggleJoin,
    edit,
    canModify,
    createThread,
    toggleFeatured
  ]);
};
