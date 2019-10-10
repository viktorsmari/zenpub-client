import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';
import { Middleware } from 'redux';
import {
  gqlResponse,
  gqlRequest,
  SdkReqActionPayload,
  SdkRespActionPayload
} from './actions';

export type Sdk = ReturnType<typeof getSdk>;
export type SdkKey = keyof Sdk;
export type RespType<K extends SdkKey = SdkKey> = ReturnType<
  Sdk[K]
> extends Promise<infer T>
  ? T
  : never;

export const GqlSdkMiddleware = (): Middleware => {
  const gqlUrl = process.env.REACT_APP_GRAPHQL_ENDPOINT || '';
  const client = new GraphQLClient(gqlUrl);
  const sdk = getSdk(client);

  return _store => next => action => {
    if (gqlRequest.is(action)) {
      Object.keys(action.payload.op).forEach((opName: SdkKey) => {
        (sdk[opName].apply(sdk, action.payload.op[opName]) as Promise<RespType>)
          .then(
            responseActionOk(opName, action.payload),
            responseActionKo(opName, action.payload)
          )
          .then(payload => next(gqlResponse.create(payload)));
      });
    }
    return next(action);
  };
};
const responseActionOk = (opName: SdkKey, reqAction: SdkReqActionPayload) => (
  resp: RespType
): SdkRespActionPayload => ({
  replyTo: reqAction.replyTo,
  opName,
  resp: {
    [opName]: {
      error: false,
      data: resp
    }
  }
});
const responseActionKo = (opName: SdkKey, reqAction: SdkReqActionPayload) => (
  err: any
): SdkRespActionPayload => ({
  replyTo: reqAction.replyTo,
  opName,
  resp: {
    [opName]: {
      error: true,
      msg: String(err)
    }
  }
});
