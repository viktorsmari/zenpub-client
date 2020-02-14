import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewLikeMutationResultFragment, ActivityPreviewCommentCtxBaseFragment, ActivityPreviewCommentCtxBaseFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewResourceCtxFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewResourceCtxFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewLikeMutationResultFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CollectionPageResourceActivityQueryVariables = {
  resourceId: Types.Scalars['String']
};


export type CollectionPageResourceActivityQuery = (
  { __typename: 'RootQueryType' }
  & { resource: Types.Maybe<(
    { __typename: 'Resource' }
    & CollectionPageResourceFragment
  )> }
);

export type CollectionPageResourceFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'createdAt'>
  & ActivityPreviewResourceCtxFragment
);

export type CollectionPageResourceLikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type CollectionPageResourceLikeMutation = (
  { __typename: 'RootMutationType' }
  & { createLike: Types.Maybe<(
    { __typename: 'Like' }
    & ActivityPreviewLikeMutationResultFragment
  )> }
);

export type CollectionPageResourceUnlikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type CollectionPageResourceUnlikeMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export type CollectionPageResourceCreateThreadMutationVariables = {
  contextId: Types.Scalars['String'],
  comment: Types.CommentInput
};


export type CollectionPageResourceCreateThreadMutation = (
  { __typename: 'RootMutationType' }
  & { createThread: Types.Maybe<(
    { __typename: 'Comment' }
    & ActivityPreviewCommentCtxBaseFragment
  )> }
);

export const CollectionPageResourceFragmentDoc = gql`
    fragment CollectionPageResource on Resource {
  ...ActivityPreviewResourceCtx
  createdAt
}
    ${ActivityPreviewResourceCtxFragmentDoc}`;
export const CollectionPageResourceActivityDocument = gql`
    query collectionPageResourceActivity($resourceId: String!) {
  resource(resourceId: $resourceId) {
    ...CollectionPageResource
  }
}
    ${CollectionPageResourceFragmentDoc}`;
export type CollectionPageResourceActivityComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>, 'query'> & ({ variables: CollectionPageResourceActivityQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionPageResourceActivityComponent = (props: CollectionPageResourceActivityComponentProps) => (
      <ApolloReactComponents.Query<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables> query={CollectionPageResourceActivityDocument} {...props} />
    );
    
export type CollectionPageResourceActivityProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables> & TChildProps;
export function withCollectionPageResourceActivity<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageResourceActivityQuery,
  CollectionPageResourceActivityQueryVariables,
  CollectionPageResourceActivityProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables, CollectionPageResourceActivityProps<TChildProps>>(CollectionPageResourceActivityDocument, {
      alias: 'collectionPageResourceActivity',
      ...operationOptions
    });
};

/**
 * __useCollectionPageResourceActivityQuery__
 *
 * To run a query within a React component, call `useCollectionPageResourceActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageResourceActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPageResourceActivityQuery({
 *   variables: {
 *      resourceId: // value for 'resourceId'
 *   },
 * });
 */
export function useCollectionPageResourceActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>(CollectionPageResourceActivityDocument, baseOptions);
      }
export function useCollectionPageResourceActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>(CollectionPageResourceActivityDocument, baseOptions);
        }
export type CollectionPageResourceActivityQueryHookResult = ReturnType<typeof useCollectionPageResourceActivityQuery>;
export type CollectionPageResourceActivityLazyQueryHookResult = ReturnType<typeof useCollectionPageResourceActivityLazyQuery>;
export type CollectionPageResourceActivityQueryResult = ApolloReactCommon.QueryResult<CollectionPageResourceActivityQuery, CollectionPageResourceActivityQueryVariables>;
export const CollectionPageResourceLikeDocument = gql`
    mutation collectionPageResourceLike($contextId: String!) {
  createLike(contextId: $contextId) {
    ...ActivityPreviewLikeMutationResult
  }
}
    ${ActivityPreviewLikeMutationResultFragmentDoc}`;
export type CollectionPageResourceLikeMutationFn = ApolloReactCommon.MutationFunction<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables>;
export type CollectionPageResourceLikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables>, 'mutation'>;

    export const CollectionPageResourceLikeComponent = (props: CollectionPageResourceLikeComponentProps) => (
      <ApolloReactComponents.Mutation<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables> mutation={CollectionPageResourceLikeDocument} {...props} />
    );
    
export type CollectionPageResourceLikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables> & TChildProps;
export function withCollectionPageResourceLike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageResourceLikeMutation,
  CollectionPageResourceLikeMutationVariables,
  CollectionPageResourceLikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables, CollectionPageResourceLikeProps<TChildProps>>(CollectionPageResourceLikeDocument, {
      alias: 'collectionPageResourceLike',
      ...operationOptions
    });
};

