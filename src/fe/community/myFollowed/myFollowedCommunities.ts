import { useMemo } from 'react';
import * as GQL from './myFollowedCommunities.generated';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useMyFollowedCommunities = () => {
  const myFlwCommunitiesQ = GQL.useMyFollowedCommunitiesQuery();
  const communitiesEdges = useMemo(
    () => manageEdges(myFlwCommunitiesQ.data?.me?.user.followedCommunities),
    [myFlwCommunitiesQ]
  );
  const communities = useMemo(
    () => communitiesEdges.nodes.map(_ => _.community),
    [communitiesEdges]
  );

  return useMemo(() => {
    return {
      communitiesEdges,
      communities
    };
  }, [communitiesEdges, communities]);
};
