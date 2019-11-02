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
  endComm?: Types.Maybe<Types.Scalars['Int']>;
  limitColl?: Types.Maybe<Types.Scalars['Int']>;
  endColl?: Types.Maybe<Types.Scalars['Int']>;
  limitTimeline?: Types.Maybe<Types.Scalars['Int']>;
  endTimeline?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetUserQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<
          Types.User,
          | 'id'
          | 'name'
          | 'preferredUsername'
          | 'location'
          | 'summary'
          | 'icon'
          | 'image'
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
            outbox: Types.Maybe<
              { __typename?: 'UserOutboxConnection' } & {
                pageInfo: { __typename?: 'PageInfo' } & Pick<
                  Types.PageInfo,
                  'startCursor' | 'endCursor'
                >;
                edges: Types.Maybe<
                  Array<
                    Types.Maybe<
                      { __typename?: 'UserActivitiesEdge' } & {
                        node: Types.Maybe<
                          { __typename?: 'Activity' } & Pick<
                            Types.Activity,
                            'id' | 'activityType' | 'type' | 'published'
                          > & {
                              user: Types.Maybe<
                                { __typename?: 'User' } & BasicUserFragment
                              >;
                              object: Types.Maybe<
                                | ({
                                    __typename?: 'Community';
                                  } & BasicCommunityFragment)
                                | ({
                                    __typename?: 'Collection';
                                  } & BasicCollectionFragment)
                                | ({
                                    __typename?: 'Resource';
                                  } & BasicResourceFragment)
                                | ({
                                    __typename?: 'Comment';
                                  } & BasicCommentFragment)
                              >;
                            }
                        >;
                      }
                    >
                  >
                >;
              }
            >;
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

export const GetUserDocument = gql`
  query getUser(
    $limitComm: Int
    $endComm: Int
    $limitColl: Int
    $endColl: Int
    $limitTimeline: Int
    $endTimeline: Int
  ) {
    me {
      user {
        id
        name
        preferredUsername
        location
        summary
        icon
        image
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
        outbox(limit: $limitTimeline, after: $endTimeline) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              id
              activityType
              type
              published
              user {
                ...BasicUser
              }
              object {
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
        followingCollections(limit: $limitColl, after: $endColl) {
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
