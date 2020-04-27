import { isOptimisticId, OPTIMISTIC_ID_STRING } from 'fe/lib/helpers/mutations';
import * as GQL from 'fe/mutation/follow/useMutateFollow.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, Community, Thread, User } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { MyCommunityFollowsQueryRefetch } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { CommunityFollowersQueryRefetch } from 'fe/user/followers/community/useCommunityFollowers.generated';
import { CollectionFollowersQueryRefetch } from 'fe/user/followers/collection/useCollectionFollowers.generated';
import { MyCollectionFollowsQueryRefetch } from 'fe/collection/myFollowed/myFollowedCollections.generated';

type Context = Collection | Community | Thread | User;

export type UseFollowContext = Maybe<
  Pick<Context, 'id' | 'myFollow' | 'followerCount' | '__typename'>
>;

export const useFollowContext = (ctx: UseFollowContext) => {
  const [followMut, followMutStatus] = GQL.useFollowMutation();
  const [unfollowMut, unfollowMutStatus] = GQL.useUnfollowMutation();
  const mutating = followMutStatus.loading || unfollowMutStatus.loading;
  const toggleFollow = useCallback(async () => {
    const { id, followerCount, myFollow, __typename } = ctx || {};
    if (!id || mutating) {
      return;
    }
    if (!myFollow) {
      return followMut({
        variables: {
          contextId: id
        },
        optimisticResponse: optimisticFollow(
          __typename,
          id,
          followerCount || 0
        ),
        refetchQueries:
          __typename === 'Community'
            ? [
                MyCommunityFollowsQueryRefetch({}),
                CommunityFollowersQueryRefetch({ communityId: id })
              ]
            : __typename === 'Collection'
            ? [
                MyCollectionFollowsQueryRefetch({}),
                CollectionFollowersQueryRefetch({ collectionId: id })
              ]
            : []
      });
    } else {
      return isOptimisticId(myFollow.id)
        ? undefined
        : unfollowMut({
            variables: {
              contextId: myFollow.id
            },
            optimisticResponse: optimisticUnfollow(
              __typename,
              id,
              followerCount || 1
            ),
            refetchQueries:
              __typename === 'Community'
                ? [
                    MyCommunityFollowsQueryRefetch({}),
                    CommunityFollowersQueryRefetch({ communityId: id })
                  ]
                : __typename === 'Collection'
                ? [
                    MyCollectionFollowsQueryRefetch({}),
                    CollectionFollowersQueryRefetch({ collectionId: id })
                  ]
                : []
          });
    }
  }, [ctx, mutating]);

  return useMemo(
    () => ({
      toggleFollow
    }),
    [toggleFollow]
  );
};

const optimisticFollow = (
  __typename: any,
  id: string,
  followerCount: number
): GQL.FollowMutation => ({
  __typename: 'RootMutationType',
  createFollow: {
    __typename: 'Follow',
    context: {
      __typename,
      id,
      myFollow: { __typename: 'Follow', id: OPTIMISTIC_ID_STRING },
      followerCount: followerCount + 1
    }
  }
});
const optimisticUnfollow = (
  __typename: any,
  id: string,
  followerCount: number
): GQL.UnfollowMutation => ({
  __typename: 'RootMutationType',
  delete: {
    __typename: 'Follow',
    context: {
      __typename,
      id,
      myFollow: null,
      followerCount: followerCount - 1
    }
  }
});
