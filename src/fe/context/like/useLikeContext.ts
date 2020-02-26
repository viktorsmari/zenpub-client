import { useCallback, useMemo } from 'react';
import Maybe from 'graphql/tsutils/Maybe';
import * as GQL from 'fe/mutation/like/useMutateLike.generated';
import {
  Resource,
  Community,
  Collection,
  User,
  Comment
} from 'graphql/types.generated';
import { OPTIMISTIC_ID_STRING, isOptimisticId } from 'fe/lib/helpers/mutations';

type Typename = Exclude<
  | Collection['__typename']
  | Comment['__typename']
  | Community['__typename']
  | Resource['__typename']
  | User['__typename'],
  null | undefined
>;

export const useLikeContext = (
  contextId: Maybe<string>,
  myLike: Maybe<{ id: string }>,
  likerCount: Maybe<number>,
  __typename: Typename
) => {
  const [likeMut, likeMutStatus] = GQL.useLikeMutation();
  const [unlikeMut, unlikeMutStatus] = GQL.useUnlikeMutation();
  const mutating = likeMutStatus.loading || unlikeMutStatus.loading;
  const toggleLike = useCallback(async () => {
    if (!contextId || mutating) {
      return;
    }
    if (!myLike) {
      return likeMut({
        variables: {
          contextId
        },
        optimisticResponse: optimisticLike(
          __typename,
          contextId,
          likerCount || 0
        )
      });
    } else {
      return isOptimisticId(myLike.id)
        ? undefined
        : unlikeMut({
            variables: {
              contextId: myLike.id
            },
            optimisticResponse: optimisticUnlike(
              __typename,
              contextId,
              likerCount || 0
            )
          });
    }
  }, [contextId, myLike, mutating, __typename, likerCount]);

  return useMemo(
    () => ({
      toggleLike
    }),
    [toggleLike]
  );
};

const optimisticLike = (
  __typename: any,
  id: string,
  likerCount: number
): GQL.LikeMutation => ({
  __typename: 'RootMutationType',
  createLike: {
    __typename: 'Like',
    context: {
      __typename,
      id,
      myLike: { __typename: 'Like', id: OPTIMISTIC_ID_STRING },
      ...(__typename === 'Resource'
        ? { likes: { __typename: 'LikesEdges', totalCount: likerCount + 1 } }
        : { likerCount: likerCount + 1 })
    }
  }
});
const optimisticUnlike = (
  __typename: any,
  id: string,
  likerCount: number
): GQL.UnlikeMutation => ({
  __typename: 'RootMutationType',
  delete: {
    __typename: 'Like',
    context: {
      __typename,
      id,
      myLike: null,
      ...(__typename === 'Resource'
        ? { likes: { __typename: 'LikesEdges', totalCount: likerCount - 1 } }
        : { likerCount: likerCount - 1 })
    }
  }
});
