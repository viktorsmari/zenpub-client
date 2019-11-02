import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetJoinedCommunitiesQueryQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>;
  endComm?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetJoinedCommunitiesQueryQuery = {
  __typename?: 'RootQueryType';
} & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<Types.User, 'id'> & {
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
                              threads: Types.Maybe<
                                {
                                  __typename?: 'CommunityThreadsConnection';
                                } & Pick<
                                  Types.CommunityThreadsConnection,
                                  'totalCount'
                                >
                              >;
                              collections: Types.Maybe<
                                {
                                  __typename?: 'CommunityCollectionsConnection';
                                } & Pick<
                                  Types.CommunityCollectionsConnection,
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

export const GetJoinedCommunitiesQueryDocument = gql`
  query getJoinedCommunitiesQuery($limit: Int, $endComm: Int) {
    me {
      user {
        id
        joinedCommunities(limit: $limit, after: $endComm) {
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
              threads {
                totalCount
              }
              icon
              collections {
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
export type GetJoinedCommunitiesQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >,
  'query'
>;

export const GetJoinedCommunitiesQueryComponent = (
  props: GetJoinedCommunitiesQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
    query={GetJoinedCommunitiesQueryDocument}
    {...props}
  />
);

export type GetJoinedCommunitiesQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetJoinedCommunitiesQueryQuery,
  GetJoinedCommunitiesQueryQueryVariables
> &
  TChildProps;
export function withGetJoinedCommunitiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables,
    GetJoinedCommunitiesQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables,
    GetJoinedCommunitiesQueryProps<TChildProps>
  >(GetJoinedCommunitiesQueryDocument, {
    alias: 'getJoinedCommunitiesQuery',
    ...operationOptions
  });
}

/**
 * __useGetJoinedCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetJoinedCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJoinedCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJoinedCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetJoinedCommunitiesQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >(GetJoinedCommunitiesQueryDocument, baseOptions);
}
export function useGetJoinedCommunitiesQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetJoinedCommunitiesQueryQuery,
    GetJoinedCommunitiesQueryQueryVariables
  >(GetJoinedCommunitiesQueryDocument, baseOptions);
}
export type GetJoinedCommunitiesQueryQueryHookResult = ReturnType<
  typeof useGetJoinedCommunitiesQueryQuery
>;
export type GetJoinedCommunitiesQueryLazyQueryHookResult = ReturnType<
  typeof useGetJoinedCommunitiesQueryLazyQuery
>;
export type GetJoinedCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<
  GetJoinedCommunitiesQueryQuery,
  GetJoinedCommunitiesQueryQueryVariables
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
