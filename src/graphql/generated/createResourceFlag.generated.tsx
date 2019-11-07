import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateResourceFlagMutationVariables = {
  localId: Types.Scalars['Int'];
  reason: Types.Scalars['String'];
};

export type CreateResourceFlagMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'flagResource'>;

export const CreateResourceFlagDocument = gql`
  mutation createResourceFlag($localId: Int!, $reason: String!) {
    flagResource(localId: $localId, reason: $reason)
  }
`;
export type CreateResourceFlagMutationFn = ApolloReactCommon.MutationFunction<
  CreateResourceFlagMutation,
  CreateResourceFlagMutationVariables
>;
export type CreateResourceFlagComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables
  >,
  'mutation'
>;

export const CreateResourceFlagComponent = (
  props: CreateResourceFlagComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables
  >
    mutation={CreateResourceFlagDocument}
    {...props}
  />
);

export type CreateResourceFlagProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateResourceFlagMutation,
  CreateResourceFlagMutationVariables
> &
  TChildProps;
export function withCreateResourceFlag<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables,
    CreateResourceFlagProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables,
    CreateResourceFlagProps<TChildProps>
  >(CreateResourceFlagDocument, {
    alias: 'createResourceFlag',
    ...operationOptions
  });
}

/**
 * __useCreateResourceFlagMutation__
 *
 * To run a mutation, you first call `useCreateResourceFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResourceFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResourceFlagMutation, { data, loading, error }] = useCreateResourceFlagMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useCreateResourceFlagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateResourceFlagMutation,
    CreateResourceFlagMutationVariables
  >(CreateResourceFlagDocument, baseOptions);
}
export type CreateResourceFlagMutationHookResult = ReturnType<
  typeof useCreateResourceFlagMutation
>;
export type CreateResourceFlagMutationResult = ApolloReactCommon.MutationResult<
  CreateResourceFlagMutation
>;
export type CreateResourceFlagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateResourceFlagMutation,
  CreateResourceFlagMutationVariables
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
