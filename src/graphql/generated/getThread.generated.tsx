import * as Types from '../types.d';

import { BasicCommentFragment } from '../fragments/generated/basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetThreadQueryVariables = {
  id: Types.Scalars['Int'];
};

export type GetThreadQuery = { __typename?: 'RootQueryType' } & {
  comment: Types.Maybe<
    { __typename?: 'Comment' } & {
      replies: Types.Maybe<
        { __typename?: 'CommentRepliesConnection' } & Pick<
          Types.CommentRepliesConnection,
          'totalCount'
        > & {
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'CommentRepliesEdge' } & {
                    node: Types.Maybe<
                      { __typename?: 'Comment' } & Pick<
                        Types.Comment,
                        'id' | 'localId' | 'content' | 'published'
                      > & {
                          inReplyTo: Types.Maybe<
                            { __typename?: 'Comment' } & Pick<
                              Types.Comment,
                              'localId'
                            > & {
                                author: Types.Maybe<
                                  { __typename?: 'User' } & Pick<
                                    Types.User,
                                    | 'id'
                                    | 'icon'
                                    | 'name'
                                    | 'localId'
                                    | 'preferredUsername'
                                  >
                                >;
                              }
                          >;
                          replies: Types.Maybe<
                            { __typename?: 'CommentRepliesConnection' } & Pick<
                              Types.CommentRepliesConnection,
                              'totalCount'
                            > & {
                                edges: Types.Maybe<
                                  Array<
                                    Types.Maybe<
                                      { __typename?: 'CommentRepliesEdge' } & {
                                        node: Types.Maybe<
                                          { __typename?: 'Comment' } & Pick<
                                            Types.Comment,
                                            'id'
                                          >
                                        >;
                                      }
                                    >
                                  >
                                >;
                              }
                          >;
                          likers: Types.Maybe<
                            { __typename?: 'CommentLikersConnection' } & Pick<
                              Types.CommentLikersConnection,
                              'totalCount'
                            >
                          >;
                          author: Types.Maybe<
                            { __typename?: 'User' } & Pick<
                              Types.User,
                              'id' | 'icon' | 'name' | 'localId'
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
    } & BasicCommentFragment
  >;
};

export const GetThreadDocument = gql`
  query getThread($id: Int!) {
    comment(localId: $id) {
      ...BasicComment
      replies {
        totalCount
        edges {
          node {
            id
            localId
            content
            published
            inReplyTo {
              localId
              author {
                id
                icon
                name
                localId
                preferredUsername
              }
            }
            replies {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
            likers {
              totalCount
            }
            author {
              id
              icon
              name
              localId
            }
          }
        }
      }
    }
  }
  ${BasicCommentFragmentDoc}
`;
export type GetThreadComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >,
  'query'
> &
  ({ variables: GetThreadQueryVariables; skip?: boolean } | { skip: boolean });

export const GetThreadComponent = (props: GetThreadComponentProps) => (
  <ApolloReactComponents.Query<GetThreadQuery, GetThreadQueryVariables>
    query={GetThreadDocument}
    {...props}
  />
);

export type GetThreadProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetThreadQuery,
  GetThreadQueryVariables
> &
  TChildProps;
export function withGetThread<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >(GetThreadDocument, {
    alias: 'getThread',
    ...operationOptions
  });
}

/**
 * __useGetThreadQuery__
 *
 * To run a query within a React component, call `useGetThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetThreadQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export function useGetThreadLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export type GetThreadQueryHookResult = ReturnType<typeof useGetThreadQuery>;
export type GetThreadLazyQueryHookResult = ReturnType<
  typeof useGetThreadLazyQuery
>;
export type GetThreadQueryResult = ApolloReactCommon.QueryResult<
  GetThreadQuery,
  GetThreadQueryVariables
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
