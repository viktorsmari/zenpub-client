import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCollectionFlagMutationVariables = {
  localId: Types.Scalars['Int'];
  reason: Types.Scalars['String'];
};

export type CreateCollectionFlagMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'flagCollection'>;

export const CreateCollectionFlagDocument = gql`
  mutation createCollectionFlag($localId: Int!, $reason: String!) {
    flagCollection(localId: $localId, reason: $reason)
  }
`;
export type CreateCollectionFlagMutationFn = ApolloReactCommon.MutationFunction<
  CreateCollectionFlagMutation,
  CreateCollectionFlagMutationVariables
>;
export type CreateCollectionFlagComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables
  >,
  'mutation'
>;

export const CreateCollectionFlagComponent = (
  props: CreateCollectionFlagComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables
  >
    mutation={CreateCollectionFlagDocument}
    {...props}
  />
);

export type CreateCollectionFlagProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCollectionFlagMutation,
  CreateCollectionFlagMutationVariables
> &
  TChildProps;
export function withCreateCollectionFlag<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables,
    CreateCollectionFlagProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables,
    CreateCollectionFlagProps<TChildProps>
  >(CreateCollectionFlagDocument, {
    alias: 'createCollectionFlag',
    ...operationOptions
  });
}

/**
 * __useCreateCollectionFlagMutation__
 *
 * To run a mutation, you first call `useCreateCollectionFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionFlagMutation, { data, loading, error }] = useCreateCollectionFlagMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useCreateCollectionFlagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCollectionFlagMutation,
    CreateCollectionFlagMutationVariables
  >(CreateCollectionFlagDocument, baseOptions);
}
export type CreateCollectionFlagMutationHookResult = ReturnType<
  typeof useCreateCollectionFlagMutation
>;
export type CreateCollectionFlagMutationResult = ApolloReactCommon.MutationResult<
  CreateCollectionFlagMutation
>;
export type CreateCollectionFlagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCollectionFlagMutation,
  CreateCollectionFlagMutationVariables
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
