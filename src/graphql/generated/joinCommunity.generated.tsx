import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type JoinCommunityMutationMutationVariables = {
  communityId: Types.Scalars['Int'];
};

export type JoinCommunityMutationMutation = {
  __typename?: 'RootMutationType';
} & Pick<Types.RootMutationType, 'joinCommunity'>;

export const JoinCommunityMutationDocument = gql`
  mutation joinCommunityMutation($communityId: Int!) {
    joinCommunity(communityLocalId: $communityId)
  }
`;
export type JoinCommunityMutationMutationFn = ApolloReactCommon.MutationFunction<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
>;
export type JoinCommunityMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >,
  'mutation'
>;

export const JoinCommunityMutationComponent = (
  props: JoinCommunityMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >
    mutation={JoinCommunityMutationDocument}
    {...props}
  />
);

export type JoinCommunityMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
> &
  TChildProps;
export function withJoinCommunityMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables,
    JoinCommunityMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables,
    JoinCommunityMutationProps<TChildProps>
  >(JoinCommunityMutationDocument, {
    alias: 'joinCommunityMutation',
    ...operationOptions
  });
}

/**
 * __useJoinCommunityMutationMutation__
 *
 * To run a mutation, you first call `useJoinCommunityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinCommunityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinCommunityMutationMutation, { data, loading, error }] = useJoinCommunityMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useJoinCommunityMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    JoinCommunityMutationMutation,
    JoinCommunityMutationMutationVariables
  >(JoinCommunityMutationDocument, baseOptions);
}
export type JoinCommunityMutationMutationHookResult = ReturnType<
  typeof useJoinCommunityMutationMutation
>;
export type JoinCommunityMutationMutationResult = ApolloReactCommon.MutationResult<
  JoinCommunityMutationMutation
>;
export type JoinCommunityMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  JoinCommunityMutationMutation,
  JoinCommunityMutationMutationVariables
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
