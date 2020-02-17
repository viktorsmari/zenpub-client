import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HeroUserMeQueryVariables = {};


export type HeroUserMeQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & HeroUserMeDataFragment
  )> }
);

export type HeroUserDataQueryVariables = {
  userId: Types.Scalars['String']
};


export type HeroUserDataQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & HeroUserUserDataFragment
  )> }
);

export type HeroUserMeDataFragment = (
  { __typename: 'Me' }
  & Pick<Types.Me, 'isInstanceAdmin'>
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'image' | 'icon' | 'displayUsername' | 'location' | 'summary' | 'name'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export type HeroUserFollowMutationVariables = {
  userId: Types.Scalars['String']
};


export type HeroUserFollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & { context: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Community' } | { __typename: 'Thread' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    )> }
  )> }
);

export type HeroUserUnfollowMutationVariables = {
  userId: Types.Scalars['String']
};


export type HeroUserUnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | (
    { __typename: 'Follow' }
    & { context: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Community' } | { __typename: 'Thread' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    )> }
  ) | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export const HeroUserMeDataFragmentDoc = gql`
    fragment HeroUserMeData on Me {
  isInstanceAdmin
  user {
    id
  }
}
    `;
export const HeroUserUserDataFragmentDoc = gql`
    fragment HeroUserUserData on User {
  id
  image
  icon
  displayUsername
  location
  summary
  name
  myFollow {
    id
  }
}
    `;
export const HeroUserMeDocument = gql`
    query heroUserMe {
  me {
    ...HeroUserMeData
  }
}
    ${HeroUserMeDataFragmentDoc}`;
export type HeroUserMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroUserMeQuery, HeroUserMeQueryVariables>, 'query'>;

    export const HeroUserMeComponent = (props: HeroUserMeComponentProps) => (
      <ApolloReactComponents.Query<HeroUserMeQuery, HeroUserMeQueryVariables> query={HeroUserMeDocument} {...props} />
    );
    
export type HeroUserMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroUserMeQuery, HeroUserMeQueryVariables> & TChildProps;
export function withHeroUserMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroUserMeQuery,
  HeroUserMeQueryVariables,
  HeroUserMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroUserMeQuery, HeroUserMeQueryVariables, HeroUserMeProps<TChildProps>>(HeroUserMeDocument, {
      alias: 'heroUserMe',
      ...operationOptions
    });
};

