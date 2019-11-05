import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type LikeCommentMutationMutationVariables = {
  localId: Types.Scalars['Int'];
};

export type LikeCommentMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'likeComment'>;

export const LikeCommentMutationDocument = gql`
  mutation likeCommentMutation($localId: Int!) {
    likeComment(localId: $localId)
  }
`;
export type LikeCommentMutationMutationFn = ApolloReactCommon.MutationFunction<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
>;
export type LikeCommentMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >,
  'mutation'
>;

export const LikeCommentMutationComponent = (
  props: LikeCommentMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >
    mutation={LikeCommentMutationDocument}
    {...props}
  />
);

export type LikeCommentMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
> &
  TChildProps;
export function withLikeCommentMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables,
    LikeCommentMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables,
    LikeCommentMutationProps<TChildProps>
  >(LikeCommentMutationDocument, {
    alias: 'likeCommentMutation',
    ...operationOptions
  });
}

/**
 * __useLikeCommentMutationMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutationMutation, { data, loading, error }] = useLikeCommentMutationMutation({
 *   variables: {
 *      localId: // value for 'localId'
 *   },
 * });
 */
export function useLikeCommentMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LikeCommentMutationMutation,
    LikeCommentMutationMutationVariables
  >(LikeCommentMutationDocument, baseOptions);
}
export type LikeCommentMutationMutationHookResult = ReturnType<
  typeof useLikeCommentMutationMutation
>;
export type LikeCommentMutationMutationResult = ApolloReactCommon.MutationResult<
  LikeCommentMutationMutation
>;
export type LikeCommentMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LikeCommentMutationMutation,
  LikeCommentMutationMutationVariables
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
