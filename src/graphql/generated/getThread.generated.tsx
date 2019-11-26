import * as Types from '../types.generated.d';

import { BasicCommentWithInReplyToFragment } from '../fragments/generated/basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentWithInReplyToFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type GetThreadQueryVariables = {
  threadId: Types.Scalars['String']
};


export type GetThreadQuery = { __typename?: 'RootQueryType', thread: Types.Maybe<{ __typename?: 'Thread', id: string, canonicalUrl: Types.Maybe<string>, isLocal: boolean, isPublic: boolean, isHidden: boolean, createdAt: string, updatedAt: string, lastActivity: string, context: { __typename?: 'Collection', id: string, icon: Types.Maybe<string>, name: string } | { __typename?: 'Community', id: string, icon: Types.Maybe<string>, name: string } | { __typename?: 'Flag' } | { __typename?: 'Resource', id: string, icon: Types.Maybe<string>, name: string }, myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, comments: { __typename?: 'CommentsEdges', totalCount: number, edges: Array<Types.Maybe<{ __typename?: 'CommentsEdge', node: (
          { __typename?: 'Comment' }
          & BasicCommentWithInReplyToFragment
        ) }>> } }> };


export const GetThreadDocument = gql`
    query getThread($threadId: String!) {
  thread(threadId: $threadId) {
    id
    canonicalUrl
    isLocal
    isPublic
    isHidden
    createdAt
    updatedAt
    lastActivity
    context {
      __typename
      ... on Community {
        id
        icon
        name
      }
      ... on Collection {
        id
        icon
        name
      }
      ... on Resource {
        id
        icon
        name
      }
    }
    myFollow {
      id
    }
    comments {
      totalCount
      edges {
        node {
          ...BasicCommentWithInReplyTo
        }
      }
    }
  }
}
    ${BasicCommentWithInReplyToFragmentDoc}`;
export type GetThreadComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThreadQuery, GetThreadQueryVariables>, 'query'> & ({ variables: GetThreadQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThreadComponent = (props: GetThreadComponentProps) => (
      <ApolloReactComponents.Query<GetThreadQuery, GetThreadQueryVariables> query={GetThreadDocument} {...props} />
    );
    
export type GetThreadProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThreadQuery, GetThreadQueryVariables> & TChildProps;
export function withGetThread<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThreadQuery,
  GetThreadQueryVariables,
  GetThreadProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThreadQuery, GetThreadQueryVariables, GetThreadProps<TChildProps>>(GetThreadDocument, {
      alias: 'getThread',
      ...operationOptions
    });
};

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
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useGetThreadQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThreadQuery, GetThreadQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThreadQuery, GetThreadQueryVariables>(GetThreadDocument, baseOptions);
      }
export function useGetThreadLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThreadQuery, GetThreadQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThreadQuery, GetThreadQueryVariables>(GetThreadDocument, baseOptions);
        }
export type GetThreadQueryHookResult = ReturnType<typeof useGetThreadQuery>;
export type GetThreadLazyQueryHookResult = ReturnType<typeof useGetThreadLazyQuery>;
export type GetThreadQueryResult = ApolloReactCommon.QueryResult<GetThreadQuery, GetThreadQueryVariables>;