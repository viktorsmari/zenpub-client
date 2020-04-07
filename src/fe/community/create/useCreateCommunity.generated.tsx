import * as Types from '../../../graphql/types.generated';

import { CommunityPageDataFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import gql from 'graphql-tag';
import { CommunityPageDataFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CreateCommunityMutationVariables = {
  community: Types.CommunityInput
};


export type CreateCommunityMutation = (
  { __typename: 'RootMutationType' }
  & { createCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & CommunityPageDataFragment
  )> }
);


export const CreateCommunityDocument = gql`
    mutation createCommunity($community: CommunityInput!) {
  createCommunity(community: $community) {
    ...CommunityPageData
  }
}
    ${CommunityPageDataFragmentDoc}`;
export type CreateCommunityMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityMutation, CreateCommunityMutationVariables>;
export type CreateCommunityComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommunityMutation, CreateCommunityMutationVariables>, 'mutation'>;

    export const CreateCommunityComponent = (props: CreateCommunityComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommunityMutation, CreateCommunityMutationVariables> mutation={CreateCommunityDocument} {...props} />
    );
    
export type CreateCommunityProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCommunityMutation, CreateCommunityMutationVariables> & TChildProps;
export function withCreateCommunity<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCommunityMutation,
  CreateCommunityMutationVariables,
  CreateCommunityProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCommunityMutation, CreateCommunityMutationVariables, CreateCommunityProps<TChildProps>>(CreateCommunityDocument, {
      alias: 'createCommunity',
      ...operationOptions
    });
};

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      community: // value for 'community'
 *   },
 * });
 */
export function useCreateCommunityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommunityMutation, CreateCommunityMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCommunityMutation, CreateCommunityMutationVariables>(CreateCommunityDocument, baseOptions);
      }
export type CreateCommunityMutationHookResult = ReturnType<typeof useCreateCommunityMutation>;
export type CreateCommunityMutationResult = ApolloReactCommon.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommunityMutation, CreateCommunityMutationVariables>;


export interface CreateCommunityMutationOperation {
  operationName: 'createCommunity'
  result: CreateCommunityMutation
  variables: CreateCommunityMutationVariables
  type: 'mutation'
}
