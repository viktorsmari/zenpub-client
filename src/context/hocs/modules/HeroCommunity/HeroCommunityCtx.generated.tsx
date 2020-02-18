import * as Types from '../../../../graphql/types.generated';

import { HeroCommunityMeDataFragment } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import { HeroCommunityDataFragment } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import { HeroCommunityMeDataFragmentDoc } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type HeroCommunityQueryVariables = {
  communityId: Types.Scalars['String']
};


export type HeroCommunityQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & HeroCommunityDataFragment
  )> }
);

export type HeroCommunityMeQueryVariables = {};


export type HeroCommunityMeQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & HeroCommunityMeDataFragment
  )> }
);

export type HeroCommunityUnjoinMutationVariables = {
  contextId: Types.Scalars['String']
};


export type HeroCommunityUnjoinMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | (
    { __typename: 'Follow' }
    & { context: Types.Maybe<{ __typename: 'Collection' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Thread' } | { __typename: 'User' }> }
  ) | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export type HeroCommunityJoinMutationVariables = {
  contextId: Types.Scalars['String']
};


export type HeroCommunityJoinMutation = (
  { __typename: 'RootMutationType' }
  & { createFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & { context: Types.Maybe<{ __typename: 'Collection' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Thread' } | { __typename: 'User' }> }
  )> }
);


export const HeroCommunityDocument = gql`
    query heroCommunity($communityId: String!) {
  community(communityId: $communityId) {
    ...HeroCommunityData
  }
}
    ${HeroCommunityDataFragmentDoc}`;
export type HeroCommunityComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroCommunityQuery, HeroCommunityQueryVariables>, 'query'> & ({ variables: HeroCommunityQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const HeroCommunityComponent = (props: HeroCommunityComponentProps) => (
      <ApolloReactComponents.Query<HeroCommunityQuery, HeroCommunityQueryVariables> query={HeroCommunityDocument} {...props} />
    );
    
export type HeroCommunityProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroCommunityQuery, HeroCommunityQueryVariables> & TChildProps;
export function withHeroCommunity<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCommunityQuery,
  HeroCommunityQueryVariables,
  HeroCommunityProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroCommunityQuery, HeroCommunityQueryVariables, HeroCommunityProps<TChildProps>>(HeroCommunityDocument, {
      alias: 'heroCommunity',
      ...operationOptions
    });
};

/**
 * __useHeroCommunityQuery__
 *
 * To run a query within a React component, call `useHeroCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroCommunityQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useHeroCommunityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroCommunityQuery, HeroCommunityQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroCommunityQuery, HeroCommunityQueryVariables>(HeroCommunityDocument, baseOptions);
      }
export function useHeroCommunityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroCommunityQuery, HeroCommunityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroCommunityQuery, HeroCommunityQueryVariables>(HeroCommunityDocument, baseOptions);
        }
export type HeroCommunityQueryHookResult = ReturnType<typeof useHeroCommunityQuery>;
export type HeroCommunityLazyQueryHookResult = ReturnType<typeof useHeroCommunityLazyQuery>;
export type HeroCommunityQueryResult = ApolloReactCommon.QueryResult<HeroCommunityQuery, HeroCommunityQueryVariables>;
export const HeroCommunityMeDocument = gql`
    query heroCommunityMe {
  me {
    ...HeroCommunityMeData
  }
}
    ${HeroCommunityMeDataFragmentDoc}`;
export type HeroCommunityMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>, 'query'>;

    export const HeroCommunityMeComponent = (props: HeroCommunityMeComponentProps) => (
      <ApolloReactComponents.Query<HeroCommunityMeQuery, HeroCommunityMeQueryVariables> query={HeroCommunityMeDocument} {...props} />
    );
    
export type HeroCommunityMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroCommunityMeQuery, HeroCommunityMeQueryVariables> & TChildProps;
export function withHeroCommunityMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCommunityMeQuery,
  HeroCommunityMeQueryVariables,
  HeroCommunityMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroCommunityMeQuery, HeroCommunityMeQueryVariables, HeroCommunityMeProps<TChildProps>>(HeroCommunityMeDocument, {
      alias: 'heroCommunityMe',
      ...operationOptions
    });
};

/**
 * __useHeroCommunityMeQuery__
 *
 * To run a query within a React component, call `useHeroCommunityMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroCommunityMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroCommunityMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroCommunityMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>(HeroCommunityMeDocument, baseOptions);
      }
export function useHeroCommunityMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>(HeroCommunityMeDocument, baseOptions);
        }
export type HeroCommunityMeQueryHookResult = ReturnType<typeof useHeroCommunityMeQuery>;
export type HeroCommunityMeLazyQueryHookResult = ReturnType<typeof useHeroCommunityMeLazyQuery>;
export type HeroCommunityMeQueryResult = ApolloReactCommon.QueryResult<HeroCommunityMeQuery, HeroCommunityMeQueryVariables>;
export const HeroCommunityUnjoinDocument = gql`
    mutation heroCommunityUnjoin($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Follow {
      context {
        ... on Community {
          id
          myFollow {
            id
          }
        }
      }
    }
  }
}
    `;
export type HeroCommunityUnjoinMutationFn = ApolloReactCommon.MutationFunction<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables>;
export type HeroCommunityUnjoinComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables>, 'mutation'>;

    export const HeroCommunityUnjoinComponent = (props: HeroCommunityUnjoinComponentProps) => (
      <ApolloReactComponents.Mutation<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables> mutation={HeroCommunityUnjoinDocument} {...props} />
    );
    
export type HeroCommunityUnjoinProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables> & TChildProps;
export function withHeroCommunityUnjoin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCommunityUnjoinMutation,
  HeroCommunityUnjoinMutationVariables,
  HeroCommunityUnjoinProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables, HeroCommunityUnjoinProps<TChildProps>>(HeroCommunityUnjoinDocument, {
      alias: 'heroCommunityUnjoin',
      ...operationOptions
    });
};

/**
 * __useHeroCommunityUnjoinMutation__
 *
 * To run a mutation, you first call `useHeroCommunityUnjoinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroCommunityUnjoinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroCommunityUnjoinMutation, { data, loading, error }] = useHeroCommunityUnjoinMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useHeroCommunityUnjoinMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables>(HeroCommunityUnjoinDocument, baseOptions);
      }
export type HeroCommunityUnjoinMutationHookResult = ReturnType<typeof useHeroCommunityUnjoinMutation>;
export type HeroCommunityUnjoinMutationResult = ApolloReactCommon.MutationResult<HeroCommunityUnjoinMutation>;
export type HeroCommunityUnjoinMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroCommunityUnjoinMutation, HeroCommunityUnjoinMutationVariables>;
export const HeroCommunityJoinDocument = gql`
    mutation heroCommunityJoin($contextId: String!) {
  createFollow(contextId: $contextId) {
    context {
      ... on Community {
        id
        myFollow {
          id
        }
      }
    }
  }
}
    `;
export type HeroCommunityJoinMutationFn = ApolloReactCommon.MutationFunction<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables>;
export type HeroCommunityJoinComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables>, 'mutation'>;

    export const HeroCommunityJoinComponent = (props: HeroCommunityJoinComponentProps) => (
      <ApolloReactComponents.Mutation<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables> mutation={HeroCommunityJoinDocument} {...props} />
    );
    
export type HeroCommunityJoinProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables> & TChildProps;
export function withHeroCommunityJoin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCommunityJoinMutation,
  HeroCommunityJoinMutationVariables,
  HeroCommunityJoinProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables, HeroCommunityJoinProps<TChildProps>>(HeroCommunityJoinDocument, {
      alias: 'heroCommunityJoin',
      ...operationOptions
    });
};

/**
 * __useHeroCommunityJoinMutation__
 *
 * To run a mutation, you first call `useHeroCommunityJoinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroCommunityJoinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroCommunityJoinMutation, { data, loading, error }] = useHeroCommunityJoinMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useHeroCommunityJoinMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables>(HeroCommunityJoinDocument, baseOptions);
      }
export type HeroCommunityJoinMutationHookResult = ReturnType<typeof useHeroCommunityJoinMutation>;
export type HeroCommunityJoinMutationResult = ApolloReactCommon.MutationResult<HeroCommunityJoinMutation>;
export type HeroCommunityJoinMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroCommunityJoinMutation, HeroCommunityJoinMutationVariables>;


export interface HeroCommunityQueryOperation {
  operationName: 'heroCommunity'
  result: HeroCommunityQuery
  variables: HeroCommunityQueryVariables
  type: 'query'
}


export interface HeroCommunityMeQueryOperation {
  operationName: 'heroCommunityMe'
  result: HeroCommunityMeQuery
  variables: HeroCommunityMeQueryVariables
  type: 'query'
}


export interface HeroCommunityUnjoinMutationOperation {
  operationName: 'heroCommunityUnjoin'
  result: HeroCommunityUnjoinMutation
  variables: HeroCommunityUnjoinMutationVariables
  type: 'mutation'
}


export interface HeroCommunityJoinMutationOperation {
  operationName: 'heroCommunityJoin'
  result: HeroCommunityJoinMutation
  variables: HeroCommunityJoinMutationVariables
  type: 'mutation'
}
