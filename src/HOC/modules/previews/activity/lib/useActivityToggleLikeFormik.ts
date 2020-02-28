import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useFormik } from 'formik';
import { CommentPreviewFragment } from '../../comment/CommentPreview.generated';
import { ResourcePreviewFragment } from '../../resource/ResourcePreview.generated';

export const useActivityToggleLikeFormik = (
  context: CommentPreviewFragment | ResourcePreviewFragment
) => {
  const { toggleLike } = useLikeContext(
    context.id,
    context.myLike,
    'Resource' === context.__typename
      ? context.likes?.totalCount
      : context.likerCount,
    context.__typename
  );

  return useFormik<{}>({
    initialValues: {},
    onSubmit: toggleLike
  });
};
