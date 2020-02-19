import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateThreadMutationVariables = {
  contextId: Types.Scalars['String'],
  comment: Types.CommentInput
};


export type CreateThreadMutation = (
  { __typename: 'RootMutationType' }
  & { createThread: Types.Maybe<(
    { __typename: 'Comment' }
    & { thread: Types.Maybe<(
      { __typename: 'Thread' }
      & Pick<Types.Thread, 'id'>
    )> }
  )> }
);


export const CreateThreadDocument = gql`
    mutation createThread($contextId: String!, $comment: CommentInput!) {
  createThread(comment: $comment, contextId: $contextId) {
    thread {
      id
    }
  }
}
    `;
export type CreateThreadMutationFn = ApolloReactCommon.MutationFunction<CreateThreadMutation, CreateThreadMutationVariables>;
export type CreateThreadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateThreadMutation, CreateThreadMutationVariables>, 'mutation'>;

    export const CreateThreadComponent = (props: CreateThreadComponentProps) => (
      <ApolloReactComponents.Mutation<CreateThreadMutation, CreateThreadMutationVariables> mutation={CreateThreadDocument} {...props} />
    );
    
export type CreateThreadProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateThreadMutation, CreateThreadMutationVariables> & TChildProps;
export function withCreateThread<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateThreadMutation,
  CreateThreadMutationVariables,
  CreateThreadProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateThreadMutation, CreateThreadMutationVariables, CreateThreadProps<TChildProps>>(CreateThreadDocument, {
      alias: 'createThread',
      ...operationOptions
    });
};

/**
 * __useCreateThreadMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutation, { data, loading, error }] = useCreateThreadMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateThreadMutation, CreateThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateThreadMutation, CreateThreadMutationVariables>(CreateThreadDocument, baseOptions);
      }
export type CreateThreadMutationHookResult = ReturnType<typeof useCreateThreadMutation>;
export type CreateThreadMutationResult = ApolloReactCommon.MutationResult<CreateThreadMutation>;
export type CreateThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateThreadMutation, CreateThreadMutationVariables>;


export interface CreateThreadMutationOperation {
  operationName: 'createThread'
  result: CreateThreadMutation
  variables: CreateThreadMutationVariables
  type: 'mutation'
}
