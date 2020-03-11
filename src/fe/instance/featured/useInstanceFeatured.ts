import {
  useInstanceFeaturedCollectionsQuery,
  useInstanceFeaturedCommunitiesQuery
} from './featured.generated';
import { useMemo } from 'react';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useInstanceFeatured = () => {
  const featuredCollectionsQ = useInstanceFeaturedCollectionsQuery();
  const featuredCommunitiesQ = useInstanceFeaturedCommunitiesQuery();

  return useMemo(() => {
    const featuredCollectionsEdges = manageEdges(
      featuredCollectionsQ.data?.instance?.featuredCollections
    );
    const featuredCommunitiesEdges = manageEdges(
      featuredCommunitiesQ.data?.instance?.featuredCommunities
    );
    return {
      featuredCollectionsEdges,
      featuredCommunitiesEdges
    };
  }, [featuredCollectionsQ, featuredCommunitiesQ]);
};
