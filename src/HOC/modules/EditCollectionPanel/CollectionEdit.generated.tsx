import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type EditCollectionPanelQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type EditCollectionPanelQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & EditCollectionPanelDataFragment
  )> }
);

export type EditCollectionPanelDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name' | 'summary' | 'icon'>
);

export type EditCollectionPanelUpdateCollectionMutationVariables = {
  collection: Types.CollectionUpdateInput,
  collectionId: Types.Scalars['String']
};


export type EditCollectionPanelUpdateCollectionMutation = (
  { __typename: 'RootMutationType' }
  & { updateCollection: Types.Maybe<(
    { __typename: 'Collection' }
    & EditCollectionPanelUpdateCollectionMutationResultFragment
  )> }
);

export type EditCollectionPanelUpdateCollectionMutationResultFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
);

export type EditCollectionPanelUploadIconMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type EditCollectionPanelUploadIconMutation = (
  { __typename: 'RootMutationType' }
  & { uploadIcon: Types.Maybe<(
    { __typename: 'FileUpload' }
    & EditCollectionPanelUploadIconMutationResultFragment
  )> }
);

export type EditCollectionPanelUploadIconMutationResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id' | 'url'>
);

export const EditCollectionPanelDataFragmentDoc = gql`
    fragment EditCollectionPanelData on Collection {
  id
  name
  summary
  icon
}
    `;
export const EditCollectionPanelUpdateCollectionMutationResultFragmentDoc = gql`
    fragment EditCollectionPanelUpdateCollectionMutationResult on Collection {
  id
}
    `;
export const EditCollectionPanelUploadIconMutationResultFragmentDoc = gql`
    fragment EditCollectionPanelUploadIconMutationResult on FileUpload {
  id
  url
}
    `;
export const EditCollectionPanelDocument = gql`
    query editCollectionPanel($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...EditCollectionPanelData
  }
}
    ${EditCollectionPanelDataFragmentDoc}`;
