import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetSidebarQueryQueryVariables = {
  limitComm?: Types.Maybe<Types.Scalars['Int']>;
  endComm?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetSidebarQueryQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<
          Types.User,
          'id' | 'name' | 'preferredUsername' | 'icon'
        > & {
            joinedCommunities: Types.Maybe<
              { __typename?: 'UserJoinedCommunitiesConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  Types.PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Types.Maybe<
                  Array<
                    Types.Maybe<
                      { __typename?: 'UserJoinedCommunitiesEdge' } & {
                        node: Types.Maybe<
                          { __typename?: 'Community' } & Pick<
                            Types.Community,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              collections: Types.Maybe<
                                {
                                  __typename?: 'CommunityCollectionsConnection';
                                } & Pick<
                                  Types.CommunityCollectionsConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Types.Maybe<
                                {
                                  __typename?: 'CommunityThreadsConnection';
                                } & Pick<
                                  Types.CommunityThreadsConnection,
                                  'totalCount'
                                >
                              >;
                              members: Types.Maybe<
                                {
                                  __typename?: 'CommunityMembersConnection';
                                } & Pick<
                                  Types.CommunityMembersConnection,
                                  'totalCount'
                                >
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
          }
      >;
    }
  >;
};

export const GetSidebarQueryDocument = gql`
  query getSidebarQuery($limitComm: Int, $endComm: Int) {
    me {
      user {
        id
        name
        preferredUsername
        icon
        joinedCommunities(limit: $limitComm, after: $endComm) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              localId
              preferredUsername
              name
              summary
              icon
              collections {
                totalCount
              }
              threads {
                totalCount
              }
              members {
                totalCount
              }
              followed
            }
          }
        }
      }
    }
  }
`;
export type GetSidebarQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >,
  'query'
>;

export const GetSidebarQueryComponent = (
  props: GetSidebarQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
    query={GetSidebarQueryDocument}
    {...props}
  />
);

export type GetSidebarQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetSidebarQueryQuery,
  GetSidebarQueryQueryVariables
> &
  TChildProps;
export function withGetSidebarQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables,
    GetSidebarQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables,
    GetSidebarQueryProps<TChildProps>
  >(GetSidebarQueryDocument, {
    alias: 'getSidebarQuery',
    ...operationOptions
  });
}

/**
 * __useGetSidebarQueryQuery__
 *
 * To run a query within a React component, call `useGetSidebarQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSidebarQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSidebarQueryQuery({
 *   variables: {
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetSidebarQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >(GetSidebarQueryDocument, baseOptions);
}
export function useGetSidebarQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetSidebarQueryQuery,
    GetSidebarQueryQueryVariables
  >(GetSidebarQueryDocument, baseOptions);
}
export type GetSidebarQueryQueryHookResult = ReturnType<
  typeof useGetSidebarQueryQuery
>;
export type GetSidebarQueryLazyQueryHookResult = ReturnType<
  typeof useGetSidebarQueryLazyQuery
>;
export type GetSidebarQueryQueryResult = ApolloReactCommon.QueryResult<
  GetSidebarQueryQuery,
  GetSidebarQueryQueryVariables
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
