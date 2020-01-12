import React from 'react';
import { SessionContext } from 'context/global/sessionCtx';
import { useDeleteMutationMutation } from 'graphql/delete.generated';
import { useFollowMutationMutation } from 'graphql/follow.generated';
import { SFC, useContext, useMemo } from 'react';
import { EditCommunityPanelHOC } from 'ui-context-impl/community/edit/editCommunityPanelHOC';
import HeroCommunity, { Props as HeroProps } from 'ui/modules/HeroCommunity';
import { useGetHeroCommunityQuery } from './getHeroCommunity.generated';
import { Community } from 'graphql/types.generated';

export interface Props {
  communityId: Community['id'];
}
export const HeroCommunityHOC: SFC<Props> = ({ communityId }) => {
  const session = useContext(SessionContext);
  const [joinMutation, joinMutationStatus] = useFollowMutationMutation();
  const [unjoinMutation, unjoinMutationStatus] = useDeleteMutationMutation();
  const communityQuery = useGetHeroCommunityQuery({
    variables: { communityId }
  });
  const heroProps = useMemo<HeroProps>(
    () => {
      if (
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
          canModify: !session.me || session.me.user.id === community.creator.id,
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
          },
          EditCommunityPanel: ({ cancel, success }) => (
            <EditCommunityPanelHOC
              cancel={cancel}
              success={success}
              communityId={community.id}
            />
          )
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
  return <HeroCommunity {...heroProps} />;
};
