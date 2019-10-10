import { actionCtx } from '../../util/redux/Actions';

export const selectThread = actionCtx<
  'pages.thread.selectThread',
  { thing: number }
>('pages.thread.selectThread');
// export const getThread = actionCtx<'pages.thread.getThread', { id: number }>('pages.thread.getThread')
