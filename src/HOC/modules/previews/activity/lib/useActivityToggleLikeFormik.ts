import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useFormik } from 'formik';
import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from '../ActivityPreview.generated';

export const useActivityToggleLikeFormik = (
  activity: Maybe<ActivityPreviewFragment>
) => {
  //FIXME: bad stuff!!
  const { toggleLike } =
    !activity ||
    !activity.context ||
    'Like' === activity.context.__typename ||
    'Flag' === activity.context.__typename ||
    'Follow' === activity.context.__typename
      ? useLikeContext(null, null, null, 'Collection')
      : useLikeContext(
          'id' in activity.context
            ? activity.context.id
            : activity.context.userId,
          activity.context.myLike,
          'Resource' === activity.context.__typename
            ? activity.context.likes?.totalCount
            : activity.context.likerCount,
          activity.context.__typename
        );

  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleLike
  });

  return toggleLikeFormik;
};
