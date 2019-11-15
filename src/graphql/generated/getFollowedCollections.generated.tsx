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
  endColl?: Types.Maybe<Types.Scalars['String']>;
};

export type GetFollowedCollectionsQuery = { __typename?: 'RootQueryType' } & {
  me: { __typename?: 'Me' } & {
    user: { __typename?: 'User' } & Pick<
      Types.User,
      'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'isDisabled'
    > & {
        followedCollections: { __typename?: 'FollowedCollectionsEdges' } & {
          pageInfo: Types.Maybe<
            { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >
          >;
          edges: Array<
            Types.Maybe<
              { __typename?: 'FollowedCollectionsEdge' } & {
                node: { __typename?: 'FollowedCollection' } & {
                  follow: { __typename?: 'Follow' } & Pick<
                    Types.Follow,
                    'id' | 'canonicalUrl'
                  >;
                  collection: { __typename: 'Collection' } & Pick<
                    Types.Collection,
                    | 'preferredUsername'
                    | 'name'
                    | 'summary'
                    | 'icon'
                    | 'isLocal'
                    | 'isPublic'
                    | 'isDisabled'
                    | 'createdAt'
                    | 'lastActivity'
                  > & {
                      myFollow: Types.Maybe<
                        { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
                      >;
                      myLike: Types.Maybe<
                        { __typename?: 'Like' } & Pick<Types.Like, 'id'>
                      >;
                      community: { __typename?: 'Community' } & Pick<
                        Types.Community,
                        | 'id'
                        | 'canonicalUrl'
                        | 'preferredUsername'
                        | 'isLocal'
                        | 'isPublic'
                        | 'isDisabled'
                        | 'icon'
                      > & {
                          myFollow: Types.Maybe<
                            { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
                          >;
                        };
                      followers: { __typename?: 'FollowsEdges' } & Pick<
                        Types.FollowsEdges,
                        'totalCount'
                      >;
                      likes: { __typename?: 'LikesEdges' } & Pick<
                        Types.LikesEdges,
                        'totalCount'
                      >;
                      resources: { __typename?: 'ResourcesEdges' } & Pick<
                        Types.ResourcesEdges,
                        'totalCount'
                      >;
                      threads: { __typename?: 'ThreadsEdges' } & Pick<
                        Types.ThreadsEdges,
                        'totalCount'
                      >;
                    };
                };
              }
            >
          >;
        };
      };
  };
};

export const GetFollowedCollectionsDocument = gql`
  query getFollowedCollections($limit: Int, $endColl: String) {
    me {
      user {
        id
        canonicalUrl
        isLocal
        isPublic
        isDisabled
        followedCollections(limit: $limit, after: $endColl) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              follow {
                id
                canonicalUrl
              }
              collection {
                __typename
                ... on Collection {
                  preferredUsername
                  name
                  summary
                  icon
                  isLocal
                  isPublic
                  isDisabled
                  createdAt
                  lastActivity
                  myFollow {
                    id
                  }
                  myLike {
                    id
                  }
                  community {
                    id
                    canonicalUrl
                    preferredUsername
                    isLocal
                    isPublic
                    isDisabled
                    icon
                    myFollow {
                      id
                    }
                  }
                  followers {
                    totalCount
                  }
                  likes {
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
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'DeleteContext',
        possibleTypes: [
          {
            name: 'Activity'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Country'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Language'
          },
          {
            name: 'Like'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
