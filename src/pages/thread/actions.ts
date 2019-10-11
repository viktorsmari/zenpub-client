import { actionCtx } from '../../util/redux/Actions';

export const replyThread = actionCtx<
  'pages.thread.replyThread',
  { text: string }
>('pages.thread.replyThread');
// export const getThread = actionCtx<'pages.thread.getThread', { id: number }>('pages.thread.getThread')
