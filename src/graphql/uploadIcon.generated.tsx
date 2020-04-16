import * as Types from './types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UploadIconMutMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type UploadIconMutMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & Pick<Types.FileUpload, 'id' | 'url'>
    & { metadata: Types.Maybe<(
      { __typename: 'FileMetadata' }
      & Pick<Types.FileMetadata, 'heightPx' | 'widthPx'>
    )> }
  )> }
);


export const UploadIconMutDocument = gql`
    mutation uploadIconMut($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    id
    metadata {
      heightPx
      widthPx
    }
    url
  }
}
    `;
export type UploadIconMutMutationFn = ApolloReactCommon.MutationFunction<UploadIconMutMutation, UploadIconMutMutationVariables>;

/**
 * __useUploadIconMutMutation__
 *
 * To run a mutation, you first call `useUploadIconMutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadIconMutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadIconMutMutation, { data, loading, error }] = useUploadIconMutMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useUploadIconMutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadIconMutMutation, UploadIconMutMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadIconMutMutation, UploadIconMutMutationVariables>(UploadIconMutDocument, baseOptions);
      }
export type UploadIconMutMutationHookResult = ReturnType<typeof useUploadIconMutMutation>;
export type UploadIconMutMutationResult = ApolloReactCommon.MutationResult<UploadIconMutMutation>;
export type UploadIconMutMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadIconMutMutation, UploadIconMutMutationVariables>;


export interface UploadIconMutMutationOperation {
  operationName: 'uploadIconMut'
  result: UploadIconMutMutation
  variables: UploadIconMutMutationVariables
  type: 'mutation'
}
export const UploadIconMutMutationName:UploadIconMutMutationOperation['operationName'] = 'uploadIconMut'
