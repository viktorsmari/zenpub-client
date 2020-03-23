import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewFragment } from '../../../../HOC/modules/previews/comment/CommentPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { CommentPreviewFragmentDoc } from '../../../../HOC/modules/previews/comment/CommentPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type ThreadPageQueryVariables = {
  threadId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type ThreadPageQuery = (
  { __typename: 'RootQueryType' }
  & { thread: Types.Maybe<(
    { __typename: 'Thread' }
    & { comments: Types.Maybe<(
      { __typename: 'CommentsPage' }
      & Pick<Types.CommentsPage, 'totalCount'>
      & { pageInfo: Types.Maybe<(
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      )>, edges: Array<Types.Maybe<(
        { __typename: 'Comment' }
        & CommentPreviewFragment
      )>> }
    )> }
  )> }
);


export const ThreadPageDocument = gql`
    query threadPage($threadId: String!, $limit: Int, $before: [Cursor], $after: [Cursor]) {
  thread(threadId: $threadId) {
    comments(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CommentPreview
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommentPreviewFragmentDoc}`;
export type ThreadPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ThreadPageQuery, ThreadPageQueryVariables>, 'query'> & ({ variables: ThreadPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ThreadPageComponent = (props: ThreadPageComponentProps) => (
      <ApolloReactComponents.Query<ThreadPageQuery, ThreadPageQueryVariables> query={ThreadPageDocument} {...props} />
    );
    
export type ThreadPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<ThreadPageQuery, ThreadPageQueryVariables> & TChildProps;
export function withThreadPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ThreadPageQuery,
  ThreadPageQueryVariables,
  ThreadPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ThreadPageQuery, ThreadPageQueryVariables, ThreadPageProps<TChildProps>>(ThreadPageDocument, {
      alias: 'threadPage',
      ...operationOptions
    });
};

/**
 * __useThreadPageQuery__
 *
 * To run a query within a React component, call `useThreadPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadPageQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useThreadPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadPageQuery, ThreadPageQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadPageQuery, ThreadPageQueryVariables>(ThreadPageDocument, baseOptions);
      }
export function useThreadPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadPageQuery, ThreadPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadPageQuery, ThreadPageQueryVariables>(ThreadPageDocument, baseOptions);
        }
export type ThreadPageQueryHookResult = ReturnType<typeof useThreadPageQuery>;
export type ThreadPageLazyQueryHookResult = ReturnType<typeof useThreadPageLazyQuery>;
export type ThreadPageQueryResult = ApolloReactCommon.QueryResult<ThreadPageQuery, ThreadPageQueryVariables>;


export interface ThreadPageQueryOperation {
  operationName: 'threadPage'
  result: ThreadPageQuery
  variables: ThreadPageQueryVariables
  type: 'query'
}
