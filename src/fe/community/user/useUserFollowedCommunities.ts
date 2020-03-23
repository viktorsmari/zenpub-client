import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCommunities = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCommunitiesQuery({
    variables: { userId }
  });

  const followedCommunitiesPage = usePage(
    userQ.data?.user?.followedCommunities
  );

  return useMemo(
    () => ({
      followedCommunitiesPage
    }),
    [followedCommunitiesPage]
  );
};
