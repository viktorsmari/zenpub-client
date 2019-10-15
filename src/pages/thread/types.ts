import { SdkRespObj } from 'src/gql/actions';

export type Data = SdkRespObj['getThread'];

export const GET_THREAD_REPLY = `pages.thread.getThread`;
export const REPLY_THREAD_REPLY = `pages.thread.replyThread`;
