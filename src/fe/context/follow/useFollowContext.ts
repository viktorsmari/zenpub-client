import * as GQL from 'fe/mutation/follow/useMutateFollow.generated';
import { isOptimisticId, OPTIMISTIC_ID_STRING } from 'fe/util';
import { GetSidebarQueryDocument } from 'graphql/getSidebar.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, Community, Thread, User } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';

type Typename = Exclude<
  | Collection['__typename']
  | Community['__typename']
  | Thread['__typename']
  | User['__typename'],
  null | undefined
>;

export const useFollowContext = (
  contextId: Maybe<string>,
  myFollow: Maybe<{ id: string }>,
  followerCount: Maybe<number>,
  __typename: Typename
) => {
  const [followMut, followMutStatus] = GQL.useFollowMutation();
  const [unfollowMut, unfollowMutStatus] = GQL.useUnfollowMutation();
  const mutating = followMutStatus.loading || unfollowMutStatus.loading;
  const toggleFollow = useCallback(async () => {
    if (!contextId || mutating) {
      return;
    }
    if (!myFollow) {
      return followMut({
        variables: {
          contextId
        },
        optimisticResponse: optimisticFollow(
          __typename,
          contextId,
          followerCount || 0
        ),
        refetchQueries: [
          ...(__typename === 'Community'
            ? [{ query: GetSidebarQueryDocument }]
            : [])
        ]
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
              contextId,
              followerCount || 1
            ),
            refetchQueries: [
              ...(__typename === 'Community'
                ? [{ query: GetSidebarQueryDocument }]
                : [])
            ]
          });
    }
  }, [contextId, myFollow, mutating, followerCount, __typename]);

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