export type EditCollectionPanelComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>, 'query'> & ({ variables: EditCollectionPanelQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const EditCollectionPanelComponent = (props: EditCollectionPanelComponentProps) => (
      <ApolloReactComponents.Query<EditCollectionPanelQuery, EditCollectionPanelQueryVariables> query={EditCollectionPanelDocument} {...props} />
    );
    
export type EditCollectionPanelProps<TChildProps = {}> = ApolloReactHoc.DataProps<EditCollectionPanelQuery, EditCollectionPanelQueryVariables> & TChildProps;
export function withEditCollectionPanel<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditCollectionPanelQuery,
  EditCollectionPanelQueryVariables,
  EditCollectionPanelProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, EditCollectionPanelQuery, EditCollectionPanelQueryVariables, EditCollectionPanelProps<TChildProps>>(EditCollectionPanelDocument, {
      alias: 'editCollectionPanel',
      ...operationOptions
    });
};

/**
 * __useEditCollectionPanelQuery__
 *
 * To run a query within a React component, call `useEditCollectionPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditCollectionPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditCollectionPanelQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useEditCollectionPanelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>) {
        return ApolloReactHooks.useQuery<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>(EditCollectionPanelDocument, baseOptions);
      }
export function useEditCollectionPanelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>(EditCollectionPanelDocument, baseOptions);
        }
export type EditCollectionPanelQueryHookResult = ReturnType<typeof useEditCollectionPanelQuery>;
export type EditCollectionPanelLazyQueryHookResult = ReturnType<typeof useEditCollectionPanelLazyQuery>;
export type EditCollectionPanelQueryResult = ApolloReactCommon.QueryResult<EditCollectionPanelQuery, EditCollectionPanelQueryVariables>;
export const EditCollectionPanelUpdateCollectionDocument = gql`
    mutation editCollectionPanelUpdateCollection($collection: CollectionUpdateInput!, $collectionId: String!) {
  updateCollection(collection: $collection, collectionId: $collectionId) {
    ...EditCollectionPanelUpdateCollectionMutationResult
  }
}
    ${EditCollectionPanelUpdateCollectionMutationResultFragmentDoc}`;
export type EditCollectionPanelUpdateCollectionMutationFn = ApolloReactCommon.MutationFunction<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables>;
export type EditCollectionPanelUpdateCollectionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables>, 'mutation'>;

    export const EditCollectionPanelUpdateCollectionComponent = (props: EditCollectionPanelUpdateCollectionComponentProps) => (
      <ApolloReactComponents.Mutation<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables> mutation={EditCollectionPanelUpdateCollectionDocument} {...props} />
    );
    
export type EditCollectionPanelUpdateCollectionProps<TChildProps = {}> = ApolloReactHoc.MutateProps<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables> & TChildProps;
export function withEditCollectionPanelUpdateCollection<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditCollectionPanelUpdateCollectionMutation,
  EditCollectionPanelUpdateCollectionMutationVariables,
  EditCollectionPanelUpdateCollectionProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables, EditCollectionPanelUpdateCollectionProps<TChildProps>>(EditCollectionPanelUpdateCollectionDocument, {
      alias: 'editCollectionPanelUpdateCollection',
      ...operationOptions
    });
};

/**
 * __useEditCollectionPanelUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useEditCollectionPanelUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCollectionPanelUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCollectionPanelUpdateCollectionMutation, { data, loading, error }] = useEditCollectionPanelUpdateCollectionMutation({
 *   variables: {
 *      collection: // value for 'collection'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useEditCollectionPanelUpdateCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables>(EditCollectionPanelUpdateCollectionDocument, baseOptions);
      }
export type EditCollectionPanelUpdateCollectionMutationHookResult = ReturnType<typeof useEditCollectionPanelUpdateCollectionMutation>;
export type EditCollectionPanelUpdateCollectionMutationResult = ApolloReactCommon.MutationResult<EditCollectionPanelUpdateCollectionMutation>;
export type EditCollectionPanelUpdateCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCollectionPanelUpdateCollectionMutation, EditCollectionPanelUpdateCollectionMutationVariables>;
export const EditCollectionPanelUploadIconDocument = gql`
    mutation editCollectionPanelUploadIcon($contextId: ID!, $upload: Upload!) {
  uploadIcon(contextId: $contextId, upload: $upload) {
    ...EditCollectionPanelUploadIconMutationResult
  }
}
    ${EditCollectionPanelUploadIconMutationResultFragmentDoc}`;
export type EditCollectionPanelUploadIconMutationFn = ApolloReactCommon.MutationFunction<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables>;
export type EditCollectionPanelUploadIconComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables>, 'mutation'>;

    export const EditCollectionPanelUploadIconComponent = (props: EditCollectionPanelUploadIconComponentProps) => (
      <ApolloReactComponents.Mutation<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables> mutation={EditCollectionPanelUploadIconDocument} {...props} />
    );
    
export type EditCollectionPanelUploadIconProps<TChildProps = {}> = ApolloReactHoc.MutateProps<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables> & TChildProps;
export function withEditCollectionPanelUploadIcon<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditCollectionPanelUploadIconMutation,
  EditCollectionPanelUploadIconMutationVariables,
  EditCollectionPanelUploadIconProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables, EditCollectionPanelUploadIconProps<TChildProps>>(EditCollectionPanelUploadIconDocument, {
      alias: 'editCollectionPanelUploadIcon',
      ...operationOptions
    });
};

/**
 * __useEditCollectionPanelUploadIconMutation__
 *
 * To run a mutation, you first call `useEditCollectionPanelUploadIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCollectionPanelUploadIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCollectionPanelUploadIconMutation, { data, loading, error }] = useEditCollectionPanelUploadIconMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useEditCollectionPanelUploadIconMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables>(EditCollectionPanelUploadIconDocument, baseOptions);
      }
export type EditCollectionPanelUploadIconMutationHookResult = ReturnType<typeof useEditCollectionPanelUploadIconMutation>;
export type EditCollectionPanelUploadIconMutationResult = ApolloReactCommon.MutationResult<EditCollectionPanelUploadIconMutation>;
export type EditCollectionPanelUploadIconMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCollectionPanelUploadIconMutation, EditCollectionPanelUploadIconMutationVariables>;


export interface EditCollectionPanelQueryOperation {
  operationName: 'editCollectionPanel'
  result: EditCollectionPanelQuery
  variables: EditCollectionPanelQueryVariables
  type: 'query'
}


export interface EditCollectionPanelUpdateCollectionMutationOperation {
  operationName: 'editCollectionPanelUpdateCollection'
  result: EditCollectionPanelUpdateCollectionMutation
  variables: EditCollectionPanelUpdateCollectionMutationVariables
  type: 'mutation'
}


export interface EditCollectionPanelUploadIconMutationOperation {
  operationName: 'editCollectionPanelUploadIcon'
  result: EditCollectionPanelUploadIconMutation
  variables: EditCollectionPanelUploadIconMutationVariables
  type: 'mutation'
}
