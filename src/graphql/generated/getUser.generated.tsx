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

export type GetUserQueryVariables = {
  limitComm?: Types.Maybe<Types.Scalars['Int']>;
  endComm?: Types.Maybe<Types.Scalars['String']>;
  limitColl?: Types.Maybe<Types.Scalars['Int']>;
  endColl?: Types.Maybe<Types.Scalars['String']>;
  limitTimeline?: Types.Maybe<Types.Scalars['Int']>;
  endTimeline?: Types.Maybe<Types.Scalars['String']>;
};

export type GetUserQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<
          Types.User,
          | 'id'
          | 'canonicalUrl'
          | 'name'
          | 'preferredUsername'
          | 'location'
          | 'summary'
          | 'icon'
          | 'image'
        > & {
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
                            'id' | 'canonicalUrl'
                          > & {
                              context: Types.Maybe<
                                | { __typename?: 'Collection' }
                                | ({ __typename?: 'Community' } & Pick<
                                    Types.Community,
                                    | 'preferredUsername'
                                    | 'name'
                                    | 'summary'
                                    | 'icon'
                                    | 'isLocal'
                                    | 'isPublic'
                                    | 'isDisabled'
                                  > & {
                                      myFollow: Types.Maybe<
                                        { __typename?: 'Follow' } & Pick<
                                          Types.Follow,
                                          'id'
                                        >
                                      >;
                                      collections: Types.Maybe<
                                        {
                                          __typename?: 'CollectionsEdges';
                                        } & Pick<
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
                            'id' | 'canonicalUrl'
                          > & {
                              context: Types.Maybe<
                                | ({ __typename?: 'Collection' } & Pick<
                                    Types.Collection,
                                    | 'preferredUsername'
                                    | 'name'
                                    | 'summary'
                                    | 'icon'
                                    | 'isLocal'
                                    | 'isPublic'
                                    | 'isDisabled'
                                  > & {
                                      community: Types.Maybe<
                                        { __typename?: 'Community' } & Pick<
                                          Types.Community,
                                          'id'
                                        >
                                      >;
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
                                      likes: Types.Maybe<
                                        { __typename?: 'LikesEdges' } & Pick<
                                          Types.LikesEdges,
                                          'totalCount'
                                        >
                                      >;
                                      followers: Types.Maybe<
                                        { __typename?: 'FollowsEdges' } & Pick<
                                          Types.FollowsEdges,
                                          'totalCount'
                                        >
                                      >;
                                      resources: Types.Maybe<
                                        {
                                          __typename?: 'ResourcesEdges';
                                        } & Pick<
                                          Types.ResourcesEdges,
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
    }
  >;
};

export const GetUserDocument = gql`
  query getUser(
    $limitComm: Int
    $endComm: String
    $limitColl: Int
    $endColl: String
    $limitTimeline: Int
    $endTimeline: String
  ) {
    me {
      user {
        id
        canonicalUrl
        name
        preferredUsername
        location
        summary
        icon
        image
        followedCommunities(limit: $limitComm, after: $endComm) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              canonicalUrl
              context {
                __typename
                ... on Community {
                  preferredUsername
                  name
                  summary
                  icon
                  isLocal
                  isPublic
                  isDisabled
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
        followedCollections(limit: $limitColl, after: $endColl) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              canonicalUrl
              context {
                __typename
                ... on Collection {
                  preferredUsername
                  name
                  summary
                  icon
                  isLocal
                  isPublic
                  isDisabled
                  community {
                    id
                  }
                  myFollow {
                    id
                  }
                  myLike {
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
export type GetUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
  'query'
>;

export const GetUserComponent = (props: GetUserComponentProps) => (
  <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables>
    query={GetUserDocument}
    {...props}
  />
);

export type GetUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetUserQuery,
  GetUserQueryVariables
> &
  TChildProps;
export function withGetUser<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUserQuery,
    GetUserQueryVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, {
    alias: 'getUser',
    ...operationOptions
  });
}

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export function useGetUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
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
