import React, { createContext, useContext, useRef } from 'react';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../gql/sdk';
import { SessionContext } from '../../_context/global/sessionCtx';

type Sdk = ReturnType<typeof getSdk>;

export const GqlSdkCtx = createContext<Sdk>({} as any);

interface Props {}
export const ProvideGqlSdk: React.FC<Props> = ({ children }) => {
  const session = useContext(SessionContext);
  const gqlUrl = useRef(process.env.REACT_APP_GRAPHQL_ENDPOINT || '');
  const client = useRef(new GraphQLClient(gqlUrl.current));
  const sdk = useRef(getSdk(client.current));
  if (session.session.user) {
    client.current.setHeader(
      'authorization',
      `Bearer ${session.session.user.token!}`
    );
  }

  return (
    <GqlSdkCtx.Provider value={sdk.current}>{children}</GqlSdkCtx.Provider>
  );
};
