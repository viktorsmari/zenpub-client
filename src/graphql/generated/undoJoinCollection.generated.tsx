import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UndoJoinCollectionMutationMutationVariables = {
  collectionId: Types.Scalars['Int'];
};

export type UndoJoinCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'undoFollowCollection'>;

export const UndoJoinCollectionMutationDocument = gql`
  mutation undoJoinCollectionMutation($collectionId: Int!) {
    undoFollowCollection(collectionLocalId: $collectionId)
  }
`;
export type UndoJoinCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
>;
export type UndoJoinCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const UndoJoinCollectionMutationComponent = (
  props: UndoJoinCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >
    mutation={UndoJoinCollectionMutationDocument}
    {...props}
  />
);

export type UndoJoinCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
> &
  TChildProps;
export function withUndoJoinCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables,
    UndoJoinCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables,
    UndoJoinCollectionMutationProps<TChildProps>
  >(UndoJoinCollectionMutationDocument, {
    alias: 'undoJoinCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useUndoJoinCollectionMutationMutation__
 *
 * To run a mutation, you first call `useUndoJoinCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoJoinCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoJoinCollectionMutationMutation, { data, loading, error }] = useUndoJoinCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useUndoJoinCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoJoinCollectionMutationMutation,
    UndoJoinCollectionMutationMutationVariables
  >(UndoJoinCollectionMutationDocument, baseOptions);
}
export type UndoJoinCollectionMutationMutationHookResult = ReturnType<
  typeof useUndoJoinCollectionMutationMutation
>;
export type UndoJoinCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoJoinCollectionMutationMutation
>;
export type UndoJoinCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoJoinCollectionMutationMutation,
  UndoJoinCollectionMutationMutationVariables
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
