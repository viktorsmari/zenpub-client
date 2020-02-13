import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateFlagPanelCreateMutationVariables = {
  contextId: Types.Scalars['String'],
  message: Types.Scalars['String']
};


export type CreateFlagPanelCreateMutation = (
  { __typename: 'RootMutationType' }
  & { createFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & { context: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Resource' } | { __typename: 'User' }> }
  )> }
);


export const CreateFlagPanelCreateDocument = gql`
    mutation createFlagPanelCreate($contextId: String!, $message: String!) {
  createFlag(contextId: $contextId, message: $message) {
    context {
      __typename
    }
  }
}
    `;
export type CreateFlagPanelCreateMutationFn = ApolloReactCommon.MutationFunction<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables>;
export type CreateFlagPanelCreateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables>, 'mutation'>;

    export const CreateFlagPanelCreateComponent = (props: CreateFlagPanelCreateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables> mutation={CreateFlagPanelCreateDocument} {...props} />
    );
    
export type CreateFlagPanelCreateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables> & TChildProps;
export function withCreateFlagPanelCreate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateFlagPanelCreateMutation,
  CreateFlagPanelCreateMutationVariables,
  CreateFlagPanelCreateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables, CreateFlagPanelCreateProps<TChildProps>>(CreateFlagPanelCreateDocument, {
      alias: 'createFlagPanelCreate',
      ...operationOptions
    });
};

/**
 * __useCreateFlagPanelCreateMutation__
 *
 * To run a mutation, you first call `useCreateFlagPanelCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFlagPanelCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFlagPanelCreateMutation, { data, loading, error }] = useCreateFlagPanelCreateMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateFlagPanelCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables>(CreateFlagPanelCreateDocument, baseOptions);
      }
export type CreateFlagPanelCreateMutationHookResult = ReturnType<typeof useCreateFlagPanelCreateMutation>;
export type CreateFlagPanelCreateMutationResult = ApolloReactCommon.MutationResult<CreateFlagPanelCreateMutation>;
export type CreateFlagPanelCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateFlagPanelCreateMutation, CreateFlagPanelCreateMutationVariables>;


export interface CreateFlagPanelCreateMutationOperation {
  operationName: 'createFlagPanelCreate'
  result: CreateFlagPanelCreateMutation
  variables: CreateFlagPanelCreateMutationVariables
  type: 'mutation'
}
