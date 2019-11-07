import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCommentFlagMutationVariables = {
  localId: Types.Scalars['Int'];
  reason: Types.Scalars['String'];
};

export type CreateCommentFlagMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'flagComment'>;

export const CreateCommentFlagDocument = gql`
  mutation createCommentFlag($localId: Int!, $reason: String!) {
    flagComment(localId: $localId, reason: $reason)
  }
`;
export type CreateCommentFlagMutationFn = ApolloReactCommon.MutationFunction<
  CreateCommentFlagMutation,
  CreateCommentFlagMutationVariables
>;
export type CreateCommentFlagComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables
  >,
  'mutation'
>;

export const CreateCommentFlagComponent = (
  props: CreateCommentFlagComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables
  >
    mutation={CreateCommentFlagDocument}
    {...props}
  />
);

export type CreateCommentFlagProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCommentFlagMutation,
  CreateCommentFlagMutationVariables
> &
  TChildProps;
export function withCreateCommentFlag<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables,
    CreateCommentFlagProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables,
    CreateCommentFlagProps<TChildProps>
  >(CreateCommentFlagDocument, {
    alias: 'createCommentFlag',
    ...operationOptions
  });
}

/**
 * __useCreateCommentFlagMutation__
 *
 * To run a mutation, you first call `useCreateCommentFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentFlagMutation, { data, loading, error }] = useCreateCommentFlagMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useCreateCommentFlagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCommentFlagMutation,
    CreateCommentFlagMutationVariables
  >(CreateCommentFlagDocument, baseOptions);
}
export type CreateCommentFlagMutationHookResult = ReturnType<
  typeof useCreateCommentFlagMutation
>;
export type CreateCommentFlagMutationResult = ApolloReactCommon.MutationResult<
  CreateCommentFlagMutation
>;
export type CreateCommentFlagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCommentFlagMutation,
  CreateCommentFlagMutationVariables
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
