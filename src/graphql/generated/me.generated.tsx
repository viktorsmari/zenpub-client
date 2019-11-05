import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type MeQueryQueryVariables = {};

export type MeQueryQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & Pick<Types.Me, 'email'> & {
        user: Types.Maybe<
          { __typename?: 'User' } & Pick<
            Types.User,
            | 'id'
            | 'name'
            | 'preferredUsername'
            | 'location'
            | 'icon'
            | 'image'
            | 'summary'
          >
        >;
      }
  >;
};

export const MeQueryDocument = gql`
  query meQuery {
    me {
      email
      user {
        id
        name
        preferredUsername
        location
        icon
        image
        summary
      }
    }
  }
`;
export type MeQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >,
  'query'
>;

export const MeQueryComponent = (props: MeQueryComponentProps) => (
  <ApolloReactComponents.Query<MeQueryQuery, MeQueryQueryVariables>
    query={MeQueryDocument}
    {...props}
  />
);

export type MeQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  MeQueryQuery,
  MeQueryQueryVariables
> &
  TChildProps;
export function withMeQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    MeQueryQuery,
    MeQueryQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, {
    alias: 'meQuery',
    ...operationOptions
  });
}

/**
 * __useMeQueryQuery__
 *
 * To run a query within a React component, call `useMeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MeQueryQuery, MeQueryQueryVariables>(
    MeQueryDocument,
    baseOptions
  );
}
export function useMeQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MeQueryQuery,
    MeQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<MeQueryQuery, MeQueryQueryVariables>(
    MeQueryDocument,
    baseOptions
  );
}
export type MeQueryQueryHookResult = ReturnType<typeof useMeQueryQuery>;
export type MeQueryLazyQueryHookResult = ReturnType<typeof useMeQueryLazyQuery>;
export type MeQueryQueryResult = ApolloReactCommon.QueryResult<
  MeQueryQuery,
  MeQueryQueryVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
