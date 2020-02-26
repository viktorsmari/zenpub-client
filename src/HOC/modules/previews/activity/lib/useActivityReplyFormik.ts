import { useReplyComment } from 'fe/comment/reply/useReplyComment';
import { useCreateThreadContext } from 'fe/context/createThread/useCreateThreadContext';
import { useFormik } from 'formik';
import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from '../ActivityPreview.generated';

export const useActivityReplyFormik = (
  activity: Maybe<ActivityPreviewFragment>
) => {
  const { reply } =
    activity?.context?.__typename === 'Comment'
      ? useReplyComment(activity.context)
      : useReplyComment(null);

  const { createThread } = activity?.context
    ? useCreateThreadContext(
        'id' in activity.context ? activity.context.id : activity.context.userId
      )
    : useCreateThreadContext(null);

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) =>
      activity?.context?.__typename === 'Comment'
        ? reply(replyMessage)
        : createThread(replyMessage)
  });
  return replyFormik;
};
