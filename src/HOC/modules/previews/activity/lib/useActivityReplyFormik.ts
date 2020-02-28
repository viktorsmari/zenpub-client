import { useReplyComment } from 'fe/comment/reply/useReplyComment';
import { useFormik } from 'formik';
import { CommentPreviewFragment } from '../../comment/CommentPreview.generated';

export const useActivityReplyFormik = (context: CommentPreviewFragment) => {
  const { reply } = useReplyComment(context);

  return useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => reply(replyMessage)
  });
};
