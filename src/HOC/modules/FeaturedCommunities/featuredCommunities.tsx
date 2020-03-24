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
  const { featuredCommunitiesPage } = useInstanceFeatured();
  const featuredCommunities = useMemo<CommunityBase[]>(
    () =>
      featuredCommunitiesPage.edges
        .map(feature => feature.context)
        .filter(
          //FIXME: remove when fixed nullable context
          (maybeCtx): maybeCtx is DiscoverPageFeaturedCommunityInfoFragment =>
            !!maybeCtx && maybeCtx.__typename === 'Community'
        )
        .map<CommunityBase>(community => ({
          ...community,
          icon: community.icon || ''
        })),
    [featuredCommunitiesPage]
  );

  const FeaturedModal = useMemo<FeaturedCommunitiesData['FeaturedModal']>(
    () => ({ community, done }) => {
      const communityFeature = featuredCommunitiesPage.edges.find(
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
