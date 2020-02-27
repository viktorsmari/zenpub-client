import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCollectionPanelCreateMutationVariables = {
  communityId: Types.Scalars['String'],
  collection: Types.CollectionInput
};


export type CreateCollectionPanelCreateMutation = (
  { __typename: 'RootMutationType' }
  & { createCollection: Types.Maybe<(
    { __typename: 'Collection' }
    & CreateCollectionPanelCreateResultFragment
  )> }
);

export type CreateCollectionPanelCreateResultFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
);

export type CreateCollectionPanelUploadIconMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type CreateCollectionPanelUploadIconMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & CreateCollectionPanelUploadIconResultFragment
  )> }
);

export type CreateCollectionPanelUploadIconResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id'>
);

export const CreateCollectionPanelCreateResultFragmentDoc = gql`
    fragment CreateCollectionPanelCreateResult on Collection {
  id
}
    `;
export const CreateCollectionPanelUploadIconResultFragmentDoc = gql`
    fragment CreateCollectionPanelUploadIconResult on FileUpload {
  id
}
    `;
export const CreateCollectionPanelCreateDocument = gql`
    mutation createCollectionPanelCreate($communityId: String!, $collection: CollectionInput!) {
  createCollection(communityId: $communityId, collection: $collection) {
    ...CreateCollectionPanelCreateResult
  }
}
    ${CreateCollectionPanelCreateResultFragmentDoc}`;
export type CreateCollectionPanelCreateMutationFn = ApolloReactCommon.MutationFunction<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables>;
export type CreateCollectionPanelCreateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables>, 'mutation'>;

    export const CreateCollectionPanelCreateComponent = (props: CreateCollectionPanelCreateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables> mutation={CreateCollectionPanelCreateDocument} {...props} />
    );
    
export type CreateCollectionPanelCreateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables> & TChildProps;
export function withCreateCollectionPanelCreate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCollectionPanelCreateMutation,
  CreateCollectionPanelCreateMutationVariables,
  CreateCollectionPanelCreateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables, CreateCollectionPanelCreateProps<TChildProps>>(CreateCollectionPanelCreateDocument, {
      alias: 'createCollectionPanelCreate',
      ...operationOptions
    });
};

/**
 * __useCreateCollectionPanelCreateMutation__
 *
 * To run a mutation, you first call `useCreateCollectionPanelCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionPanelCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionPanelCreateMutation, { data, loading, error }] = useCreateCollectionPanelCreateMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useCreateCollectionPanelCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables>(CreateCollectionPanelCreateDocument, baseOptions);
      }
export type CreateCollectionPanelCreateMutationHookResult = ReturnType<typeof useCreateCollectionPanelCreateMutation>;
export type CreateCollectionPanelCreateMutationResult = ApolloReactCommon.MutationResult<CreateCollectionPanelCreateMutation>;
export type CreateCollectionPanelCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCollectionPanelCreateMutation, CreateCollectionPanelCreateMutationVariables>;
export const CreateCollectionPanelUploadIconDocument = gql`
    mutation createCollectionPanelUploadIcon($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    ...CreateCollectionPanelUploadIconResult
  }
}
    ${CreateCollectionPanelUploadIconResultFragmentDoc}`;
export type CreateCollectionPanelUploadIconMutationFn = ApolloReactCommon.MutationFunction<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables>;
export type CreateCollectionPanelUploadIconComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables>, 'mutation'>;

    export const CreateCollectionPanelUploadIconComponent = (props: CreateCollectionPanelUploadIconComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables> mutation={CreateCollectionPanelUploadIconDocument} {...props} />
    );
    
export type CreateCollectionPanelUploadIconProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables> & TChildProps;
export function withCreateCollectionPanelUploadIcon<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCollectionPanelUploadIconMutation,
  CreateCollectionPanelUploadIconMutationVariables,
  CreateCollectionPanelUploadIconProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables, CreateCollectionPanelUploadIconProps<TChildProps>>(CreateCollectionPanelUploadIconDocument, {
      alias: 'createCollectionPanelUploadIcon',
      ...operationOptions
    });
};

/**
 * __useCreateCollectionPanelUploadIconMutation__
 *
 * To run a mutation, you first call `useCreateCollectionPanelUploadIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionPanelUploadIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionPanelUploadIconMutation, { data, loading, error }] = useCreateCollectionPanelUploadIconMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useCreateCollectionPanelUploadIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables>(CreateCollectionPanelUploadIconDocument, baseOptions);
      }
export type CreateCollectionPanelUploadIconMutationHookResult = ReturnType<typeof useCreateCollectionPanelUploadIconMutation>;
export type CreateCollectionPanelUploadIconMutationResult = ApolloReactCommon.MutationResult<CreateCollectionPanelUploadIconMutation>;
export type CreateCollectionPanelUploadIconMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCollectionPanelUploadIconMutation, CreateCollectionPanelUploadIconMutationVariables>;


export interface CreateCollectionPanelCreateMutationOperation {
  operationName: 'createCollectionPanelCreate'
  result: CreateCollectionPanelCreateMutation
  variables: CreateCollectionPanelCreateMutationVariables
  type: 'mutation'
}


export interface CreateCollectionPanelUploadIconMutationOperation {
  operationName: 'createCollectionPanelUploadIcon'
  result: CreateCollectionPanelUploadIconMutation
  variables: CreateCollectionPanelUploadIconMutationVariables
  type: 'mutation'
}
