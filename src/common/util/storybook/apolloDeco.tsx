import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink, FetchResult, Observable } from 'apollo-link';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  OperationDef,
  Name,
  Result,
  apolloLinkOp,
  VarsOperation
} from 'util/apollo/operation';
import { action } from '@storybook/addon-actions';
import { GraphQLError } from 'graphql';

export const apolloMockDeco = (...links: ApolloLink[]) => storyFn => {
  const link = ApolloLink.from(links).concat(
    new ApolloLink(op => {
      const msg = `Apollo Operation WARN Mock NOT_FOUND: ${op.operationName}`;
      action(msg)(op);
      console.error(msg, op);
      return Observable.of({
        errors: [new GraphQLError(msg)]
      });
    })
  );
  const cli = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
  return <ApolloProvider client={cli}>{storyFn()}</ApolloProvider>;
};

export const mockLink = <OpDef extends OperationDef>(
  name: Name<OpDef>,
  responseProvider: (op: VarsOperation<OpDef>) => FetchResult<Result<OpDef>>,
  actiontag = '',
  delay = 500
) =>
  apolloLinkOp<OpDef>(name, op => {
    const tag = `${actiontag ? `[${actiontag}] ` : ''}`;
    const reqmsg = `${tag}Apollo Operation ${name}`;
    action(reqmsg)(op);
    console.info(reqmsg, op);
    const response = responseProvider(op);
    return new Observable(observer => {
      let timer = setTimeout(() => {
        const respmsg = `${tag}Apollo Result ${name} `;
        action(respmsg)(response);
        console.info(respmsg, response);
        observer.next(response);
        observer.complete();
      }, delay);
      return () => clearTimeout(timer);
    });
  });
