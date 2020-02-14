import { useFormik } from 'formik';
import { useContext } from 'react';
import { ActivityPreviewCtx } from '../activityPreviewHOC';
import { MaybeActivityPreviewData } from '../types';

export const useActivityToggleLikeFormik = (
  activity: MaybeActivityPreviewData
) => {
  const {
    useActivityPreviewLikeMutation,
    useActivityPreviewUnlikeMutation
  } = useContext(ActivityPreviewCtx);
  const [likeMut, likeMutStatus] = useActivityPreviewLikeMutation();
  const [unlikeMut, unlikeMutStatus] = useActivityPreviewUnlikeMutation();
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (!activity || !activity.context) {
        return;
      }

      if (
        !activity ||
        'Community' === activity.context.__typename ||
        'Like' === activity.context.__typename ||
        'Flag' === activity.context.__typename ||
        'Follow' === activity.context.__typename ||
        likeMutStatus.loading ||
        unlikeMutStatus.loading
      ) {
        return;
      } else {
        const { myLike } = activity.context;
        if (myLike) {
          if (myLike.id === '#') {
            return;
          }
          return unlikeMut({
            variables: { contextId: myLike.id },
            optimisticResponse: {
              __typename: 'RootMutationType',
              delete: {
                __typename: 'Like',
                context: {
                  __typename: activity.context.__typename as any,
                  ...(activity.context.__typename === 'User'
                    ? {
                        userId: activity.context.userId
                      }
                    : {
                        id: activity.context.id
                      }),
                  myLike: null,
                  likes: {
                    __typename: 'LikesEdges',
                    totalCount: !activity.context.likes
                      ? 0
                      : activity.context.likes.totalCount - 1
                  }
                }
              }
            }
          });
        } else {
          return likeMut({
            variables: {
              contextId:
                activity.context.__typename === 'User'
                  ? activity.context.userId
                  : activity.context.id
            },
            optimisticResponse: {
              __typename: 'RootMutationType',
              createLike: {
                __typename: 'Like',
                context: {
                  __typename: activity.context.__typename as any,
                  ...(activity.context.__typename === 'User'
                    ? {
                        userId: activity.context.userId
                      }
                    : {
                        id: activity.context.id
                      }),
                  myLike: { __typename: 'Like', id: '#' },
                  likes: {
                    __typename: 'LikesEdges',
                    totalCount: !activity.context.likes
                      ? 1
                      : activity.context.likes.totalCount + 1
                  }
                }
              }
            }
          });
        }
      }
    }
  });

  return toggleLikeFormik;
};
