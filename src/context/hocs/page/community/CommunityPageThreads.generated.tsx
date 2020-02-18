import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';
import * as Types from '../../../../graphql/types.generated';
import { ActivityPreviewCommentCtxBaseFragment, ActivityPreviewCommentCtxBaseFragmentDoc, ActivityPreviewLikeMutationResultFragment, ActivityPreviewLikeMutationResultFragmentDoc } from '../../../../HOC/modules/ActivityPreview/getActivityPreview.generated';
import { ComunityPageThreadFragment, ComunityPageThreadFragmentDoc } from '../../../../HOC/pages/community/CommunityPageThreads.generated';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CommunityPageThreadsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CommunityPageThreadsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { threads: Types.Maybe<(
      { __typename: 'ThreadsEdges' }
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'ThreadsEdge' }
        & { node: (
          { __typename: 'Thread' }
          & ComunityPageThreadFragment
        ) }
      )>>> }
    )> }
  )> }
);

export type CommunityPageThreadLikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type CommunityPageThreadLikeMutation = (
  { __typename: 'RootMutationType' }
  & { createLike: Types.Maybe<(
    { __typename: 'Like' }
    & ActivityPreviewLikeMutationResultFragment
  )> }
);

export type CommunityPageThreadUnlikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type CommunityPageThreadUnlikeMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export type CommunityPageThreadCreateReplyMutationVariables = {
  comment: Types.CommentInput,
  inReplyToId: Types.Scalars['String'],
  threadId: Types.Scalars['String']
};


export type CommunityPageThreadCreateReplyMutation = (
  { __typename: 'RootMutationType' }
  & { createReply: Types.Maybe<(
    { __typename: 'Comment' }
    & ActivityPreviewCommentCtxBaseFragment
  )> }
);


export const CommunityPageThreadsDocument = gql`
    query communityPageThreads($communityId: String!, $limit: Int, $before: String, $after: String) {
  community(communityId: $communityId) {
    id
    threads(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...ComunityPageThread
        }
      }
    }
  }
}
    ${ComunityPageThreadFragmentDoc}`;
