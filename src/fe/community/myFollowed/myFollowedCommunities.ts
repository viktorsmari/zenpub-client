import { useMemo } from 'react';
import * as GQL from './myFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useMyFollowedCommunities = () => {
  const myFlwCommunitiesQ = GQL.useMyFollowedCommunitiesQuery();

  const communitiesPage = usePage(
    myFlwCommunitiesQ.data?.me?.user.followedCommunities
  );

  return useMemo(() => {
    return {
      communitiesPage
    };
  }, [communitiesPage]);
};
