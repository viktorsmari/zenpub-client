import { actionCtx } from '../util/redux/Actions';
import { SdkKey, RespType, Sdk } from './gql';

type SdkReq = Partial<{ [K in SdkKey]: Parameters<Sdk[K]> }>;
type SdkRespOk = Partial<
  {
    [K in SdkKey]: {
      error: false;
      data: RespType<K>;
    }
  }
>;

type SdkRespErr = Partial<
  {
    [K in SdkKey]: {
      error: true;
      msg: string;
    }
  }
>;

type SdkResp = SdkRespErr | SdkRespOk;

export interface SdkReqActionPayload {
  op: SdkReq;
  replyTo: any;
}
export interface SdkRespActionPayload {
  opName: SdkKey;
  resp: SdkResp;
  replyTo: any;
}

export const gqlRequest = actionCtx<'mw.gql.gqlRequest', SdkReqActionPayload>(
  'mw.gql.gqlRequest'
);
export const gqlResponse = actionCtx<
  'mw.gql.gqlResponse',
  SdkRespActionPayload
>('mw.gql.gqlResponse');
