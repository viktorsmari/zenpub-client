import { SdkRespObj } from '../../gql/actions';

export type Data = SdkRespObj['getThread'];

export const THREAD_PAGE_GQL_REPLY = `pages.thread.gqlReply`;
