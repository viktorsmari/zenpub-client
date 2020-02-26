import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UpdateCollectionMutationVariables = {
  collection: Types.CollectionUpdateInput,
  collectionId: Types.Scalars['String']
};


export type UpdateCollectionMutation = (
  { __typename: 'RootMutationType' }
  & { updateCollection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id' | 'icon' | 'name' | 'preferredUsername' | 'summary' | 'updatedAt'>
  )> }
);


export const UpdateCollectionDocument = gql`
    mutation updateCollection($collection: CollectionUpdateInput!, $collectionId: String!) {
  updateCollection(collectionId: $collectionId, collection: $collection) {
    id
    icon
    name
    preferredUsername
    summary
    updatedAt
  }
}
    `;
export type UpdateCollectionMutationFn = ApolloReactCommon.MutationFunction<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export type UpdateCollectionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>, 'mutation'>;

    export const UpdateCollectionComponent = (props: UpdateCollectionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCollectionMutation, UpdateCollectionMutationVariables> mutation={UpdateCollectionDocument} {...props} />
    );
    
export type UpdateCollectionProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateCollectionMutation, UpdateCollectionMutationVariables> & TChildProps;
export function withUpdateCollection<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCollectionMutation,
  UpdateCollectionMutationVariables,
  UpdateCollectionProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCollectionMutation, UpdateCollectionMutationVariables, UpdateCollectionProps<TChildProps>>(UpdateCollectionDocument, {
      alias: 'updateCollection',
      ...operationOptions
    });
};

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      collection: // value for 'collection'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useUpdateCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCollectionMutation, UpdateCollectionMutationVariables>(UpdateCollectionDocument, baseOptions);
      }
export type UpdateCollectionMutationHookResult = ReturnType<typeof useUpdateCollectionMutation>;
export type UpdateCollectionMutationResult = ApolloReactCommon.MutationResult<UpdateCollectionMutation>;
export type UpdateCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>;


export interface UpdateCollectionMutationOperation {
  operationName: 'updateCollection'
  result: UpdateCollectionMutation
  variables: UpdateCollectionMutationVariables
  type: 'mutation'
}
