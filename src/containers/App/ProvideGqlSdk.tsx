import React, { createContext } from 'react';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../gql/sdk';

type Sdk = ReturnType<typeof getSdk>;

export const GqlSdkCtx = createContext<Sdk>({} as any);

interface Props {}
export const ProvideGqlSdk: React.FC<Props> = ({ children }) => {
  const gqlUrl = process.env.REACT_APP_GRAPHQL_ENDPOINT || '';
  const client = new GraphQLClient(gqlUrl);
  const sdk = getSdk(client);

  return <GqlSdkCtx.Provider value={sdk}>{children}</GqlSdkCtx.Provider>;
};
