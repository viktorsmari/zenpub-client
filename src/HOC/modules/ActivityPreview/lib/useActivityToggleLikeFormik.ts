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
      //FIXME https://gitlab.com/moodlenet/meta/issues/185
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
          return unlikeMut({
            variables: { contextId: myLike.id }
          });
        } else {
          return likeMut({
            variables: {
              contextId:
                activity.context.__typename === 'User'
                  ? activity.context.userId
                  : activity.context.id
            }
          });
        }
      }
    }
  });

  return toggleLikeFormik;
};
