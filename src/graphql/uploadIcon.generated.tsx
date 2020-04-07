import * as Types from './types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UploadIconMutMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.UploadInput
};


export type UploadIconMutMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);


export const UploadIconMutDocument = gql`
    mutation uploadIconMut($contextId: ID!, $upload: UploadInput!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    id
    url
  }
}
    `;
export type UploadIconMutMutationFn = ApolloReactCommon.MutationFunction<UploadIconMutMutation, UploadIconMutMutationVariables>;
export type UploadIconMutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UploadIconMutMutation, UploadIconMutMutationVariables>, 'mutation'>;

    export const UploadIconMutComponent = (props: UploadIconMutComponentProps) => (
      <ApolloReactComponents.Mutation<UploadIconMutMutation, UploadIconMutMutationVariables> mutation={UploadIconMutDocument} {...props} />
    );
    
export type UploadIconMutProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UploadIconMutMutation, UploadIconMutMutationVariables> & TChildProps;
export function withUploadIconMut<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UploadIconMutMutation,
  UploadIconMutMutationVariables,
  UploadIconMutProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UploadIconMutMutation, UploadIconMutMutationVariables, UploadIconMutProps<TChildProps>>(UploadIconMutDocument, {
      alias: 'uploadIconMut',
      ...operationOptions
    });
};

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
