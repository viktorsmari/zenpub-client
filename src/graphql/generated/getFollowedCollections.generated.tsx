import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetFollowedCollectionsQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>;
  endColl?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetFollowedCollectionsQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<Types.User, 'id'> & {
            followingCollections: Types.Maybe<
              { __typename?: 'UserFollowingCollectionsConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  Types.PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Types.Maybe<
                  Array<
                    Types.Maybe<
                      { __typename?: 'UserFollowingCollectionsEdge' } & {
                        node: Types.Maybe<
                          { __typename?: 'Collection' } & Pick<
                            Types.Collection,
                            | 'id'
                            | 'localId'
                            | 'preferredUsername'
                            | 'name'
                            | 'summary'
                            | 'icon'
                            | 'followed'
                          > & {
                              community: Types.Maybe<
                                { __typename?: 'Community' } & Pick<
                                  Types.Community,
                                  'localId' | 'id'
                                >
                              >;
                              followers: Types.Maybe<
                                {
                                  __typename?: 'CollectionFollowersConnection';
                                } & Pick<
                                  Types.CollectionFollowersConnection,
                                  'totalCount'
                                >
                              >;
                              resources: Types.Maybe<
                                {
                                  __typename?: 'CollectionResourcesConnection';
                                } & Pick<
                                  Types.CollectionResourcesConnection,
                                  'totalCount'
                                >
                              >;
                              threads: Types.Maybe<
                                {
                                  __typename?: 'CollectionThreadsConnection';
                                } & Pick<
                                  Types.CollectionThreadsConnection,
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

export const GetFollowedCollectionsDocument = gql`
  query getFollowedCollections($limit: Int, $endColl: Int) {
    me {
      user {
        id
        followingCollections(limit: $limit, after: $endColl) {
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
              community {
                localId
                id
              }
              followed
              followers {
                totalCount
              }
              resources {
                totalCount
              }
              threads {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
export type GetFollowedCollectionsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >,
  'query'
>;

export const GetFollowedCollectionsComponent = (
  props: GetFollowedCollectionsComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
    query={GetFollowedCollectionsDocument}
    {...props}
  />
);

export type GetFollowedCollectionsProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFollowedCollectionsQuery,
  GetFollowedCollectionsQueryVariables
> &
  TChildProps;
export function withGetFollowedCollections<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables,
    GetFollowedCollectionsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables,
    GetFollowedCollectionsProps<TChildProps>
  >(GetFollowedCollectionsDocument, {
    alias: 'getFollowedCollections',
    ...operationOptions
  });
}

/**
 * __useGetFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowedCollectionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endColl: // value for 'endColl'
 *   },
 * });
 */
export function useGetFollowedCollectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >(GetFollowedCollectionsDocument, baseOptions);
}
export function useGetFollowedCollectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFollowedCollectionsQuery,
    GetFollowedCollectionsQueryVariables
  >(GetFollowedCollectionsDocument, baseOptions);
}
export type GetFollowedCollectionsQueryHookResult = ReturnType<
  typeof useGetFollowedCollectionsQuery
>;
export type GetFollowedCollectionsLazyQueryHookResult = ReturnType<
  typeof useGetFollowedCollectionsLazyQuery
>;
export type GetFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<
  GetFollowedCollectionsQuery,
  GetFollowedCollectionsQueryVariables
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
