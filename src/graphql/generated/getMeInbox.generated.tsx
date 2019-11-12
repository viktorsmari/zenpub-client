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

export type GetMeInboxQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>;
  end?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetMeInboxQuery = { __typename?: 'RootQueryType' } & {
  me: Types.Maybe<
    { __typename?: 'Me' } & {
      user: Types.Maybe<
        { __typename?: 'User' } & Pick<Types.User, 'id'> & {
            inbox: Types.Maybe<
              { __typename?: 'UserInboxConnection' } & {
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
          }
      >;
    }
  >;
};

export const GetMeInboxDocument = gql`
  query getMeInbox($limit: Int, $end: Int) {
    me {
      user {
        id
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
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCommentFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export type GetMeInboxComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >,
  'query'
>;

export const GetMeInboxComponent = (props: GetMeInboxComponentProps) => (
  <ApolloReactComponents.Query<GetMeInboxQuery, GetMeInboxQueryVariables>
    query={GetMeInboxDocument}
    {...props}
  />
);

export type GetMeInboxProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetMeInboxQuery,
  GetMeInboxQueryVariables
> &
  TChildProps;
export function withGetMeInbox<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetMeInboxQuery,
    GetMeInboxQueryVariables,
    GetMeInboxProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetMeInboxQuery,
    GetMeInboxQueryVariables,
    GetMeInboxProps<TChildProps>
  >(GetMeInboxDocument, {
    alias: 'getMeInbox',
    ...operationOptions
  });
}

/**
 * __useGetMeInboxQuery__
 *
 * To run a query within a React component, call `useGetMeInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeInboxQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetMeInboxQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetMeInboxQuery, GetMeInboxQueryVariables>(
    GetMeInboxDocument,
    baseOptions
  );
}
export function useGetMeInboxLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetMeInboxQuery,
    GetMeInboxQueryVariables
  >(GetMeInboxDocument, baseOptions);
}
export type GetMeInboxQueryHookResult = ReturnType<typeof useGetMeInboxQuery>;
export type GetMeInboxLazyQueryHookResult = ReturnType<
  typeof useGetMeInboxLazyQuery
>;
export type GetMeInboxQueryResult = ApolloReactCommon.QueryResult<
  GetMeInboxQuery,
  GetMeInboxQueryVariables
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