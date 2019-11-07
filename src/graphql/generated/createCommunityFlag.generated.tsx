import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCommunityFlagMutationVariables = {
  localId: Types.Scalars['Int'];
  reason: Types.Scalars['String'];
};

export type CreateCommunityFlagMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'flagCommunity'>;

export const CreateCommunityFlagDocument = gql`
  mutation createCommunityFlag($localId: Int!, $reason: String!) {
    flagCommunity(localId: $localId, reason: $reason)
  }
`;
export type CreateCommunityFlagMutationFn = ApolloReactCommon.MutationFunction<
  CreateCommunityFlagMutation,
  CreateCommunityFlagMutationVariables
>;
export type CreateCommunityFlagComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables
  >,
  'mutation'
>;

export const CreateCommunityFlagComponent = (
  props: CreateCommunityFlagComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables
  >
    mutation={CreateCommunityFlagDocument}
    {...props}
  />
);

export type CreateCommunityFlagProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCommunityFlagMutation,
  CreateCommunityFlagMutationVariables
> &
  TChildProps;
export function withCreateCommunityFlag<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables,
    CreateCommunityFlagProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables,
    CreateCommunityFlagProps<TChildProps>
  >(CreateCommunityFlagDocument, {
    alias: 'createCommunityFlag',
    ...operationOptions
  });
}

/**
 * __useCreateCommunityFlagMutation__
 *
 * To run a mutation, you first call `useCreateCommunityFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityFlagMutation, { data, loading, error }] = useCreateCommunityFlagMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useCreateCommunityFlagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCommunityFlagMutation,
    CreateCommunityFlagMutationVariables
  >(CreateCommunityFlagDocument, baseOptions);
}
export type CreateCommunityFlagMutationHookResult = ReturnType<
  typeof useCreateCommunityFlagMutation
>;
export type CreateCommunityFlagMutationResult = ApolloReactCommon.MutationResult<
  CreateCommunityFlagMutation
>;
export type CreateCommunityFlagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCommunityFlagMutation,
  CreateCommunityFlagMutationVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
