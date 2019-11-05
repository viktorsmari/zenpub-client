import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UndoJoinCommunityMutationMutationVariables = {
  communityId: Types.Scalars['Int'];
};

export type UndoJoinCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'undoJoinCommunity'>;

export const UndoJoinCommunityMutationDocument = gql`
  mutation undoJoinCommunityMutation($communityId: Int!) {
    undoJoinCommunity(communityLocalId: $communityId)
  }
`;
export type UndoJoinCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
>;
export type UndoJoinCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const UndoJoinCommunityMutationComponent = (
  props: UndoJoinCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >
    mutation={UndoJoinCommunityMutationDocument}
    {...props}
  />
);

export type UndoJoinCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
> &
  TChildProps;
export function withUndoJoinCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables,
    UndoJoinCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables,
    UndoJoinCommunityMutationProps<TChildProps>
  >(UndoJoinCommunityMutationDocument, {
    alias: 'undoJoinCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useUndoJoinCommunityMutationMutation__
 *
 * To run a mutation, you first call `useUndoJoinCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndoJoinCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undoJoinCommunityMutationMutation, { data, loading, error }] = useUndoJoinCommunityMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useUndoJoinCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UndoJoinCommunityMutationMutation,
    UndoJoinCommunityMutationMutationVariables
  >(UndoJoinCommunityMutationDocument, baseOptions);
}
export type UndoJoinCommunityMutationMutationHookResult = ReturnType<
  typeof useUndoJoinCommunityMutationMutation
>;
export type UndoJoinCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  UndoJoinCommunityMutationMutation
>;
export type UndoJoinCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoJoinCommunityMutationMutation,
  UndoJoinCommunityMutationMutationVariables
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
