import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';
import { createHttpLink } from 'apollo-link-http';
import { hasSubscription } from '@jumpn/utils-graphql';
import apolloLogger from 'apollo-link-logger';
import * as AbsintheSocket from '@absinthe/socket';
const introspectionQueryResultData = require('../fragmentTypes.json');
import {
  GRAPHQL_ENDPOINT,
  PHOENIX_SOCKET_ENDPOINT,
  LOCAL_STORAGE_USER_ACCESS_TOKEN,
  IS_DEV
} from '../constants';

import { onError } from 'apollo-link-error';
// import { RootMutationType } from '../generated/graphqlapollo';
// import { OperationDefinitionNode } from 'graphql';

// const { meQuery } = require('../graphql/me.graphql');

export default async function initialise() {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });

  const cache = new InMemoryCache({ fragmentMatcher });

  /**
   * This context link is used to assign the necessary Authorization header
   * to all HTTP requests to the GraphQL backend. In the case that the user
   * is authenticated it sets their access token as the value, otherwise null.
   */
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from localstorage if it exists
    let token = localStorage.getItem(LOCAL_STORAGE_USER_ACCESS_TOKEN);

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null
      }
    };
  });

  function handleError(message) {
    alert(message); //TODO: nicer display of errors
  }

  function handleErrorGraphQL(message, locations, path) {
    console.log(
      `! GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`
    );

    if (!message.includes('You need to log in first')) {
      // don't display this error - we redirect to login screen instead
      handleError(message);
    }
  }

  const errorLink = onError(
    ({ operation, response, graphQLErrors, networkError }) => {
      // console.log( 'errorLink', operation, response );

      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          handleErrorGraphQL(message, locations, path)
        );
      }

      if (networkError) {
        console.log(`! Network error: ${networkError}`);
        handleError(networkError);
      }
    }
  );

  const headersLink = setContext((_, ctx) => {
    const { headers } = ctx;
    return {
      ...ctx,
      clientAwareness: undefined,
      headers: {
        ...headers
      }
    };
  });

  // const mutationFinder = new ApolloLink((operation,nextLink)=>{
  //   type MutationName = keyof RootMutationType

  //   const maybeMutationDef = operation.query.definitions.find((def):def is OperationDefinitionNode =>
  //     def.kind ==='OperationDefinition' &&
  //     def.operation==='mutation' &&
  //     !!def.name &&
  //     def.name.value === operation.operationName &&
  //     !!def
  //   )

  //   if(maybeMutationDef){
  //     console.log('*** found a mutation', operation.operationName)
  //     const mutationName = operation.operationName.replace(/Mutation$/,'') as MutationName
  //     if(mutationName==='undoLikeComment'){
  //       console.log('*** found undoLikeComment **', mutationName, operation)
  //     }
  //   }
  //   return nextLink(operation)
  // })

  // used for graphql query and mutations
  const httpLink = ApolloLink.from(
    [
      IS_DEV ? apolloLogger : null,
      errorLink,
      authLink,
      headersLink,
      // mutationFinder,
      createHttpLink({ uri: GRAPHQL_ENDPOINT })
    ].filter(Boolean)
  );

  // used for graphql subscriptions
  const absintheSocket = createAbsintheSocketLink(
    AbsintheSocket.create(new PhoenixSocket(PHOENIX_SOCKET_ENDPOINT))
  );

  // if the operation is a subscription then use
  // the absintheSocket otherwise use the httpLink
  const link = ApolloLink.split(
    operation => hasSubscription(operation.query),
    absintheSocket,
    httpLink
  );

  const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  });

  return client;
}
