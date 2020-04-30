import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AddFeaturedMutationVariables = {
  contextId: Types.Scalars['String']
};


export type AddFeaturedMutation = (
  { __typename: 'RootMutationType' }
  & { createFeature: Types.Maybe<(
    { __typename: 'Feature' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
    )> }
  )> }
);

export type RemoveFeaturedMutationVariables = {
  contextId: Types.Scalars['String']
};


export type RemoveFeaturedMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | (
    { __typename: 'Feature' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
    )> }
  ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);


export const AddFeaturedDocument = gql`
    mutation addFeatured($contextId: String!) {
  createFeature(contextId: $contextId) {
    context {
      ... on Collection {
        id
      }
      ... on Community {
        id
      }
    }
  }
}
    `;
export type AddFeaturedMutationFn = ApolloReactCommon.MutationFunction<AddFeaturedMutation, AddFeaturedMutationVariables>;

/**
 * __useAddFeaturedMutation__
 *
 * To run a mutation, you first call `useAddFeaturedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFeaturedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFeaturedMutation, { data, loading, error }] = useAddFeaturedMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useAddFeaturedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFeaturedMutation, AddFeaturedMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFeaturedMutation, AddFeaturedMutationVariables>(AddFeaturedDocument, baseOptions);
      }
export type AddFeaturedMutationHookResult = ReturnType<typeof useAddFeaturedMutation>;
export type AddFeaturedMutationResult = ApolloReactCommon.MutationResult<AddFeaturedMutation>;
export type AddFeaturedMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFeaturedMutation, AddFeaturedMutationVariables>;
export const RemoveFeaturedDocument = gql`
    mutation removeFeatured($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Feature {
      context {
        ... on Collection {
          id
        }
        ... on Community {
          id
        }
      }
    }
  }
}
    `;
export type RemoveFeaturedMutationFn = ApolloReactCommon.MutationFunction<RemoveFeaturedMutation, RemoveFeaturedMutationVariables>;

/**
 * __useRemoveFeaturedMutation__
 *
 * To run a mutation, you first call `useRemoveFeaturedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFeaturedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFeaturedMutation, { data, loading, error }] = useRemoveFeaturedMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useRemoveFeaturedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFeaturedMutation, RemoveFeaturedMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveFeaturedMutation, RemoveFeaturedMutationVariables>(RemoveFeaturedDocument, baseOptions);
      }
export type RemoveFeaturedMutationHookResult = ReturnType<typeof useRemoveFeaturedMutation>;
export type RemoveFeaturedMutationResult = ApolloReactCommon.MutationResult<RemoveFeaturedMutation>;
export type RemoveFeaturedMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveFeaturedMutation, RemoveFeaturedMutationVariables>;


export interface AddFeaturedMutationOperation {
  operationName: 'addFeatured'
  result: AddFeaturedMutation
  variables: AddFeaturedMutationVariables
  type: 'mutation'
}
export const AddFeaturedMutationName:AddFeaturedMutationOperation['operationName'] = 'addFeatured'

export const AddFeaturedMutationRefetch = (
  variables:AddFeaturedMutationVariables, 
  context?:any
)=>({
  query:AddFeaturedDocument,
  variables,
  context
})
      


export interface RemoveFeaturedMutationOperation {
  operationName: 'removeFeatured'
  result: RemoveFeaturedMutation
  variables: RemoveFeaturedMutationVariables
  type: 'mutation'
}
export const RemoveFeaturedMutationName:RemoveFeaturedMutationOperation['operationName'] = 'removeFeatured'

export const RemoveFeaturedMutationRefetch = (
  variables:RemoveFeaturedMutationVariables, 
  context?:any
)=>({
  query:RemoveFeaturedDocument,
  variables,
  context
})
      
