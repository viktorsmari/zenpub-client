import { actionCtx } from '../util/redux/Actions';
import { SdkKey, RespType, Sdk } from './gql';

type SdkReq = Partial<{ [K in SdkKey]: Parameters<Sdk[K]> }>;
export type SdkRespOk = {
  [K in SdkKey]: {
    loading: false;
    error: false;
    data: RespType<K>;
    // req:SdkReq[K]
  }
};

export type SdkRespLoading = {
  [K in SdkKey]: {
    loading: true;
    error: false;
    data: null;
    // req:SdkReq[K]
  }
};

export type SdkRespErr = {
  [K in SdkKey]: {
    loading: false;
    error: true;
    msg: string;
    // req:SdkReq[K]
  }
};

export type SdkRespObj = SdkRespErr | SdkRespOk | SdkRespLoading;
export type SdkData<K extends SdkKey> = SdkRespOk[K]['data'];

export interface SdkReqActionPayload {
  op: SdkReq;
  replyTo: any;
}
export interface SdkRespActionPayload<K extends SdkKey> {
  opName: SdkKey;
  loading: boolean;
  resp: Partial<SdkRespObj>;
  replyTo: any;
}

export const gqlRequest = actionCtx<'mw.gql.gqlRequest', SdkReqActionPayload>(
  'mw.gql.gqlRequest'
);
export const gqlResponse = actionCtx<
  'mw.gql.gqlResponse',
  SdkRespActionPayload<SdkKey>
>('mw.gql.gqlResponse');

export const setToken = actionCtx<'mw.gql.setToken', string>('mw.gql.setToken');
