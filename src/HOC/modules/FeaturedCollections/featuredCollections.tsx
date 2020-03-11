import React, { FC, useMemo } from 'react';
import {
  FeaturedCollections as FeaturedCollectionsUI,
  FeaturedCollectionsData
} from 'ui/modules/FeaturedCollections';
import { useMe } from 'fe/session/me';
import { useInstanceFeatured } from 'fe/instance/featured/useInstanceFeatured';
import { DiscoverPageFeaturedCollectionInfoFragment } from 'HOC/pages/discover/DiscoverPage.generated';
import { CollectionBase } from 'ui/modules/FeaturedCollections/preview';
import { FeatureModalHOC } from '../FeatureModal/FeatureModal';

export interface FeaturedCollections {}
export const FeaturedCollections: FC<FeaturedCollections> = () => {
  const { isAdmin } = useMe();
  const { featuredCollectionsEdges } = useInstanceFeatured();
  const featuredCollections = useMemo<CollectionBase[]>(
    () =>
      featuredCollectionsEdges.nodes
        .map(node => node.context)
        .filter(
          (maybeCtx): maybeCtx is DiscoverPageFeaturedCollectionInfoFragment =>
            !!maybeCtx && maybeCtx.__typename === 'Collection'
        )
        .map<CollectionBase>(collection => ({
          ...collection,
          icon: collection.icon || ''
        })),
    [featuredCollectionsEdges]
  );

  const FeaturedModal = useMemo<FeaturedCollectionsData['FeaturedModal']>(
    () => ({ collection, done }) => {
      const collectionFeature = featuredCollectionsEdges.nodes.find(
        node =>
          node.context?.__typename === 'Collection' &&
          node.context.id === collection.id
      );
      const featureId = collectionFeature?.id;
      return (
        <FeatureModalHOC ctx={collection} done={done} featureId={featureId} />
      );
    },
    [featuredCollections]
  );

  const propsUI = useMemo<FeaturedCollectionsData>(() => {
    const props: FeaturedCollectionsData = {
      FeaturedModal,
      featuredCollections,
      isAdmin
    };
    return props;
  }, [isAdmin, featuredCollections, FeaturedModal]);

  return <FeaturedCollectionsUI {...propsUI} />;
};
