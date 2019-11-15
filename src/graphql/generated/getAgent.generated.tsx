import { BasicCommentWithInReplyToFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as Types from '../types.d';

import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import { BasicCommentWithInReplyToFragment } from '../fragments/generated/basicComment.generated';
import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import { BasicUserFragment } from '../fragments/generated/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from '../fragments/generated/basicUser.generated';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import { BasicResourceFragment } from '../fragments/generated/basicResource.generated';
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
  user: { __typename?: 'User' } & Pick<
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
      outbox: { __typename?: 'ActivitiesEdges' } & {
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
                    | ({ __typename?: 'Collection' } & BasicCollectionFragment)
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
                  'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'createdAt'
                >;
                community: { __typename: 'Community' } & Pick<
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
                      { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
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
                  'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'createdAt'
                >;
                collection: { __typename: 'Collection' } & Pick<
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
                      { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
                    >;
                    myLike: Types.Maybe<
                      { __typename?: 'Like' } & Pick<Types.Like, 'id'>
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
                    community: { __typename?: 'Community' } & Pick<
                      Types.Community,
                      'id'
                    >;
                    resources: { __typename?: 'ResourcesEdges' } & Pick<
                      Types.ResourcesEdges,
                      'totalCount'
                    >;
                    followers: { __typename?: 'FollowsEdges' } & Pick<
                      Types.FollowsEdges,
                      'totalCount'
                    >;
                    likes: { __typename?: 'LikesEdges' } & Pick<
                      Types.LikesEdges,
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
                ...BasicCommentWithInReplyTo
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
            follow {
              id
              canonicalUrl
              isLocal
              isPublic
              createdAt
            }
            community {
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
            follow {
              id
              canonicalUrl
              isLocal
              isPublic
              createdAt
            }
            collection {
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
  ${BasicCommentWithInReplyToFragmentDoc}
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
