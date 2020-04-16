import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EditCommunityPanelQueryVariables = {
  communityId: Types.Scalars['String']
};


export type EditCommunityPanelQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & EditCommunityPanelDataFragment
  )> }
);

export type EditCommunityPanelDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name' | 'summary' | 'icon'>
);

export type EditCommunityPanelUpdateMutationVariables = {
  community: Types.CommunityUpdateInput,
  communityId: Types.Scalars['String']
};


export type EditCommunityPanelUpdateMutation = (
  { __typename: 'RootMutationType' }
  & { updateCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & EditCommunityPanelUpdateMutationResultFragment
  )> }
);

export type EditCommunityPanelUpdateMutationResultFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
);

export type EditCommunityPanelUploadIconMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type EditCommunityPanelUploadIconMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & EditCommunityPanelUploadIconMutationResultFragment
  )> }
);

export type EditCommunityPanelUploadIconMutationResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id' | 'url'>
);

export const EditCommunityPanelDataFragmentDoc = gql`
    fragment EditCommunityPanelData on Community {
  id
  name
  summary
  icon
}
    `;
export const EditCommunityPanelUpdateMutationResultFragmentDoc = gql`
    fragment EditCommunityPanelUpdateMutationResult on Community {
  id
}
    `;
export const EditCommunityPanelUploadIconMutationResultFragmentDoc = gql`
    fragment EditCommunityPanelUploadIconMutationResult on FileUpload {
  id
  url
}
    `;
export const EditCommunityPanelDocument = gql`
    query editCommunityPanel($communityId: String!) {
  community(communityId: $communityId) {
    ...EditCommunityPanelData
  }
}
    ${EditCommunityPanelDataFragmentDoc}`;

/**
 * __useEditCommunityPanelQuery__
 *
 * To run a query within a React component, call `useEditCommunityPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditCommunityPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditCommunityPanelQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useEditCommunityPanelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditCommunityPanelQuery, EditCommunityPanelQueryVariables>) {
        return ApolloReactHooks.useQuery<EditCommunityPanelQuery, EditCommunityPanelQueryVariables>(EditCommunityPanelDocument, baseOptions);
      }
export function useEditCommunityPanelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditCommunityPanelQuery, EditCommunityPanelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditCommunityPanelQuery, EditCommunityPanelQueryVariables>(EditCommunityPanelDocument, baseOptions);
        }
export type EditCommunityPanelQueryHookResult = ReturnType<typeof useEditCommunityPanelQuery>;
export type EditCommunityPanelLazyQueryHookResult = ReturnType<typeof useEditCommunityPanelLazyQuery>;
export type EditCommunityPanelQueryResult = ApolloReactCommon.QueryResult<EditCommunityPanelQuery, EditCommunityPanelQueryVariables>;
export const EditCommunityPanelUpdateDocument = gql`
    mutation editCommunityPanelUpdate($community: CommunityUpdateInput!, $communityId: String!) {
  updateCommunity(communityId: $communityId, community: $community) {
    ...EditCommunityPanelUpdateMutationResult
  }
}
    ${EditCommunityPanelUpdateMutationResultFragmentDoc}`;
export type EditCommunityPanelUpdateMutationFn = ApolloReactCommon.MutationFunction<EditCommunityPanelUpdateMutation, EditCommunityPanelUpdateMutationVariables>;

/**
 * __useEditCommunityPanelUpdateMutation__
 *
 * To run a mutation, you first call `useEditCommunityPanelUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommunityPanelUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommunityPanelUpdateMutation, { data, loading, error }] = useEditCommunityPanelUpdateMutation({
 *   variables: {
 *      community: // value for 'community'
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useEditCommunityPanelUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommunityPanelUpdateMutation, EditCommunityPanelUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommunityPanelUpdateMutation, EditCommunityPanelUpdateMutationVariables>(EditCommunityPanelUpdateDocument, baseOptions);
      }
export type EditCommunityPanelUpdateMutationHookResult = ReturnType<typeof useEditCommunityPanelUpdateMutation>;
export type EditCommunityPanelUpdateMutationResult = ApolloReactCommon.MutationResult<EditCommunityPanelUpdateMutation>;
export type EditCommunityPanelUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommunityPanelUpdateMutation, EditCommunityPanelUpdateMutationVariables>;
export const EditCommunityPanelUploadIconDocument = gql`
    mutation editCommunityPanelUploadIcon($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    ...EditCommunityPanelUploadIconMutationResult
  }
}
    ${EditCommunityPanelUploadIconMutationResultFragmentDoc}`;
export type EditCommunityPanelUploadIconMutationFn = ApolloReactCommon.MutationFunction<EditCommunityPanelUploadIconMutation, EditCommunityPanelUploadIconMutationVariables>;

/**
 * __useEditCommunityPanelUploadIconMutation__
 *
 * To run a mutation, you first call `useEditCommunityPanelUploadIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommunityPanelUploadIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommunityPanelUploadIconMutation, { data, loading, error }] = useEditCommunityPanelUploadIconMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useEditCommunityPanelUploadIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommunityPanelUploadIconMutation, EditCommunityPanelUploadIconMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommunityPanelUploadIconMutation, EditCommunityPanelUploadIconMutationVariables>(EditCommunityPanelUploadIconDocument, baseOptions);
      }
export type EditCommunityPanelUploadIconMutationHookResult = ReturnType<typeof useEditCommunityPanelUploadIconMutation>;
export type EditCommunityPanelUploadIconMutationResult = ApolloReactCommon.MutationResult<EditCommunityPanelUploadIconMutation>;
export type EditCommunityPanelUploadIconMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommunityPanelUploadIconMutation, EditCommunityPanelUploadIconMutationVariables>;


export interface EditCommunityPanelQueryOperation {
  operationName: 'editCommunityPanel'
  result: EditCommunityPanelQuery
  variables: EditCommunityPanelQueryVariables
  type: 'query'
}
export const EditCommunityPanelQueryName:EditCommunityPanelQueryOperation['operationName'] = 'editCommunityPanel'


export interface EditCommunityPanelUpdateMutationOperation {
  operationName: 'editCommunityPanelUpdate'
  result: EditCommunityPanelUpdateMutation
  variables: EditCommunityPanelUpdateMutationVariables
  type: 'mutation'
}
export const EditCommunityPanelUpdateMutationName:EditCommunityPanelUpdateMutationOperation['operationName'] = 'editCommunityPanelUpdate'


export interface EditCommunityPanelUploadIconMutationOperation {
  operationName: 'editCommunityPanelUploadIcon'
  result: EditCommunityPanelUploadIconMutation
  variables: EditCommunityPanelUploadIconMutationVariables
  type: 'mutation'
}
export const EditCommunityPanelUploadIconMutationName:EditCommunityPanelUploadIconMutationOperation['operationName'] = 'editCommunityPanelUploadIcon'
