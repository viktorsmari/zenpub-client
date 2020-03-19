import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCommunities.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCommunities = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCommunitiesQuery({
    variables: { userId }
  });

  const communities = useMemo<GQL.UserFollowedCommunityFragment[]>(
    () =>
      manageEdges(userQ.data?.user?.followedCommunities).nodes.map(
        followedCommunity => followedCommunity.community
      ),
    [userQ]
  );

  return useMemo(
    () => ({
      communities
    }),
    [communities]
  );
};
