import { FeaturedCollectionsDocument } from 'fe/collection/featured/featuredCollections.generated';
import { FeaturedCommunitiesDocument } from 'fe/community/featured/featuredCommunities.generated';
import {
  useAddFeaturedMutation,
  useRemoveFeaturedMutation
} from 'fe/mutation/feature/useMutateFeature.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';

type Context = Collection | Community;

export type UseFeaturedContext = Maybe<Pick<Context, 'id' | '__typename'>>;

export const useFeaturedContext = (
  ctx: UseFeaturedContext,
  isFeatured: boolean
) => {
  const [addFeaturedMut, addFeaturedMutStatus] = useAddFeaturedMutation();
  const [rmFeaturedMut, rmFeaturedMutStatus] = useRemoveFeaturedMutation();
  const mutating = addFeaturedMutStatus.loading || rmFeaturedMutStatus.loading;
  // const featuredCollectionsQ = useFeaturedCollectionsQuery();
  // const featuredCommunitiesQ = useFeaturedCommunitiesQuery();

  // const featuredCommunities = useMemo(
  //   () =>
  //     (featuredCommunitiesQ.data?.instance?.featuredCommunities?.edges || [])
  //       .map(edge => edge?.node.context)
  //       .filter(
  //         (maybeCommunity): maybeCommunity is FeaturedCommunityInfoFragment =>
  //           !!maybeCommunity
  //       ),
  //   [featuredCommunitiesQ]
  // );

  // const featuredCollections = useMemo(
  //   () =>
  //     (featuredCollectionsQ.data?.instance?.featuredCollections?.edges || [])
  //       .map(edge => edge?.node.context)
  //       .filter(
  //         (maybeCommunity): maybeCommunity is FeaturedCollectionInfoFragment =>
  //           !!maybeCommunity
  //       ),
  //   [featuredCollectionsQ]
  // );

  // const isFeatured = useMemo(
  //   () =>
  //     !ctx || !ctx.__typename
  //       ? null
  //       : ctx.__typename === 'Collection'
  //       ? !!featuredCollections.find(
  //           featCollection => featCollection.id === ctx.id
  //         )
  //       : ctx.__typename === 'Community'
  //       ? !!featuredCommunities.find(
  //           featCommunity => featCommunity.id === ctx.id
  //         )
  //       : null,
  //   [featuredCollections, featuredCommunities, ctx]
  // );

  const toggleFeatured = useCallback(async () => {
    const { id, __typename } = ctx || {};
    if (!id || !__typename || typeof isFeatured !== 'boolean' || mutating) {
      return;
    }

    if (!isFeatured) {
      return addFeaturedMut({
        variables: {
          contextId: id
        },
        refetchQueries: [
          {
            query:
              __typename === 'Community'
                ? FeaturedCommunitiesDocument
                : FeaturedCollectionsDocument
          }
        ]
      });
    } else {
      return rmFeaturedMut({
        variables: {
          contextId: id
        },
        refetchQueries: [
          {
            query:
              __typename === 'Community'
                ? FeaturedCommunitiesDocument
                : FeaturedCollectionsDocument
          }
        ]
      });
    }
  }, [ctx, isFeatured]);

  return useMemo(
    () => ({
      // isFeatured,
      toggleFeatured
    }),
    [toggleFeatured /* , isFeatured */]
  );
};
