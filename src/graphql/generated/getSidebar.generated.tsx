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
  endComm?: Types.Maybe<Types.Scalars['String']>;
};

export type GetSidebarQueryQuery = { __typename?: 'RootQueryType' } & {
  me: { __typename?: 'Me' } & {
    user: { __typename?: 'User' } & Pick<
      Types.User,
      'id' | 'canonicalUrl' | 'name' | 'preferredUsername' | 'icon'
    > & {
        followedCommunities: { __typename?: 'FollowedCommunitiesEdges' } & {
          pageInfo: Types.Maybe<
            { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >
          >;
          edges: Array<
            Types.Maybe<
              { __typename?: 'FollowedCommunitiesEdge' } & {
                node: { __typename?: 'FollowedCommunity' } & {
                  follow: { __typename?: 'Follow' } & Pick<
                    Types.Follow,
                    'id' | 'canonicalUrl'
                  >;
                  community: { __typename: 'Community' } & Pick<
                    Types.Community,
                    | 'preferredUsername'
                    | 'name'
                    | 'summary'
                    | 'icon'
                    | 'isLocal'
                    | 'isPublic'
                    | 'isDisabled'
                    | 'id'
                  > & {
                      myFollow: Types.Maybe<
                        { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
                      >;
                      collections: { __typename?: 'CollectionsEdges' } & Pick<
                        Types.CollectionsEdges,
                        'totalCount'
                      >;
                      followers: { __typename?: 'FollowsEdges' } & Pick<
                        Types.FollowsEdges,
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

export const GetSidebarQueryDocument = gql`
  query getSidebarQuery($limitComm: Int, $endComm: String) {
    me {
      user {
        id
        canonicalUrl
        name
        preferredUsername
        icon
        followedCommunities(limit: $limitComm, after: $endComm) {
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
              community {
                __typename
                ... on Community {
                  preferredUsername
                  name
                  summary
                  icon
                  isLocal
                  isPublic
                  isDisabled
                  id
                  myFollow {
                    id
                  }
                  collections {
                    totalCount
                  }
                  followers {
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
