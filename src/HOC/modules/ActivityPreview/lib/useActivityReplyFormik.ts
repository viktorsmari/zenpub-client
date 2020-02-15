import { useFormik } from 'formik';
import { useContext } from 'react';
import { ActivityPreviewCtx } from '../activityPreviewHOC';
import { MaybeActivityPreviewData } from '../types';

export const useActivityReplyFormik = (activity: MaybeActivityPreviewData) => {
  const {
    useActivityPreviewCreateThreadMutation,
    useActivityPreviewCreateReplyMutation
  } = useContext(ActivityPreviewCtx);
  const [
    createThreadMut,
    createThreadMutStatus
  ] = useActivityPreviewCreateThreadMutation();
  const [
    createReplyMut,
    createReplyMutStatus
  ] = useActivityPreviewCreateReplyMutation();

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => {
      //FIXME https://gitlab.com/moodlenet/meta/issues/185
      if (!activity || !activity.context) {
        return;
      }

      if (
        !activity ||
        'Like' === activity.context.__typename ||
        'Flag' === activity.context.__typename ||
        'Follow' === activity.context.__typename ||
        createReplyMutStatus.loading ||
        createThreadMutStatus.loading
      ) {
        return;
      } else if (activity.context.__typename === 'Comment') {
        const { thread, id } = activity.context;

        //FIXME https://gitlab.com/moodlenet/meta/issues/185
        if (!thread) {
          return;
        }

        return createReplyMut({
          variables: {
            threadId: thread.id,
            inReplyToId: id,
            comment: { content: replyMessage }
          }
        });
      } else {
        return createThreadMut({
          variables: {
            contextId:
              activity.context.__typename == 'User'
                ? activity.context.userId
                : activity.context.id,
            comment: { content: replyMessage }
          }
        });
      }
    }
  });
  return replyFormik;
};
