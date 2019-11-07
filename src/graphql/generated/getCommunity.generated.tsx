import { BasicCommentFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as Types from '../types.d';

import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import { BasicCommentFragment } from '../fragments/generated/basicComment.generated';
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

export type GetCommunityQueryQueryVariables = {
  context: Types.Scalars['Int'];
  limit?: Types.Maybe<Types.Scalars['Int']>;
  end?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetCommunityQueryQuery = { __typename?: 'RootQueryType' } & {
  community: Types.Maybe<
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
        inbox: Types.Maybe<
          { __typename?: 'CommunityInboxConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              Types.PageInfo,
              'startCursor' | 'endCursor'
            >;
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'CommunityActivitiesEdge' } & {
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
        members: Types.Maybe<
          { __typename?: 'CommunityMembersConnection' } & Pick<
            Types.CommunityMembersConnection,
            'totalCount'
          > & {
              edges: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'CommunityMembersEdge' } & {
                      node: Types.Maybe<
                        { __typename?: 'User' } & Pick<
                          Types.User,
                          'id' | 'localId' | 'name' | 'icon'
                        >
                      >;
                    }
                  >
                >
              >;
            }
        >;
        collections: Types.Maybe<
          { __typename?: 'CommunityCollectionsConnection' } & Pick<
            Types.CommunityCollectionsConnection,
            'totalCount'
          > & {
              edges: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'CommunityCollectionsEdge' } & {
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
                            inbox: Types.Maybe<
                              {
                                __typename?: 'CollectionInboxConnection';
                              } & Pick<
                                Types.CollectionInboxConnection,
                                'totalCount'
                              >
                            >;
                          }
                      >;
                    }
                  >
                >
              >;
              pageInfo: { __typename?: 'PageInfo' } & Pick<
                Types.PageInfo,
                'startCursor' | 'endCursor'
              >;
            }
        >;
      }
  >;
};

export const GetCommunityQueryDocument = gql`
  query getCommunityQuery($context: Int!, $limit: Int, $end: Int) {
    community(localId: $context) {
      id
      localId
      preferredUsername
      name
      summary
      icon
      followed
      inbox(limit: $limit, after: $end) {
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
      members {
        edges {
          node {
            id
            localId
            name
            icon
          }
        }
        totalCount
      }
      collections {
        totalCount
        edges {
          node {
            id
            localId
            preferredUsername
            name
            summary
            icon
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
            inbox {
              totalCount
            }
          }
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
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
 *      context: // value for 'context'
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
