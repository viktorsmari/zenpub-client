import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UpdateCommunityMutationVariables = {
  community: Types.CommunityUpdateInput,
  communityId: Types.Scalars['String']
};


export type UpdateCommunityMutation = (
  { __typename: 'RootMutationType' }
  & { updateCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id' | 'name' | 'summary' | 'icon' | 'updatedAt'>
  )> }
);


export const UpdateCommunityDocument = gql`
    mutation updateCommunity($community: CommunityUpdateInput!, $communityId: String!) {
  updateCommunity(communityId: $communityId, community: $community) {
    id
    name
    summary
    icon
    updatedAt
  }
}
    `;
export type UpdateCommunityMutationFn = ApolloReactCommon.MutationFunction<UpdateCommunityMutation, UpdateCommunityMutationVariables>;
export type UpdateCommunityComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCommunityMutation, UpdateCommunityMutationVariables>, 'mutation'>;

    export const UpdateCommunityComponent = (props: UpdateCommunityComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCommunityMutation, UpdateCommunityMutationVariables> mutation={UpdateCommunityDocument} {...props} />
    );
    
export type UpdateCommunityProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateCommunityMutation, UpdateCommunityMutationVariables> & TChildProps;
export function withUpdateCommunity<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCommunityMutation,
  UpdateCommunityMutationVariables,
  UpdateCommunityProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCommunityMutation, UpdateCommunityMutationVariables, UpdateCommunityProps<TChildProps>>(UpdateCommunityDocument, {
      alias: 'updateCommunity',
      ...operationOptions
    });
};

/**
 * __useUpdateCommunityMutation__
 *
 * To run a mutation, you first call `useUpdateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommunityMutation, { data, loading, error }] = useUpdateCommunityMutation({
 *   variables: {
 *      community: // value for 'community'
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useUpdateCommunityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCommunityMutation, UpdateCommunityMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCommunityMutation, UpdateCommunityMutationVariables>(UpdateCommunityDocument, baseOptions);
      }
export type UpdateCommunityMutationHookResult = ReturnType<typeof useUpdateCommunityMutation>;
export type UpdateCommunityMutationResult = ApolloReactCommon.MutationResult<UpdateCommunityMutation>;
export type UpdateCommunityMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCommunityMutation, UpdateCommunityMutationVariables>;


export interface UpdateCommunityMutationOperation {
  operationName: 'updateCommunity'
  result: UpdateCommunityMutation
  variables: UpdateCommunityMutationVariables
  type: 'mutation'
}
