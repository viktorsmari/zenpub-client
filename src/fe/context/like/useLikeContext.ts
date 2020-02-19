import { useCallback, useMemo } from 'react';
import Maybe from 'graphql/tsutils/Maybe';
import {
  useLikeMutation,
  useUnlikeMutation
} from 'fe/mutation/like/useMutateLike.generated';

export const useLikeContext = (
  contextId: Maybe<string>,
  myLike: Maybe<{ id: string }>
) => {
  const [likeMut, likeMutStatus] = useLikeMutation();
  const [unlikeMut, unlikeMutStatus] = useUnlikeMutation();
  const mutating = likeMutStatus.loading || unlikeMutStatus.loading;
  const toggleLike = useCallback(async () => {
    if (!contextId || mutating) {
      return;
    }
    if (!myLike) {
      return likeMut({
        variables: {
          contextId
        }
      });
    } else {
      return unlikeMut({
        variables: {
          contextId: myLike.id
        }
      });
    }
  }, [contextId, myLike, mutating]);

  return useMemo(
    () => ({
      toggleLike
    }),
    [toggleLike]
  );
};
