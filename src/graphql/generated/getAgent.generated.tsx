import * as Types from '../types.d';

import { BasicResourceFragment } from '../fragments/generated/basicResource.generated';
import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import { BasicCommentFragment } from '../fragments/generated/basicComment.generated';
import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import { BasicUserFragment } from '../fragments/generated/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from '../fragments/generated/basicUser.generated';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import { BasicCommentFragmentDoc } from '../fragments/generated/basicComment.generated';
import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import { BasicResourceFragmentDoc } from '../fragments/generated/basicResource.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetAgentQueryQueryVariables = {
  userId: Types.Scalars['String'];
  limitComm?: Types.Maybe<Types.Scalars['Int']>;
  endComm?: Types.Maybe<Types.Scalars['String']>;
  limitColl?: Types.Maybe<Types.Scalars['Int']>;
  endColl?: Types.Maybe<Types.Scalars['String']>;
  limitTimeline?: Types.Maybe<Types.Scalars['Int']>;
  endTimeline?: Types.Maybe<Types.Scalars['String']>;
};

export type GetAgentQueryQuery = { __typename?: 'RootQueryType' } & {
  user: Types.Maybe<
    { __typename?: 'User' } & Pick<
      Types.User,
      | 'id'
      | 'canonicalUrl'
      | 'preferredUsername'
      | 'name'
      | 'summary'
      | 'location'
      | 'website'
      | 'icon'
      | 'image'
      | 'isLocal'
      | 'isPublic'
      | 'isDisabled'
      | 'createdAt'
      | 'updatedAt'
      | 'lastActivity'
    > & {
        myFollow: Types.Maybe<
          { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
        >;
        myLike: Types.Maybe<{ __typename?: 'Like' } & Pick<Types.Like, 'id'>>;
        primaryLanguage: Types.Maybe<
          { __typename?: 'Language' } & Pick<
            Types.Language,
            'id' | 'isoCode2' | 'isoCode3' | 'englishName' | 'localName'
          >
        >;
        outbox: Types.Maybe<
          { __typename?: 'ActivitiesEdges' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'ActivitiesEdge' } & {
                    node: Types.Maybe<
                      { __typename?: 'Activity' } & Pick<
                        Types.Activity,
                        | 'id'
                        | 'canonicalUrl'
                        | 'verb'
                        | 'isLocal'
                        | 'isPublic'
                        | 'createdAt'
                      > & {
                          user: Types.Maybe<
                            { __typename?: 'User' } & BasicUserFragment
                          >;
                          context: Types.Maybe<
                            | ({
                                __typename?: 'Collection';
                              } & BasicCollectionFragment)
                            | ({
                                __typename?: 'Comment';
                              } & BasicCommentFragment)
                            | ({
                                __typename?: 'Community';
                              } & BasicCommunityFragment)
                            | ({
                                __typename?: 'Resource';
                              } & BasicResourceFragment)
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
        followedCommunities: Types.Maybe<
          { __typename?: 'FollowsEdges' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'FollowsEdge' } & {
                    node: Types.Maybe<
                      { __typename?: 'Follow' } & Pick<
                        Types.Follow,
                        | 'id'
                        | 'canonicalUrl'
                        | 'isLocal'
                        | 'isPublic'
                        | 'createdAt'
                      > & {
                          context: Types.Maybe<
                            | { __typename?: 'Collection' }
                            | ({ __typename?: 'Community' } & Pick<
                                Types.Community,
                                | 'id'
                                | 'canonicalUrl'
                                | 'preferredUsername'
                                | 'name'
                                | 'summary'
                                | 'icon'
                                | 'image'
                                | 'isLocal'
                                | 'isPublic'
                                | 'isDisabled'
                                | 'createdAt'
                                | 'updatedAt'
                                | 'lastActivity'
                              > & {
                                  myFollow: Types.Maybe<
                                    { __typename?: 'Follow' } & Pick<
                                      Types.Follow,
                                      'id'
                                    >
                                  >;
                                  primaryLanguage: Types.Maybe<
                                    { __typename?: 'Language' } & Pick<
                                      Types.Language,
                                      | 'id'
                                      | 'isoCode2'
                                      | 'isoCode3'
                                      | 'englishName'
                                      | 'localName'
                                    >
                                  >;
                                  collections: Types.Maybe<
                                    { __typename?: 'CollectionsEdges' } & Pick<
                                      Types.CollectionsEdges,
                                      'totalCount'
                                    >
                                  >;
                                  followers: Types.Maybe<
                                    { __typename?: 'FollowsEdges' } & Pick<
                                      Types.FollowsEdges,
                                      'totalCount'
                                    >
                                  >;
                                  threads: Types.Maybe<
                                    { __typename?: 'ThreadsEdges' } & Pick<
                                      Types.ThreadsEdges,
                                      'totalCount'
                                    >
                                  >;
                                })
                            | { __typename?: 'Thread' }
                            | { __typename?: 'User' }
                          >;
                        }
                    >;
                  }
                >
              >
            >;
          }
        >;
        followedCollections: Types.Maybe<
          { __typename?: 'FollowsEdges' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'FollowsEdge' } & {
                    node: Types.Maybe<
                      { __typename?: 'Follow' } & Pick<
                        Types.Follow,
                        | 'id'
                        | 'canonicalUrl'
                        | 'isLocal'
                        | 'isPublic'
                        | 'createdAt'
                      > & {
                          context: Types.Maybe<
                            | ({ __typename?: 'Collection' } & Pick<
                                Types.Collection,
                                | 'id'
                                | 'canonicalUrl'
                                | 'preferredUsername'
                                | 'name'
                                | 'summary'
                                | 'icon'
                                | 'isLocal'
                                | 'isPublic'
                                | 'isDisabled'
                                | 'createdAt'
                                | 'updatedAt'
                                | 'lastActivity'
                              > & {
                                  myFollow: Types.Maybe<
                                    { __typename?: 'Follow' } & Pick<
                                      Types.Follow,
                                      'id'
                                    >
                                  >;
                                  myLike: Types.Maybe<
                                    { __typename?: 'Like' } & Pick<
                                      Types.Like,
                                      'id'
                                    >
                                  >;
                                  primaryLanguage: Types.Maybe<
                                    { __typename?: 'Language' } & Pick<
                                      Types.Language,
                                      | 'id'
                                      | 'isoCode2'
                                      | 'isoCode3'
                                      | 'englishName'
                                      | 'localName'
                                    >
                                  >;
                                  community: Types.Maybe<
                                    { __typename?: 'Community' } & Pick<
                                      Types.Community,
                                      'id'
                                    >
                                  >;
                                  resources: Types.Maybe<
                                    { __typename?: 'ResourcesEdges' } & Pick<
                                      Types.ResourcesEdges,
                                      'totalCount'
                                    >
                                  >;
                                  followers: Types.Maybe<
                                    { __typename?: 'FollowsEdges' } & Pick<
                                      Types.FollowsEdges,
                                      'totalCount'
                                    >
                                  >;
                                  likes: Types.Maybe<
                                    { __typename?: 'LikesEdges' } & Pick<
                                      Types.LikesEdges,
                                      'totalCount'
                                    >
                                  >;
                                  threads: Types.Maybe<
                                    { __typename?: 'ThreadsEdges' } & Pick<
                                      Types.ThreadsEdges,
                                      'totalCount'
                                    >
                                  >;
                                })
                            | { __typename?: 'Community' }
                            | { __typename?: 'Thread' }
                            | { __typename?: 'User' }
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
};

export const GetAgentQueryDocument = gql`
  query getAgentQuery(
    $userId: String!
    $limitComm: Int
    $endComm: String
    $limitColl: Int
    $endColl: String
    $limitTimeline: Int
    $endTimeline: String
  ) {
    user(userId: $userId) {
      id
      canonicalUrl
      preferredUsername
      name
      summary
      location
      website
      icon
      image
      isLocal
      isPublic
      isDisabled
      createdAt
      updatedAt
      lastActivity
      myFollow {
        id
      }
      myLike {
        id
      }
      primaryLanguage {
        id
        isoCode2
        isoCode3
        englishName
        localName
      }
      outbox(limit: $limitTimeline, after: $endTimeline) {
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
              ... on Comment {
                ...BasicComment
              }
              ... on Collection {
                ...BasicCollection
              }
              ... on Resource {
                ...BasicResource
              }
            }
          }
        }
      }
      followedCommunities(limit: $limitComm, after: $endComm) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            canonicalUrl
            isLocal
            isPublic
            createdAt
            context {
              __typename
              ... on Community {
                id
                canonicalUrl
                preferredUsername
                name
                summary
                icon
                image
                isLocal
                isPublic
                isDisabled
                createdAt
                updatedAt
                lastActivity
                myFollow {
                  id
                }
                primaryLanguage {
                  id
                  isoCode2
                  isoCode3
                  englishName
                  localName
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
      followedCollections(limit: $limitColl, after: $endColl) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            id
            canonicalUrl
            isLocal
            isPublic
            createdAt
            context {
              __typename
              ... on Collection {
                id
                canonicalUrl
                preferredUsername
                name
                summary
                icon
                isLocal
                isPublic
                isDisabled
                createdAt
                updatedAt
                lastActivity
                myFollow {
                  id
                }
                myLike {
                  id
                }
                primaryLanguage {
                  id
                  isoCode2
                  isoCode3
                  englishName
                  localName
                }
                community {
                  id
                }
                resources {
                  totalCount
                }
                followers {
                  totalCount
                }
                likes {
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
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export type GetAgentQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetAgentQueryQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetAgentQueryComponent = (props: GetAgentQueryComponentProps) => (
  <ApolloReactComponents.Query<GetAgentQueryQuery, GetAgentQueryQueryVariables>
    query={GetAgentQueryDocument}
    {...props}
  />
);

export type GetAgentQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetAgentQueryQuery,
  GetAgentQueryQueryVariables
> &
  TChildProps;
export function withGetAgentQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables,
    GetAgentQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables,
    GetAgentQueryProps<TChildProps>
  >(GetAgentQueryDocument, {
    alias: 'getAgentQuery',
    ...operationOptions
  });
}

/**
 * __useGetAgentQueryQuery__
 *
 * To run a query within a React component, call `useGetAgentQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgentQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgentQueryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetAgentQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >(GetAgentQueryDocument, baseOptions);
}
export function useGetAgentQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetAgentQueryQuery,
    GetAgentQueryQueryVariables
  >(GetAgentQueryDocument, baseOptions);
}
export type GetAgentQueryQueryHookResult = ReturnType<
  typeof useGetAgentQueryQuery
>;
export type GetAgentQueryLazyQueryHookResult = ReturnType<
  typeof useGetAgentQueryLazyQuery
>;
export type GetAgentQueryQueryResult = ApolloReactCommon.QueryResult<
  GetAgentQueryQuery,
  GetAgentQueryQueryVariables
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
      }
    ]
  }
};

export default result;
