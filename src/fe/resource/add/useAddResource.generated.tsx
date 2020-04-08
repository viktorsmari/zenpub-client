import * as Types from '../../../graphql/types.generated';

import { AddResourceCreateResourceMutationResultFragment } from '../../../HOC/modules/AddResource/addResource.generated';
import gql from 'graphql-tag';
import { AddResourceCreateResourceMutationResultFragmentDoc } from '../../../HOC/modules/AddResource/addResource.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type AddResourceCreateResourceMutationVariables = {
  collectionId: Types.Scalars['String'],
  resource: Types.ResourceInput,
  icon?: Types.Maybe<Types.UploadInput>,
  content: Types.UploadInput
};


export type AddResourceCreateResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createResource: Types.Maybe<(
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
    & AddResourceCreateResourceMutationResultFragment
  )> }
);


export const AddResourceCreateResourceDocument = gql`
    mutation addResourceCreateResource($collectionId: String!, $resource: ResourceInput!, $icon: UploadInput, $content: UploadInput!) {
  createResource(collectionId: $collectionId, resource: $resource, content: $content, icon: $icon) {
    id
    ...AddResourceCreateResourceMutationResult
  }
}
    ${AddResourceCreateResourceMutationResultFragmentDoc}`;
export type AddResourceCreateResourceMutationFn = ApolloReactCommon.MutationFunction<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;
export type AddResourceCreateResourceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>, 'mutation'>;

    export const AddResourceCreateResourceComponent = (props: AddResourceCreateResourceComponentProps) => (
      <ApolloReactComponents.Mutation<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables> mutation={AddResourceCreateResourceDocument} {...props} />
    );
    
export type AddResourceCreateResourceProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables> & TChildProps;
export function withAddResourceCreateResource<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddResourceCreateResourceMutation,
  AddResourceCreateResourceMutationVariables,
  AddResourceCreateResourceProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables, AddResourceCreateResourceProps<TChildProps>>(AddResourceCreateResourceDocument, {
      alias: 'addResourceCreateResource',
      ...operationOptions
    });
};

/**
 * __useAddResourceCreateResourceMutation__
 *
 * To run a mutation, you first call `useAddResourceCreateResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceCreateResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceCreateResourceMutation, { data, loading, error }] = useAddResourceCreateResourceMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      resource: // value for 'resource'
 *      icon: // value for 'icon'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddResourceCreateResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>(AddResourceCreateResourceDocument, baseOptions);
      }
export type AddResourceCreateResourceMutationHookResult = ReturnType<typeof useAddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationResult = ApolloReactCommon.MutationResult<AddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;


export interface AddResourceCreateResourceMutationOperation {
  operationName: 'addResourceCreateResource'
  result: AddResourceCreateResourceMutation
  variables: AddResourceCreateResourceMutationVariables
  type: 'mutation'
}
