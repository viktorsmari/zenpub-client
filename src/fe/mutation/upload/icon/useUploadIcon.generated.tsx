import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UploadIconMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type UploadIconMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & Pick<Types.FileUpload, 'id'>
    & { parent: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'icon'>
    ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'icon'>
    ) | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id' | 'icon'>
    ) | (
      { __typename: 'User' }
      & Pick<Types.User, 'icon'>
      & { userId: Types.User['id'] }
    )> }
  )> }
);


export const UploadIconDocument = gql`
    mutation uploadIcon($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    id
    parent {
      ... on Collection {
        id
        icon
      }
      ... on Community {
        id
        icon
      }
      ... on Resource {
        id
        icon
      }
      ... on User {
        userId: id
        icon
      }
    }
  }
}
    `;
export type UploadIconMutationFn = ApolloReactCommon.MutationFunction<UploadIconMutation, UploadIconMutationVariables>;

/**
 * __useUploadIconMutation__
 *
 * To run a mutation, you first call `useUploadIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadIconMutation, { data, loading, error }] = useUploadIconMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useUploadIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadIconMutation, UploadIconMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadIconMutation, UploadIconMutationVariables>(UploadIconDocument, baseOptions);
      }
export type UploadIconMutationHookResult = ReturnType<typeof useUploadIconMutation>;
export type UploadIconMutationResult = ApolloReactCommon.MutationResult<UploadIconMutation>;
export type UploadIconMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadIconMutation, UploadIconMutationVariables>;


export interface UploadIconMutationOperation {
  operationName: 'uploadIcon'
  result: UploadIconMutation
  variables: UploadIconMutationVariables
  type: 'mutation'
}
export const UploadIconMutationName:UploadIconMutationOperation['operationName'] = 'uploadIcon'
