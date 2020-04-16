import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateCommunityPanelCreateMutationVariables = {
  community: Types.CommunityInput
};


export type CreateCommunityPanelCreateMutation = (
  { __typename: 'RootMutationType' }
  & { createCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & CreateCommunityPanelCreateResultFragment
  )> }
);

export type CreateCommunityPanelCreateResultFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
);

export type CreateCommunityPanelUploadIconMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type CreateCommunityPanelUploadIconMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & CreateCommunityPanelUploadIconResultFragment
  )> }
);

export type CreateCommunityPanelUploadIconResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id'>
);

export const CreateCommunityPanelCreateResultFragmentDoc = gql`
    fragment CreateCommunityPanelCreateResult on Community {
  id
}
    `;
export const CreateCommunityPanelUploadIconResultFragmentDoc = gql`
    fragment CreateCommunityPanelUploadIconResult on FileUpload {
  id
}
    `;
export const CreateCommunityPanelCreateDocument = gql`
    mutation createCommunityPanelCreate($community: CommunityInput!) {
  createCommunity(community: $community) {
    ...CreateCommunityPanelCreateResult
  }
}
    ${CreateCommunityPanelCreateResultFragmentDoc}`;
export type CreateCommunityPanelCreateMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityPanelCreateMutation, CreateCommunityPanelCreateMutationVariables>;

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
export const CreateCommunityPanelUploadIconDocument = gql`
    mutation createCommunityPanelUploadIcon($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    ...CreateCommunityPanelUploadIconResult
  }
}
    ${CreateCommunityPanelUploadIconResultFragmentDoc}`;
export type CreateCommunityPanelUploadIconMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityPanelUploadIconMutation, CreateCommunityPanelUploadIconMutationVariables>;

/**
 * __useCreateCommunityPanelUploadIconMutation__
 *
 * To run a mutation, you first call `useCreateCommunityPanelUploadIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityPanelUploadIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityPanelUploadIconMutation, { data, loading, error }] = useCreateCommunityPanelUploadIconMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useCreateCommunityPanelUploadIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommunityPanelUploadIconMutation, CreateCommunityPanelUploadIconMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCommunityPanelUploadIconMutation, CreateCommunityPanelUploadIconMutationVariables>(CreateCommunityPanelUploadIconDocument, baseOptions);
      }
export type CreateCommunityPanelUploadIconMutationHookResult = ReturnType<typeof useCreateCommunityPanelUploadIconMutation>;
export type CreateCommunityPanelUploadIconMutationResult = ApolloReactCommon.MutationResult<CreateCommunityPanelUploadIconMutation>;
export type CreateCommunityPanelUploadIconMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommunityPanelUploadIconMutation, CreateCommunityPanelUploadIconMutationVariables>;


export interface CreateCommunityPanelCreateMutationOperation {
  operationName: 'createCommunityPanelCreate'
  result: CreateCommunityPanelCreateMutation
  variables: CreateCommunityPanelCreateMutationVariables
  type: 'mutation'
}
export const CreateCommunityPanelCreateMutationName:CreateCommunityPanelCreateMutationOperation['operationName'] = 'createCommunityPanelCreate'


export interface CreateCommunityPanelUploadIconMutationOperation {
  operationName: 'createCommunityPanelUploadIcon'
  result: CreateCommunityPanelUploadIconMutation
  variables: CreateCommunityPanelUploadIconMutationVariables
  type: 'mutation'
}
export const CreateCommunityPanelUploadIconMutationName:CreateCommunityPanelUploadIconMutationOperation['operationName'] = 'createCommunityPanelUploadIcon'