/**
 * __useHeroUserMeQuery__
 *
 * To run a query within a React component, call `useHeroUserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroUserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroUserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroUserMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroUserMeQuery, HeroUserMeQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroUserMeQuery, HeroUserMeQueryVariables>(HeroUserMeDocument, baseOptions);
      }
export function useHeroUserMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroUserMeQuery, HeroUserMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroUserMeQuery, HeroUserMeQueryVariables>(HeroUserMeDocument, baseOptions);
        }
export type HeroUserMeQueryHookResult = ReturnType<typeof useHeroUserMeQuery>;
export type HeroUserMeLazyQueryHookResult = ReturnType<typeof useHeroUserMeLazyQuery>;
export type HeroUserMeQueryResult = ApolloReactCommon.QueryResult<HeroUserMeQuery, HeroUserMeQueryVariables>;
export const HeroUserDataDocument = gql`
    query heroUserData($userId: String!) {
  user(userId: $userId) {
    ...HeroUserUserData
  }
}
    ${HeroUserUserDataFragmentDoc}`;
export type HeroUserDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroUserDataQuery, HeroUserDataQueryVariables>, 'query'> & ({ variables: HeroUserDataQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const HeroUserDataComponent = (props: HeroUserDataComponentProps) => (
      <ApolloReactComponents.Query<HeroUserDataQuery, HeroUserDataQueryVariables> query={HeroUserDataDocument} {...props} />
    );
    
export type HeroUserDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroUserDataQuery, HeroUserDataQueryVariables> & TChildProps;
export function withHeroUserData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroUserDataQuery,
  HeroUserDataQueryVariables,
  HeroUserDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroUserDataQuery, HeroUserDataQueryVariables, HeroUserDataProps<TChildProps>>(HeroUserDataDocument, {
      alias: 'heroUserData',
      ...operationOptions
    });
};

/**
 * __useHeroUserDataQuery__
 *
 * To run a query within a React component, call `useHeroUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroUserDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHeroUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroUserDataQuery, HeroUserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroUserDataQuery, HeroUserDataQueryVariables>(HeroUserDataDocument, baseOptions);
      }
export function useHeroUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroUserDataQuery, HeroUserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroUserDataQuery, HeroUserDataQueryVariables>(HeroUserDataDocument, baseOptions);
        }
export type HeroUserDataQueryHookResult = ReturnType<typeof useHeroUserDataQuery>;
export type HeroUserDataLazyQueryHookResult = ReturnType<typeof useHeroUserDataLazyQuery>;
export type HeroUserDataQueryResult = ApolloReactCommon.QueryResult<HeroUserDataQuery, HeroUserDataQueryVariables>;
export const HeroUserFollowDocument = gql`
    mutation heroUserFollow($userId: String!) {
  createFollow(contextId: $userId) {
    context {
      ... on User {
        id
        myFollow {
          id
        }
      }
    }
  }
}
    `;
export type HeroUserFollowMutationFn = ApolloReactCommon.MutationFunction<HeroUserFollowMutation, HeroUserFollowMutationVariables>;
export type HeroUserFollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroUserFollowMutation, HeroUserFollowMutationVariables>, 'mutation'>;

    export const HeroUserFollowComponent = (props: HeroUserFollowComponentProps) => (
      <ApolloReactComponents.Mutation<HeroUserFollowMutation, HeroUserFollowMutationVariables> mutation={HeroUserFollowDocument} {...props} />
    );
    
export type HeroUserFollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroUserFollowMutation, HeroUserFollowMutationVariables> & TChildProps;
export function withHeroUserFollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroUserFollowMutation,
  HeroUserFollowMutationVariables,
  HeroUserFollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroUserFollowMutation, HeroUserFollowMutationVariables, HeroUserFollowProps<TChildProps>>(HeroUserFollowDocument, {
      alias: 'heroUserFollow',
      ...operationOptions
    });
};

/**
 * __useHeroUserFollowMutation__
 *
 * To run a mutation, you first call `useHeroUserFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroUserFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroUserFollowMutation, { data, loading, error }] = useHeroUserFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHeroUserFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroUserFollowMutation, HeroUserFollowMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroUserFollowMutation, HeroUserFollowMutationVariables>(HeroUserFollowDocument, baseOptions);
      }
export type HeroUserFollowMutationHookResult = ReturnType<typeof useHeroUserFollowMutation>;
export type HeroUserFollowMutationResult = ApolloReactCommon.MutationResult<HeroUserFollowMutation>;
export type HeroUserFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroUserFollowMutation, HeroUserFollowMutationVariables>;
export const HeroUserUnfollowDocument = gql`
    mutation heroUserUnfollow($userId: String!) {
  delete(contextId: $userId) {
    ... on Follow {
      context {
        ... on User {
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
export type HeroUserUnfollowMutationFn = ApolloReactCommon.MutationFunction<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables>;
export type HeroUserUnfollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables>, 'mutation'>;

    export const HeroUserUnfollowComponent = (props: HeroUserUnfollowComponentProps) => (
      <ApolloReactComponents.Mutation<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables> mutation={HeroUserUnfollowDocument} {...props} />
    );
    
export type HeroUserUnfollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables> & TChildProps;
export function withHeroUserUnfollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroUserUnfollowMutation,
  HeroUserUnfollowMutationVariables,
  HeroUserUnfollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables, HeroUserUnfollowProps<TChildProps>>(HeroUserUnfollowDocument, {
      alias: 'heroUserUnfollow',
      ...operationOptions
    });
};

/**
 * __useHeroUserUnfollowMutation__
 *
 * To run a mutation, you first call `useHeroUserUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroUserUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroUserUnfollowMutation, { data, loading, error }] = useHeroUserUnfollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHeroUserUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables>(HeroUserUnfollowDocument, baseOptions);
      }
export type HeroUserUnfollowMutationHookResult = ReturnType<typeof useHeroUserUnfollowMutation>;
export type HeroUserUnfollowMutationResult = ApolloReactCommon.MutationResult<HeroUserUnfollowMutation>;
export type HeroUserUnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroUserUnfollowMutation, HeroUserUnfollowMutationVariables>;


export interface HeroUserMeQueryOperation {
  operationName: 'heroUserMe'
  result: HeroUserMeQuery
  variables: HeroUserMeQueryVariables
  type: 'query'
}


export interface HeroUserDataQueryOperation {
  operationName: 'heroUserData'
  result: HeroUserDataQuery
  variables: HeroUserDataQueryVariables
  type: 'query'
}


export interface HeroUserFollowMutationOperation {
  operationName: 'heroUserFollow'
  result: HeroUserFollowMutation
  variables: HeroUserFollowMutationVariables
  type: 'mutation'
}


export interface HeroUserUnfollowMutationOperation {
  operationName: 'heroUserUnfollow'
  result: HeroUserUnfollowMutation
  variables: HeroUserUnfollowMutationVariables
  type: 'mutation'
}
