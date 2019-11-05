import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UndoLikeCommentMutationMutationVariables = {
  localId: Types.Scalars['Int'];
};

export type UndoLikeCommentMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'undoLikeComment'>;

export const UndoLikeCommentMutationDocument = gql`
  mutation undoLikeCommentMutation($localId: Int!) {
    undoLikeComment(localId: $localId)
  }
`;
export type UndoLikeCommentMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
>;
export type UndoLikeCommentMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >,
  'mutation'
>;

export const UndoLikeCommentMutationComponent = (
  props: UndoLikeCommentMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >
    mutation={UndoLikeCommentMutationDocument}
    {...props}
  />
);

export type UndoLikeCommentMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
> &
  TChildProps;
export function withUndoLikeCommentMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables,
    UndoLikeCommentMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables,
    UndoLikeCommentMutationProps<TChildProps>
  >(UndoLikeCommentMutationDocument, {
    alias: 'undoLikeCommentMutation',
    ...operationOptions
  });
}

/**
 * __useUndoLikeCommentMutationMutation__
 *
 * To run a mutation, you first call `useUndoLikeCommentMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoLikeCommentMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoLikeCommentMutationMutation, { data, loading, error }] = useUndoLikeCommentMutationMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *   },
 * });
 */
export function useUndoLikeCommentMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoLikeCommentMutationMutation,
    UndoLikeCommentMutationMutationVariables
  >(UndoLikeCommentMutationDocument, baseOptions);
}
export type UndoLikeCommentMutationMutationHookResult = ReturnType<
  typeof useUndoLikeCommentMutationMutation
>;
export type UndoLikeCommentMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoLikeCommentMutationMutation
>;
export type UndoLikeCommentMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoLikeCommentMutationMutation,
  UndoLikeCommentMutationMutationVariables
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
