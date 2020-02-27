import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCommunityPanelCreateMutationVariables = {
  community: Types.CommunityInput
};


export type CreateCommunityPanelCreateMutation = (
  { __typename: 'RootMutationType' }
  & { createCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & CreateCommunityPanelCreateMutationResultFragment
  )> }
);

export type CreateCommunityPanelCreateMutationResultFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
);

export type CreateCommunityPanelUploadImageMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type CreateCommunityPanelUploadImageMutation = (
  { __typename: 'RootMutationType' }
  & { uploadImage: Types.Maybe<(
    { __typename: 'FileUpload' }
    & CreateCommunityPanelUploadImageMutationResultFragment
  )> }
);

export type CreateCommunityPanelUploadImageMutationResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id'>
);

export const CreateCommunityPanelCreateMutationResultFragmentDoc = gql`
    fragment CreateCommunityPanelCreateMutationResult on Community {
  id
}
    `;
export const CreateCommunityPanelUploadImageMutationResultFragmentDoc = gql`
    fragment CreateCommunityPanelUploadImageMutationResult on FileUpload {
  id
}
    `;
export const CreateCommunityPanelCreateDocument = gql`
    mutation createCommunityPanelCreate($community: CommunityInput!) {
  createCommunity(community: $community) {
    ...CreateCommunityPanelCreateMutationResult
  }
}
    ${CreateCommunityPanelCreateMutationResultFragmentDoc}`;
export type CreateCommunityPanelCreateMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>;
export type CreateCommunityPanelCreateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>, 'mutation'>;

    export const CreateCommunityPanelCreateComponent = (props: CreateCommunityPanelCreateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables> mutation={CreateCommunityPanelCreateDocument} {...props} />
    );
    
export type CreateCommunityPanelCreateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables> & TChildProps;
export function withCreateCommunityPanelCreate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCommunityPanelCreateMutation,
  CreateCommunityPanelCreateMutationVariables,
  CreateCommunityPanelCreateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables, CreateCommunityPanelCreateProps<TChildProps>>(CreateCommunityPanelCreateDocument, {
      alias: 'createCommunityPanelCreate',
      ...operationOptions
    });
};

/**
 * __useCreateCommunityPanelCreateMutation__
 *
 * To run a mutation, you first call `useCreateCommunityPanelCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityPanelCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityPanelCreateMutation, { data, loading, error }] = useCreateCommunityPanelCreateMutation({
 *   variables: {
 *      community: // value for 'community'
 *   },
 * });
 */
export function useCreateCommunityPanelCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>(CreateCommunityPanelCreateDocument, baseOptions);
      }
export type CreateCommunityPanelCreateMutationHookResult = ReturnType<typeof useCreateCommunityPanelCreateMutation>;
export type CreateCommunityPanelCreateMutationResult = ApolloReactCommon.MutationResult<CreateCommunityPanelCreateMutation>;
export type CreateCommunityPanelCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>;
export const CreateCommunityPanelUploadImageDocument = gql`
    mutation createCommunityPanelUploadImage($contextId: ID!, $upload: Upload!) {
  uploadImage(contextId: $contextId, upload: $upload) {
    ...CreateCommunityPanelUploadImageMutationResult
  }
}
    ${CreateCommunityPanelUploadImageMutationResultFragmentDoc}`;
export type CreateCommunityPanelUploadImageMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables>;
export type CreateCommunityPanelUploadImageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables>, 'mutation'>;

    export const CreateCommunityPanelUploadImageComponent = (props: CreateCommunityPanelUploadImageComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables> mutation={CreateCommunityPanelUploadImageDocument} {...props} />
    );
    
export type CreateCommunityPanelUploadImageProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables> & TChildProps;
export function withCreateCommunityPanelUploadImage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCommunityPanelUploadImageMutation,
  CreateCommunityPanelUploadImageMutationVariables,
  CreateCommunityPanelUploadImageProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables, CreateCommunityPanelUploadImageProps<TChildProps>>(CreateCommunityPanelUploadImageDocument, {
      alias: 'createCommunityPanelUploadImage',
      ...operationOptions
    });
};

/**
 * __useCreateCommunityPanelUploadImageMutation__
 *
 * To run a mutation, you first call `useCreateCommunityPanelUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityPanelUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityPanelUploadImageMutation, { data, loading, error }] = useCreateCommunityPanelUploadImageMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useCreateCommunityPanelUploadImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables>(CreateCommunityPanelUploadImageDocument, baseOptions);
      }
export type CreateCommunityPanelUploadImageMutationHookResult = ReturnType<typeof useCreateCommunityPanelUploadImageMutation>;
export type CreateCommunityPanelUploadImageMutationResult = ApolloReactCommon.MutationResult<CreateCommunityPanelUploadImageMutation>;
export type CreateCommunityPanelUploadImageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommunityPanelUploadImageMutation, CreateCommunityPanelUploadImageMutationVariables>;


export interface CreateCommunityPanelCreateMutationOperation {
  operationName: 'createCommunityPanelCreate'
  result: CreateCommunityPanelCreateMutation
  variables: CreateCommunityPanelCreateMutationVariables
  type: 'mutation'
}


export interface CreateCommunityPanelUploadImageMutationOperation {
  operationName: 'createCommunityPanelUploadImage'
  result: CreateCommunityPanelUploadImageMutation
  variables: CreateCommunityPanelUploadImageMutationVariables
  type: 'mutation'
}
