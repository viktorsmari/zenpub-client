import * as Types from './types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UpdateResourceMutationMutationVariables = {
  resource: Types.ResourceInput,
  resourceId: Types.Scalars['String']
};


export type UpdateResourceMutationMutation = (
  { __typename: 'RootMutationType' }
  & { updateResource: Types.Maybe<(
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id' | 'name' | 'summary' | 'url' | 'license' | 'icon' | 'createdAt' | 'updatedAt'>
  )> }
);


export const UpdateResourceMutationDocument = gql`
    mutation updateResourceMutation($resource: ResourceInput!, $resourceId: String!) {
  updateResource(resource: $resource, resourceId: $resourceId) {
    id
    name
    summary
    url
    license
    icon
    createdAt
    updatedAt
  }
}
    `;
export type UpdateResourceMutationMutationFn = ApolloReactCommon.MutationFunction<UpdateResourceMutationMutation, UpdateResourceMutationMutationVariables>;

/**
 * __useUpdateResourceMutationMutation__
 *
 * To run a mutation, you first call `useUpdateResourceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResourceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResourceMutationMutation, { data, loading, error }] = useUpdateResourceMutationMutation({
 *   variables: {
 *      resource: // value for 'resource'
 *      resourceId: // value for 'resourceId'
 *   },
 * });
 */
export function useUpdateResourceMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateResourceMutationMutation, UpdateResourceMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateResourceMutationMutation, UpdateResourceMutationMutationVariables>(UpdateResourceMutationDocument, baseOptions);
      }
export type UpdateResourceMutationMutationHookResult = ReturnType<typeof useUpdateResourceMutationMutation>;
export type UpdateResourceMutationMutationResult = ApolloReactCommon.MutationResult<UpdateResourceMutationMutation>;
export type UpdateResourceMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateResourceMutationMutation, UpdateResourceMutationMutationVariables>;


export interface UpdateResourceMutationMutationOperation {
  operationName: 'updateResourceMutation'
  result: UpdateResourceMutationMutation
  variables: UpdateResourceMutationMutationVariables
  type: 'mutation'
}
export const UpdateResourceMutationMutationName:UpdateResourceMutationMutationOperation['operationName'] = 'updateResourceMutation'