export type CommunityPageThreadsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>, 'query'> & ({ variables: CommunityPageThreadsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPageThreadsComponent = (props: CommunityPageThreadsComponentProps) => (
      <ApolloReactComponents.Query<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables> query={CommunityPageThreadsDocument} {...props} />
    );
    
export type CommunityPageThreadsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables> & TChildProps;
export function withCommunityPageThreads<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageThreadsQuery,
  CommunityPageThreadsQueryVariables,
  CommunityPageThreadsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables, CommunityPageThreadsProps<TChildProps>>(CommunityPageThreadsDocument, {
      alias: 'communityPageThreads',
      ...operationOptions
    });
};

/**
 * __useCommunityPageThreadsQuery__
 *
 * To run a query within a React component, call `useCommunityPageThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPageThreadsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityPageThreadsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>(CommunityPageThreadsDocument, baseOptions);
      }
export function useCommunityPageThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>(CommunityPageThreadsDocument, baseOptions);
        }
export type CommunityPageThreadsQueryHookResult = ReturnType<typeof useCommunityPageThreadsQuery>;
export type CommunityPageThreadsLazyQueryHookResult = ReturnType<typeof useCommunityPageThreadsLazyQuery>;
export type CommunityPageThreadsQueryResult = ApolloReactCommon.QueryResult<CommunityPageThreadsQuery, CommunityPageThreadsQueryVariables>;
export const CommunityPageThreadLikeDocument = gql`
    mutation communityPageThreadLike($contextId: String!) {
  createLike(contextId: $contextId) {
    ...ActivityPreviewLikeMutationResult
  }
}
    ${ActivityPreviewLikeMutationResultFragmentDoc}`;
export type CommunityPageThreadLikeMutationFn = ApolloReactCommon.MutationFunction<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables>;
export type CommunityPageThreadLikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables>, 'mutation'>;

    export const CommunityPageThreadLikeComponent = (props: CommunityPageThreadLikeComponentProps) => (
      <ApolloReactComponents.Mutation<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables> mutation={CommunityPageThreadLikeDocument} {...props} />
    );
    
export type CommunityPageThreadLikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables> & TChildProps;
export function withCommunityPageThreadLike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageThreadLikeMutation,
  CommunityPageThreadLikeMutationVariables,
  CommunityPageThreadLikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables, CommunityPageThreadLikeProps<TChildProps>>(CommunityPageThreadLikeDocument, {
      alias: 'communityPageThreadLike',
      ...operationOptions
    });
};

/**
 * __useCommunityPageThreadLikeMutation__
 *
 * To run a mutation, you first call `useCommunityPageThreadLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageThreadLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communityPageThreadLikeMutation, { data, loading, error }] = useCommunityPageThreadLikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useCommunityPageThreadLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables>(CommunityPageThreadLikeDocument, baseOptions);
      }
export type CommunityPageThreadLikeMutationHookResult = ReturnType<typeof useCommunityPageThreadLikeMutation>;
export type CommunityPageThreadLikeMutationResult = ApolloReactCommon.MutationResult<CommunityPageThreadLikeMutation>;
export type CommunityPageThreadLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunityPageThreadLikeMutation, CommunityPageThreadLikeMutationVariables>;
export const CommunityPageThreadUnlikeDocument = gql`
    mutation communityPageThreadUnlike($contextId: String!) {
  delete(contextId: $contextId) {
    __typename
  }
}
    `;
export type CommunityPageThreadUnlikeMutationFn = ApolloReactCommon.MutationFunction<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables>;
export type CommunityPageThreadUnlikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables>, 'mutation'>;

    export const CommunityPageThreadUnlikeComponent = (props: CommunityPageThreadUnlikeComponentProps) => (
      <ApolloReactComponents.Mutation<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables> mutation={CommunityPageThreadUnlikeDocument} {...props} />
    );
    
export type CommunityPageThreadUnlikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables> & TChildProps;
export function withCommunityPageThreadUnlike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageThreadUnlikeMutation,
  CommunityPageThreadUnlikeMutationVariables,
  CommunityPageThreadUnlikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables, CommunityPageThreadUnlikeProps<TChildProps>>(CommunityPageThreadUnlikeDocument, {
      alias: 'communityPageThreadUnlike',
      ...operationOptions
    });
};

/**
 * __useCommunityPageThreadUnlikeMutation__
 *
 * To run a mutation, you first call `useCommunityPageThreadUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageThreadUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communityPageThreadUnlikeMutation, { data, loading, error }] = useCommunityPageThreadUnlikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useCommunityPageThreadUnlikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables>(CommunityPageThreadUnlikeDocument, baseOptions);
      }
export type CommunityPageThreadUnlikeMutationHookResult = ReturnType<typeof useCommunityPageThreadUnlikeMutation>;
export type CommunityPageThreadUnlikeMutationResult = ApolloReactCommon.MutationResult<CommunityPageThreadUnlikeMutation>;
export type CommunityPageThreadUnlikeMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunityPageThreadUnlikeMutation, CommunityPageThreadUnlikeMutationVariables>;
export const CommunityPageThreadCreateReplyDocument = gql`
    mutation communityPageThreadCreateReply($comment: CommentInput!, $inReplyToId: String!, $threadId: String!) {
  createReply(comment: $comment, inReplyToId: $inReplyToId, threadId: $threadId) {
    ...ActivityPreviewCommentCtxBase
  }
}
    ${ActivityPreviewCommentCtxBaseFragmentDoc}`;
export type CommunityPageThreadCreateReplyMutationFn = ApolloReactCommon.MutationFunction<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables>;
export type CommunityPageThreadCreateReplyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables>, 'mutation'>;

    export const CommunityPageThreadCreateReplyComponent = (props: CommunityPageThreadCreateReplyComponentProps) => (
      <ApolloReactComponents.Mutation<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables> mutation={CommunityPageThreadCreateReplyDocument} {...props} />
    );
    
export type CommunityPageThreadCreateReplyProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables> & TChildProps;
export function withCommunityPageThreadCreateReply<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageThreadCreateReplyMutation,
  CommunityPageThreadCreateReplyMutationVariables,
  CommunityPageThreadCreateReplyProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables, CommunityPageThreadCreateReplyProps<TChildProps>>(CommunityPageThreadCreateReplyDocument, {
      alias: 'communityPageThreadCreateReply',
      ...operationOptions
    });
};

/**
 * __useCommunityPageThreadCreateReplyMutation__
 *
 * To run a mutation, you first call `useCommunityPageThreadCreateReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageThreadCreateReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communityPageThreadCreateReplyMutation, { data, loading, error }] = useCommunityPageThreadCreateReplyMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      inReplyToId: // value for 'inReplyToId'
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useCommunityPageThreadCreateReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables>(CommunityPageThreadCreateReplyDocument, baseOptions);
      }
export type CommunityPageThreadCreateReplyMutationHookResult = ReturnType<typeof useCommunityPageThreadCreateReplyMutation>;
export type CommunityPageThreadCreateReplyMutationResult = ApolloReactCommon.MutationResult<CommunityPageThreadCreateReplyMutation>;
export type CommunityPageThreadCreateReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunityPageThreadCreateReplyMutation, CommunityPageThreadCreateReplyMutationVariables>;


export interface CommunityPageThreadsQueryOperation {
  operationName: 'communityPageThreads'
  result: CommunityPageThreadsQuery
  variables: CommunityPageThreadsQueryVariables
  type: 'query'
}


export interface CommunityPageThreadLikeMutationOperation {
  operationName: 'communityPageThreadLike'
  result: CommunityPageThreadLikeMutation
  variables: CommunityPageThreadLikeMutationVariables
  type: 'mutation'
}


export interface CommunityPageThreadUnlikeMutationOperation {
  operationName: 'communityPageThreadUnlike'
  result: CommunityPageThreadUnlikeMutation
  variables: CommunityPageThreadUnlikeMutationVariables
  type: 'mutation'
}


export interface CommunityPageThreadCreateReplyMutationOperation {
  operationName: 'communityPageThreadCreateReply'
  result: CommunityPageThreadCreateReplyMutation
  variables: CommunityPageThreadCreateReplyMutationVariables
  type: 'mutation'
}
