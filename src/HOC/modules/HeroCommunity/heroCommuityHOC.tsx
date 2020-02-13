import { useDeleteMutationMutation } from 'graphql/delete.generated';
import { useFollowMutationMutation } from 'graphql/follow.generated';
import { Community } from 'graphql/types.generated';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import HeroCommunity, {
  Props as HeroProps,
  Status
} from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from '../EditCommunityPanel/editCommunityPanelHOC';
import * as GQL from './getHeroCommunity.generated';

export interface Props {
  communityId: Community['id'];
}

export interface HeroCommunityCtx {
  useHeroCommunityQuery: typeof GQL.useHeroCommunityQuery;
  useHeroCommunityMeQuery: typeof GQL.useHeroCommunityMeQuery;
}
export const HeroCommunityCtx = createContext<HeroCommunityCtx>({
  useHeroCommunityQuery: GQL.useHeroCommunityQuery,
  useHeroCommunityMeQuery: GQL.useHeroCommunityMeQuery
});

export const HeroCommunityHOC: SFC<Props> = ({ communityId }) => {
  const { useHeroCommunityMeQuery, useHeroCommunityQuery } = useContext(
    HeroCommunityCtx
  );
  const [joinMutation, joinMutationStatus] = useFollowMutationMutation();
  const [unjoinMutation, unjoinMutationStatus] = useDeleteMutationMutation();
  const { data: session } = useHeroCommunityMeQuery();
  const communityQuery = useHeroCommunityQuery({
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
        return {
          community: {
            status: Status.Loading
          }
        };
      }
      const community = communityQuery.data.community;
      const canModify =
        !!session &&
        !!session.me &&
        !!community.creator &&
        session.me.user.id === community.creator.id;

      const props: HeroProps = {
        community: {
          status: Status.Loaded,
          //FIXME https://gitlab.com/moodlenet/meta/issues/185
          canModify,
          following: !!community.myFollow,
          icon: community.icon || '',
          name: community.name,
          fullName: community.displayUsername,
          //FIXME https://gitlab.com/moodlenet/meta/issues/185
          totalMembers: community.followers!.totalCount,
          summary: community.summary || '',
          toggleJoin: {
            toggle: () =>
              community.myFollow
                ? unjoinMutation({
                    variables: { contextId: community.myFollow.id }
                  }).then(() => communityQuery.refetch())
                : joinMutation({ variables: { contextId: community.id } }).then(
                    () => communityQuery.refetch()
                  ),

            isSubmitting: community.myFollow
              ? unjoinMutationStatus.loading
              : joinMutationStatus.loading
          },
          EditCommunityPanel: ({ done }) => (
            <EditCommunityPanelHOC done={done} communityId={community.id} />
          )
        }
      };
      return props;
    },
    [
      communityQuery,
      session,
      joinMutation,
      joinMutationStatus,
      unjoinMutation,
      unjoinMutationStatus
    ]
  );
  console.log(heroProps);
  return <HeroCommunity {...heroProps} />;
};
