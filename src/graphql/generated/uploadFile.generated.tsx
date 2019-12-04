import * as Types from '../types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UploadFileMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type UploadFileMutation = (
  { __typename?: 'RootMutationType' }
  & { uploadFile: Types.Maybe<(
    { __typename?: 'FileUpload' }
    & Pick<Types.FileUpload, 'id' | 'url'>
    & { metadata: Types.Maybe<(
      { __typename?: 'FileMetadata' }
      & Pick<Types.FileMetadata, 'heightPx' | 'pageCount' | 'widthPx'>
    )> }
  )> }
);


export const UploadFileDocument = gql`
    mutation uploadFile($contextId: ID!, $upload: Upload!) {
  uploadFile(contextId: $contextId, upload: $upload) {
    id
    metadata {
      heightPx
      pageCount
      widthPx
    }
    url
  }
}
    `;
export type UploadFileMutationFn = ApolloReactCommon.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;
export type UploadFileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UploadFileMutation, UploadFileMutationVariables>, 'mutation'>;

    export const UploadFileComponent = (props: UploadFileComponentProps) => (
      <ApolloReactComponents.Mutation<UploadFileMutation, UploadFileMutationVariables> mutation={UploadFileDocument} {...props} />
    );
    
export type UploadFileProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UploadFileMutation, UploadFileMutationVariables> & TChildProps;
export function withUploadFile<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UploadFileMutation,
  UploadFileMutationVariables,
  UploadFileProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UploadFileMutation, UploadFileMutationVariables, UploadFileProps<TChildProps>>(UploadFileDocument, {
      alias: 'uploadFile',
      ...operationOptions
    });
};

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = ApolloReactCommon.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;


export interface UploadFileMutationOperation {
  operationName: 'uploadFile'
  result: UploadFileMutation
  variables: UploadFileMutationVariables
  type: 'mutation'
}
