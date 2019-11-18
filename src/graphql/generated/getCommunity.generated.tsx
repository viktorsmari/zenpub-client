import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import * as Types from '../types.d';

import { BasicResourceFragment } from '../fragments/generated/basicResource.generated';
import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import { BasicUserFragment } from '../fragments/generated/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from '../fragments/generated/basicUser.generated';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import { BasicCommentWithInReplyToFragment } from '../fragments/generated/basicComment.generated';
import { BasicResourceFragmentDoc } from '../fragments/generated/basicResource.generated';
import { BasicCommentWithInReplyToFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetCommunityQueryQueryVariables = {
  communityId: Types.Scalars['String'];
  limit?: Types.Maybe<Types.Scalars['Int']>;
  end?: Types.Maybe<Types.Scalars['String']>;
};

export type GetCommunityQueryQuery = { __typename?: 'RootQueryType' } & {
  community: Types.Maybe<
    { __typename?: 'Community' } & Pick<
      Types.Community,
      | 'id'
      | 'canonicalUrl'
      | 'preferredUsername'
      | 'name'
      | 'summary'
      | 'icon'
      | 'image'
      | 'createdAt'
      | 'updatedAt'
      | 'lastActivity'
      | 'isLocal'
      | 'isPublic'
      | 'isDisabled'
    > & {
        creator: { __typename?: 'User' } & Pick<Types.User, 'id'>;
        myFollow: Types.Maybe<
          { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
        >;
        inbox: { __typename?: 'ActivitiesEdges' } & {
          pageInfo: Types.Maybe<
            { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >
          >;
          edges: Array<
            Types.Maybe<
              { __typename?: 'ActivitiesEdge' } & {
                node: { __typename?: 'Activity' } & Pick<
                  Types.Activity,
                  | 'id'
                  | 'canonicalUrl'
                  | 'verb'
                  | 'isLocal'
                  | 'isPublic'
                  | 'createdAt'
                > & {
                    user: { __typename?: 'User' } & BasicUserFragment;
                    context:
                      | ({
                          __typename?: 'Collection';
                        } & BasicCollectionFragment)
                      | ({
                          __typename?: 'Comment';
                        } & BasicCommentWithInReplyToFragment)
                      | ({ __typename?: 'Community' } & BasicCommunityFragment)
                      | ({ __typename?: 'Resource' } & BasicResourceFragment);
                  };
              }
            >
          >;
        };
        followers: { __typename?: 'FollowsEdges' } & Pick<
          Types.FollowsEdges,
          'totalCount'
        > & {
            pageInfo: Types.Maybe<
              { __typename?: 'PageInfo' } & Pick<
                Types.PageInfo,
                'startCursor' | 'endCursor'
              >
            >;
            edges: Array<
              Types.Maybe<
                { __typename?: 'FollowsEdge' } & {
                  node: { __typename?: 'Follow' } & Pick<
                    Types.Follow,
                    'id' | 'canonicalUrl' | 'isLocal' | 'isPublic'
                  > & {
                      creator: { __typename?: 'User' } & Pick<
                        Types.User,
                        'id' | 'icon'
                      >;
                    };
                }
              >
            >;
          };
        collections: { __typename?: 'CollectionsEdges' } & Pick<
          Types.CollectionsEdges,
          'totalCount'
        > & {
            pageInfo: Types.Maybe<
              { __typename?: 'PageInfo' } & Pick<
                Types.PageInfo,
                'startCursor' | 'endCursor'
              >
            >;
            edges: Array<
              Types.Maybe<
                { __typename?: 'CollectionsEdge' } & {
                  node: { __typename?: 'Collection' } & Pick<
                    Types.Collection,
                    | 'id'
                    | 'canonicalUrl'
                    | 'preferredUsername'
                    | 'name'
                    | 'summary'
                    | 'icon'
                  > & {
                      myFollow: Types.Maybe<
                        { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
                      >;
                      likes: { __typename?: 'LikesEdges' } & Pick<
                        Types.LikesEdges,
                        'totalCount'
                      >;
                      followers: { __typename?: 'FollowsEdges' } & Pick<
                        Types.FollowsEdges,
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
                      outbox: { __typename?: 'ActivitiesEdges' } & Pick<
                        Types.ActivitiesEdges,
                        'totalCount'
                      >;
                    };
                }
              >
            >;
          };
      }
  >;
};

export const GetCommunityQueryDocument = gql`
  query getCommunityQuery($communityId: String!, $limit: Int, $end: String) {
    community(communityId: $communityId) {
      id
      canonicalUrl
      preferredUsername
      name
      summary
      icon
      image
      createdAt
      creator {
        id
      }
      updatedAt
      lastActivity
      isLocal
      isPublic
      isDisabled
      myFollow {
        id
      }
      inbox(limit: $limit, after: $end) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            canonicalUrl
            verb
            isLocal
            isPublic
            createdAt
            user {
              ...BasicUser
            }
            context {
              __typename
              ... on Community {
                ...BasicCommunity
              }
              ... on Collection {
                ...BasicCollection
              }
              ... on Resource {
                ...BasicResource
              }
              ... on Comment {
                ...BasicCommentWithInReplyTo
              }
            }
          }
        }
      }
      followers {
        pageInfo {
          startCursor
          endCursor
        }
        totalCount
        edges {
          node {
            id
            canonicalUrl
            isLocal
            isPublic
            creator {
              id
              icon
            }
          }
        }
      }
      collections {
        pageInfo {
          startCursor
          endCursor
        }
        totalCount
        edges {
          node {
            id
            canonicalUrl
            preferredUsername
            name
            summary
            icon
            myFollow {
              id
            }
            likes {
              totalCount
            }
            followers {
              totalCount
            }
            resources {
              totalCount
            }
            threads {
              totalCount
            }
            outbox {
              totalCount
            }
          }
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
  ${BasicCommentWithInReplyToFragmentDoc}
`;
export type GetCommunityQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetCommunityQueryQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetCommunityQueryComponent = (
  props: GetCommunityQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
    query={GetCommunityQueryDocument}
    {...props}
  />
);

export type GetCommunityQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetCommunityQueryQuery,
  GetCommunityQueryQueryVariables
> &
  TChildProps;
export function withGetCommunityQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables,
    GetCommunityQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables,
    GetCommunityQueryProps<TChildProps>
  >(GetCommunityQueryDocument, {
    alias: 'getCommunityQuery',
    ...operationOptions
  });
}

/**
 * __useGetCommunityQueryQuery__
 *
 * To run a query within a React component, call `useGetCommunityQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityQueryQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCommunityQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >(GetCommunityQueryDocument, baseOptions);
}
export function useGetCommunityQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCommunityQueryQuery,
    GetCommunityQueryQueryVariables
  >(GetCommunityQueryDocument, baseOptions);
}
export type GetCommunityQueryQueryHookResult = ReturnType<
  typeof useGetCommunityQueryQuery
>;
export type GetCommunityQueryLazyQueryHookResult = ReturnType<
  typeof useGetCommunityQueryLazyQuery
>;
export type GetCommunityQueryQueryResult = ApolloReactCommon.QueryResult<
  GetCommunityQueryQuery,
  GetCommunityQueryQueryVariables
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
            name: 'Flag'
          },
          {
            name: 'Follow'
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
