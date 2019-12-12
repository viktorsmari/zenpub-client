import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink, Observable, FetchResult } from 'apollo-link';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  OperationDef,
  Name,
  Result,
  apolloLinkOp,
  VarsOperation
} from 'util/apollo/operation';

export const apolloMockDeco = (...links: ApolloLink[]) => storyFn => {
  const cli = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from(links)
  });
  return <ApolloProvider client={cli}>{storyFn()}</ApolloProvider>;
};

export const mockLink = <OpDef extends OperationDef>(
  name: Name<OpDef>,
  responseProvider: (op: VarsOperation<OpDef>) => FetchResult<Result<OpDef>>,
  actiontag = ''
) =>
  apolloLinkOp<OpDef>(name, op => {
    const tag = `gqlOp: ${name}${actiontag ? `[${actiontag}]` : ''}`;
    console.info(`**********`);
    console.info(`req ${tag} `, op);
    const response = responseProvider(op);
    console.info(`res ${tag} `, response);
    return Observable.of(response);
  });
