import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type FollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & { context: (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'Thread' }
      & Pick<Types.Thread, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'User' }
      & Pick<Types.User, 'followerCount'>
      & { userId: Types.User['id'] }
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) }
  )> }
);

export type UnfollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type UnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | (
    { __typename: 'Follow' }
    & { context: (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'Thread' }
      & Pick<Types.Thread, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'User' }
      & Pick<Types.User, 'followerCount'>
      & { userId: Types.User['id'] }
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) }
  ) | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);


export const FollowDocument = gql`
    mutation follow($contextId: String!) {
  createFollow(contextId: $contextId) {
    context {
      ... on Collection {
        id
        myFollow {
          id
        }
        followerCount
      }
      ... on Community {
        id
        myFollow {
          id
        }
        followerCount
      }
      ... on Thread {
        id
        myFollow {
          id
        }
        followerCount
      }
      ... on User {
        userId: id
        myFollow {
          id
        }
        followerCount
      }
    }
  }
}
    `;
export type FollowMutationFn = ApolloReactCommon.MutationFunction<FollowMutation, FollowMutationVariables>;
export type FollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<FollowMutation, FollowMutationVariables>, 'mutation'>;

    export const FollowComponent = (props: FollowComponentProps) => (
      <ApolloReactComponents.Mutation<FollowMutation, FollowMutationVariables> mutation={FollowDocument} {...props} />
    );
    
export type FollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<FollowMutation, FollowMutationVariables> & TChildProps;
export function withFollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FollowMutation,
  FollowMutationVariables,
  FollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, FollowMutation, FollowMutationVariables, FollowProps<TChildProps>>(FollowDocument, {
      alias: 'follow',
      ...operationOptions
    });
};

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        return ApolloReactHooks.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, baseOptions);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = ApolloReactCommon.MutationResult<FollowMutation>;
export type FollowMutationOptions = ApolloReactCommon.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UnfollowDocument = gql`
    mutation unfollow($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Follow {
      context {
        ... on Collection {
          id
          myFollow {
            id
          }
          followerCount
        }
        ... on Community {
          id
          myFollow {
            id
          }
          followerCount
        }
        ... on Thread {
          id
          myFollow {
            id
          }
          followerCount
        }
        ... on User {
          userId: id
          myFollow {
            id
          }
          followerCount
        }
      }
    }
  }
}
    `;
export type UnfollowMutationFn = ApolloReactCommon.MutationFunction<UnfollowMutation, UnfollowMutationVariables>;
export type UnfollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UnfollowMutation, UnfollowMutationVariables>, 'mutation'>;

    export const UnfollowComponent = (props: UnfollowComponentProps) => (
      <ApolloReactComponents.Mutation<UnfollowMutation, UnfollowMutationVariables> mutation={UnfollowDocument} {...props} />
    );
    
export type UnfollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UnfollowMutation, UnfollowMutationVariables> & TChildProps;
export function withUnfollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UnfollowMutation,
  UnfollowMutationVariables,
  UnfollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UnfollowMutation, UnfollowMutationVariables, UnfollowProps<TChildProps>>(UnfollowDocument, {
      alias: 'unfollow',
      ...operationOptions
    });
};

/**
 * __useUnfollowMutation__
 *
 * To run a mutation, you first call `useUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowMutation, { data, loading, error }] = useUnfollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnfollowMutation, UnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, baseOptions);
      }
export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = ApolloReactCommon.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;


export interface FollowMutationOperation {
  operationName: 'follow'
  result: FollowMutation
  variables: FollowMutationVariables
  type: 'mutation'
}


export interface UnfollowMutationOperation {
  operationName: 'unfollow'
  result: UnfollowMutation
  variables: UnfollowMutationVariables
  type: 'mutation'
}
