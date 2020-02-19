import Maybe from 'graphql/tsutils/Maybe';
import { useCallback, useMemo } from 'react';
import {
  useFollowMutation,
  useUnfollowMutation
} from 'fe/mutation/follow/useMutateFollow.generated';

export const useFollowContext = (
  contextId: Maybe<string>,
  myFollow: Maybe<{ id: string }>
) => {
  const [followMut, followMutStatus] = useFollowMutation();
  const [unfollowMut, unfollowMutStatus] = useUnfollowMutation();
  const mutating = followMutStatus.loading || unfollowMutStatus.loading;
  const toggleFollow = useCallback(async () => {
    if (!contextId || mutating) {
      return;
    }
    if (!myFollow) {
      return followMut({
        variables: {
          contextId
        }
      });
    } else {
      return unfollowMut({
        variables: {
          contextId: myFollow.id
        }
      });
    }
  }, [contextId, myFollow, mutating]);

  return useMemo(
    () => ({
      toggleFollow
    }),
    [toggleFollow]
  );
};
