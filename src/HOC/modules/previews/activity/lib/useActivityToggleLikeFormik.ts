import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useFormik } from 'formik';
import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from '../ActivityPreview.generated';

export const useActivityToggleLikeFormik = (
  activity: Maybe<ActivityPreviewFragment>
) => {
  //FIXME: bad stuff!!
  const { toggleLike } =
    activity &&
    activity.context &&
    ('Resource' === activity.context.__typename ||
      'Comment' === activity.context.__typename)
      ? useLikeContext(
          activity.context.id,
          activity.context.myLike,
          'Resource' === activity.context.__typename
            ? activity.context.likes?.totalCount
            : activity.context.likerCount,
          activity.context.__typename
        )
      : useLikeContext(null, null, null, 'Comment'); // fake

  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleLike
  });

  return activity?.context?.__typename === 'Comment' ||
    activity?.context?.__typename === 'Resource'
    ? toggleLikeFormik
    : null;
};
