import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';
import { Middleware } from 'redux';
import {
  gqlResponse,
  gqlRequest,
  SdkReqActionPayload,
  SdkRespActionPayload,
  SdkRespErr,
  SdkRespLoading,
  SdkRespOk,
  setToken
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
    if (setToken.is(action)) {
      client.setHeader('authorization', `Bearer ${action.payload}`);
    } else if (gqlRequest.is(action)) {
      Object.keys(action.payload.op).forEach((opName: SdkKey) => {
        next(gqlResponse.create(responseActionLoading(opName, action.payload)));
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
const responseActionLoading = <K extends SdkKey>(
  opName: K,
  req: SdkReqActionPayload
): SdkRespActionPayload<K> => {
  const resp = ({
    [opName]: {
      error: false,
      data: null,
      loading: true
      // req
    }
  } as unknown) as SdkRespLoading;
  return {
    replyTo: req.replyTo,
    opName,
    resp
  };
};
const responseActionOk = <K extends SdkKey>(
  opName: K,
  req: SdkReqActionPayload
) => (data: RespType): SdkRespActionPayload<K> => {
  const resp = ({
    [opName]: {
      error: false,
      data,
      loading: false
      // req
    }
  } as unknown) as SdkRespOk;
  return {
    replyTo: req.replyTo,
    opName,
    resp
  };
};
const responseActionKo = <K extends SdkKey>(
  opName: K,
  req: SdkReqActionPayload
) => (err: any): SdkRespActionPayload<K> => {
  const resp = ({
    [opName]: {
      error: true,
      msg: String(err),
      loading: false
      //req
    }
  } as unknown) as SdkRespErr;
  return {
    replyTo: req.replyTo,
    opName,
    resp
  };
};
