import { SessionContext } from 'context/global/sessionCtx';
import { useDeleteMutationMutation } from 'graphql/delete.generated';
import { useFollowMutationMutation } from 'graphql/follow.generated';
import { useContext, useMemo } from 'react';
import {
  HeroCommunityContext,
  HeroCommunityContextData
} from 'ui/modules/HeroCommunity';
import { useGetHeroCommunityQuery } from './getHeroCommunity.generated';

export const useHeroCommunityCtx: HeroCommunityContext = ({ communityId }) => {
  const session = useContext(SessionContext);
  const [joinMutation, joinMutationStatus] = useFollowMutationMutation();
  const [unjoinMutation, unjoinMutationStatus] = useDeleteMutationMutation();
  const communityQuery = useGetHeroCommunityQuery({
    variables: { communityId }
  });
  const heroContextData = useMemo<HeroCommunityContextData>(
    () => {
      if (
        !session.me ||
        communityQuery.loading ||
        communityQuery.error ||
        !communityQuery.data ||
        !communityQuery.data.community
      ) {
        return { community: null };
      }
      const community = communityQuery.data.community;
      return {
        community: {
          canModify: session.me.user.id === community.creator.id,
          following: !!community.myFollow,
          icon: community.icon || community.image || '',
          name: community.name,
          preferredUsername: community.preferredUsername,
          totalMembers: community.followers.totalCount,
          summary: community.summary || '',
          toggleJoin: {
            toggle: () =>
              community.myFollow
                ? unjoinMutation({
                    variables: { contextId: community.myFollow.id }
                  })
                : joinMutation({ variables: { contextId: community.id } }),
            isSubmitting: community.myFollow
              ? unjoinMutationStatus.loading
              : joinMutationStatus.loading
          }
        }
      };
    },
    [
      communityQuery,
      session.me,
      joinMutation,
      joinMutationStatus,
      unjoinMutation,
      unjoinMutationStatus
    ]
  );
  return heroContextData;
};
