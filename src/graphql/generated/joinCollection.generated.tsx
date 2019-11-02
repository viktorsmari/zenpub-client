import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type JoinCollectionMutationMutationVariables = {
  collectionId: Types.Scalars['Int'];
};

export type JoinCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'followCollection'>;

export const JoinCollectionMutationDocument = gql`
  mutation joinCollectionMutation($collectionId: Int!) {
    followCollection(collectionLocalId: $collectionId)
  }
`;
export type JoinCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
>;
export type JoinCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const JoinCollectionMutationComponent = (
  props: JoinCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >
    mutation={JoinCollectionMutationDocument}
    {...props}
  />
);

export type JoinCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
> &
  TChildProps;
export function withJoinCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables,
    JoinCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables,
    JoinCollectionMutationProps<TChildProps>
  >(JoinCollectionMutationDocument, {
    alias: 'joinCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useJoinCollectionMutationMutation__
 *
 * To run a mutation, you first call `useJoinCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinCollectionMutationMutation, { data, loading, error }] = useJoinCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useJoinCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    JoinCollectionMutationMutation,
    JoinCollectionMutationMutationVariables
  >(JoinCollectionMutationDocument, baseOptions);
}
export type JoinCollectionMutationMutationHookResult = ReturnType<
  typeof useJoinCollectionMutationMutation
>;
export type JoinCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  JoinCollectionMutationMutation
>;
export type JoinCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  JoinCollectionMutationMutation,
  JoinCollectionMutationMutationVariables
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
