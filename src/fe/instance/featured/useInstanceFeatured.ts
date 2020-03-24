import {
  useInstanceFeaturedCollectionsQuery,
  useInstanceFeaturedCommunitiesQuery
} from './featured.generated';
import { useMemo } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';

export const useInstanceFeatured = () => {
  const featuredCollectionsQ = useInstanceFeaturedCollectionsQuery();
  const featuredCommunitiesQ = useInstanceFeaturedCommunitiesQuery();
  const featuredCollectionsPage = usePage(
    featuredCollectionsQ.data?.instance?.featuredCollections
  );
  const featuredCommunitiesPage = usePage(
    featuredCommunitiesQ.data?.instance?.featuredCommunities
  );

  return useMemo(() => {
    return {
      featuredCollectionsPage,
      featuredCommunitiesPage
    };
  }, [featuredCollectionsQ, featuredCommunitiesQ]);
};