/**
 * __useCollectionPageResourceLikeMutation__
 *
 * To run a mutation, you first call `useCollectionPageResourceLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageResourceLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectionPageResourceLikeMutation, { data, loading, error }] = useCollectionPageResourceLikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useCollectionPageResourceLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables>) {
        return ApolloReactHooks.useMutation<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables>(CollectionPageResourceLikeDocument, baseOptions);
      }
export type CollectionPageResourceLikeMutationHookResult = ReturnType<typeof useCollectionPageResourceLikeMutation>;
export type CollectionPageResourceLikeMutationResult = ApolloReactCommon.MutationResult<CollectionPageResourceLikeMutation>;
export type CollectionPageResourceLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<CollectionPageResourceLikeMutation, CollectionPageResourceLikeMutationVariables>;
export const CollectionPageResourceUnlikeDocument = gql`
    mutation collectionPageResourceUnlike($contextId: String!) {
  delete(contextId: $contextId) {
    __typename
  }
}
    `;
export type CollectionPageResourceUnlikeMutationFn = ApolloReactCommon.MutationFunction<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables>;
export type CollectionPageResourceUnlikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables>, 'mutation'>;

    export const CollectionPageResourceUnlikeComponent = (props: CollectionPageResourceUnlikeComponentProps) => (
      <ApolloReactComponents.Mutation<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables> mutation={CollectionPageResourceUnlikeDocument} {...props} />
    );
    
export type CollectionPageResourceUnlikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables> & TChildProps;
export function withCollectionPageResourceUnlike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageResourceUnlikeMutation,
  CollectionPageResourceUnlikeMutationVariables,
  CollectionPageResourceUnlikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables, CollectionPageResourceUnlikeProps<TChildProps>>(CollectionPageResourceUnlikeDocument, {
      alias: 'collectionPageResourceUnlike',
      ...operationOptions
    });
};

/**
 * __useCollectionPageResourceUnlikeMutation__
 *
 * To run a mutation, you first call `useCollectionPageResourceUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageResourceUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectionPageResourceUnlikeMutation, { data, loading, error }] = useCollectionPageResourceUnlikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useCollectionPageResourceUnlikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables>) {
        return ApolloReactHooks.useMutation<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables>(CollectionPageResourceUnlikeDocument, baseOptions);
      }
export type CollectionPageResourceUnlikeMutationHookResult = ReturnType<typeof useCollectionPageResourceUnlikeMutation>;
export type CollectionPageResourceUnlikeMutationResult = ApolloReactCommon.MutationResult<CollectionPageResourceUnlikeMutation>;
export type CollectionPageResourceUnlikeMutationOptions = ApolloReactCommon.BaseMutationOptions<CollectionPageResourceUnlikeMutation, CollectionPageResourceUnlikeMutationVariables>;
export const CollectionPageResourceCreateThreadDocument = gql`
    mutation collectionPageResourceCreateThread($contextId: String!, $comment: CommentInput!) {
  createThread(comment: $comment, contextId: $contextId) {
    ...ActivityPreviewCommentCtxBase
  }
}
    ${ActivityPreviewCommentCtxBaseFragmentDoc}`;
export type CollectionPageResourceCreateThreadMutationFn = ApolloReactCommon.MutationFunction<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables>;
export type CollectionPageResourceCreateThreadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables>, 'mutation'>;

    export const CollectionPageResourceCreateThreadComponent = (props: CollectionPageResourceCreateThreadComponentProps) => (
      <ApolloReactComponents.Mutation<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables> mutation={CollectionPageResourceCreateThreadDocument} {...props} />
    );
    
export type CollectionPageResourceCreateThreadProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables> & TChildProps;
export function withCollectionPageResourceCreateThread<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageResourceCreateThreadMutation,
  CollectionPageResourceCreateThreadMutationVariables,
  CollectionPageResourceCreateThreadProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables, CollectionPageResourceCreateThreadProps<TChildProps>>(CollectionPageResourceCreateThreadDocument, {
      alias: 'collectionPageResourceCreateThread',
      ...operationOptions
    });
};

/**
 * __useCollectionPageResourceCreateThreadMutation__
 *
 * To run a mutation, you first call `useCollectionPageResourceCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageResourceCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectionPageResourceCreateThreadMutation, { data, loading, error }] = useCollectionPageResourceCreateThreadMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCollectionPageResourceCreateThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables>(CollectionPageResourceCreateThreadDocument, baseOptions);
      }
export type CollectionPageResourceCreateThreadMutationHookResult = ReturnType<typeof useCollectionPageResourceCreateThreadMutation>;
export type CollectionPageResourceCreateThreadMutationResult = ApolloReactCommon.MutationResult<CollectionPageResourceCreateThreadMutation>;
export type CollectionPageResourceCreateThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<CollectionPageResourceCreateThreadMutation, CollectionPageResourceCreateThreadMutationVariables>;


export interface CollectionPageResourceActivityQueryOperation {
  operationName: 'collectionPageResourceActivity'
  result: CollectionPageResourceActivityQuery
  variables: CollectionPageResourceActivityQueryVariables
  type: 'query'
}


export interface CollectionPageResourceLikeMutationOperation {
  operationName: 'collectionPageResourceLike'
  result: CollectionPageResourceLikeMutation
  variables: CollectionPageResourceLikeMutationVariables
  type: 'mutation'
}


export interface CollectionPageResourceUnlikeMutationOperation {
  operationName: 'collectionPageResourceUnlike'
  result: CollectionPageResourceUnlikeMutation
  variables: CollectionPageResourceUnlikeMutationVariables
  type: 'mutation'
}


export interface CollectionPageResourceCreateThreadMutationOperation {
  operationName: 'collectionPageResourceCreateThread'
  result: CollectionPageResourceCreateThreadMutation
  variables: CollectionPageResourceCreateThreadMutationVariables
  type: 'mutation'
}
