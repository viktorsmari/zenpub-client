import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type LikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type LikeMutation = (
  { __typename: 'RootMutationType' }
  & { createLike: Types.Maybe<(
    { __typename: 'Like' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )>, likes: Types.Maybe<(
        { __typename: 'LikesEdges' }
        & Pick<Types.LikesEdges, 'totalCount'>
      )> }
    ) | (
      { __typename: 'User' }
      & Pick<Types.User, 'likerCount'>
      & { userId: Types.User['id'] }
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    )> }
  )> }
);

export type UnlikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type UnlikeMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | { __typename: 'Follow' } | (
    { __typename: 'Like' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )>, likes: Types.Maybe<(
        { __typename: 'LikesEdges' }
        & Pick<Types.LikesEdges, 'totalCount'>
      )> }
    ) | (
      { __typename: 'User' }
      & Pick<Types.User, 'likerCount'>
      & { userId: Types.User['id'] }
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    )> }
  ) | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);


export const LikeDocument = gql`
    mutation like($contextId: String!) {
  createLike(contextId: $contextId) {
    context {
      ... on Collection {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Comment {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Community {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Resource {
        id
        myLike {
          id
        }
        likes {
          totalCount
        }
      }
      ... on User {
        userId: id
        myLike {
          id
        }
        likerCount
      }
    }
  }
}
    `;
export type LikeMutationFn = ApolloReactCommon.MutationFunction<LikeMutation, LikeMutationVariables>;
export type LikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LikeMutation, LikeMutationVariables>, 'mutation'>;

    export const LikeComponent = (props: LikeComponentProps) => (
      <ApolloReactComponents.Mutation<LikeMutation, LikeMutationVariables> mutation={LikeDocument} {...props} />
    );
    
export type LikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LikeMutation, LikeMutationVariables> & TChildProps;
export function withLike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LikeMutation,
  LikeMutationVariables,
  LikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LikeMutation, LikeMutationVariables, LikeProps<TChildProps>>(LikeDocument, {
      alias: 'like',
      ...operationOptions
    });
};

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        return ApolloReactHooks.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = ApolloReactCommon.MutationResult<LikeMutation>;
export type LikeMutationOptions = ApolloReactCommon.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const UnlikeDocument = gql`
    mutation unlike($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Like {
      context {
        ... on Collection {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Comment {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Community {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Resource {
          id
          myLike {
            id
          }
          likes {
            totalCount
          }
        }
        ... on User {
          userId: id
          myLike {
            id
          }
          likerCount
        }
      }
    }
  }
}
    `;
export type UnlikeMutationFn = ApolloReactCommon.MutationFunction<UnlikeMutation, UnlikeMutationVariables>;
export type UnlikeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UnlikeMutation, UnlikeMutationVariables>, 'mutation'>;

    export const UnlikeComponent = (props: UnlikeComponentProps) => (
      <ApolloReactComponents.Mutation<UnlikeMutation, UnlikeMutationVariables> mutation={UnlikeDocument} {...props} />
    );
    
export type UnlikeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UnlikeMutation, UnlikeMutationVariables> & TChildProps;
export function withUnlike<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UnlikeMutation,
  UnlikeMutationVariables,
  UnlikeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UnlikeMutation, UnlikeMutationVariables, UnlikeProps<TChildProps>>(UnlikeDocument, {
      alias: 'unlike',
      ...operationOptions
    });
};

/**
 * __useUnlikeMutation__
 *
 * To run a mutation, you first call `useUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMutation, { data, loading, error }] = useUnlikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useUnlikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnlikeMutation, UnlikeMutationVariables>) {
        return ApolloReactHooks.useMutation<UnlikeMutation, UnlikeMutationVariables>(UnlikeDocument, baseOptions);
      }
export type UnlikeMutationHookResult = ReturnType<typeof useUnlikeMutation>;
export type UnlikeMutationResult = ApolloReactCommon.MutationResult<UnlikeMutation>;
export type UnlikeMutationOptions = ApolloReactCommon.BaseMutationOptions<UnlikeMutation, UnlikeMutationVariables>;


export interface LikeMutationOperation {
  operationName: 'like'
  result: LikeMutation
  variables: LikeMutationVariables
  type: 'mutation'
}


export interface UnlikeMutationOperation {
  operationName: 'unlike'
  result: UnlikeMutation
  variables: UnlikeMutationVariables
  type: 'mutation'
}
