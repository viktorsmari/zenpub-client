import React, { FC, useMemo } from 'react';
import {
  FeaturedCommunities as FeaturedCommunitiesUI,
  FeaturedCommunitiesData
} from 'ui/modules/FeaturedCommunities';
import { useMe } from 'fe/session/me';
import { useInstanceFeatured } from 'fe/instance/featured/useInstanceFeatured';
import { DiscoverPageFeaturedCommunityInfoFragment } from 'HOC/pages/discover/DiscoverPage.generated';
import { CommunityBase } from 'ui/modules/FeaturedCommunities/preview';
import { FeatureModalHOC } from '../FeatureModal/FeatureModal';

export interface FeaturedCommunities {}
export const FeaturedCommunities: FC<FeaturedCommunities> = () => {
  const { isAdmin } = useMe();
  const { featuredCommunitiesEdges } = useInstanceFeatured();
  const featuredCommunities = useMemo<CommunityBase[]>(
    () =>
      featuredCommunitiesEdges.edges
        .map(feature => feature.context)
        .filter(
          (
            maybeCtx
          ): maybeCtx is DiscoverPageFeaturedCommunityInfoFragment => //FIXME: remove when fixed
            !!maybeCtx && maybeCtx.__typename === 'Community'
        )
        .map<CommunityBase>(community => ({
          ...community,
          icon: community.icon || ''
        })),
    [featuredCommunitiesEdges]
  );

  const FeaturedModal = useMemo<FeaturedCommunitiesData['FeaturedModal']>(
    () => ({ community, done }) => {
      const communityFeature = featuredCommunitiesEdges.edges.find(
        feature =>
          feature.context?.__typename === 'Community' && //FIXME: remove ? when fixed
          feature.context.id === community.id
      );
      const featureId = communityFeature?.id;
      return (
        <FeatureModalHOC ctx={community} done={done} featureId={featureId} />
      );
    },
    [featuredCommunities]
  );

  const propsUI = useMemo<FeaturedCommunitiesData>(() => {
    const props: FeaturedCommunitiesData = {
      FeaturedModal,
      featuredCommunities,
      isAdmin
    };
    return props;
  }, [isAdmin, featuredCommunities, FeaturedModal]);
  return <FeaturedCommunitiesUI {...propsUI} />;
};
