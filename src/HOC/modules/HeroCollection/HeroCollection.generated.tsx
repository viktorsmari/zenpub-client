import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HeroCollectionQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type HeroCollectionQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & HeroCollectionDataFragment
  )> }
);

export type HeroCollectionDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name' | 'displayUsername' | 'summary' | 'icon'>
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id' | 'name' | 'icon'>
  )>, followers: Types.Maybe<(
    { __typename: 'FollowsEdges' }
    & Pick<Types.FollowsEdges, 'totalCount'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, creator: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  )> }
);

export type HeroCollectionMeQueryVariables = {};


export type HeroCollectionMeQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & HeroCollectionMeDataFragment
  )> }
);

export type HeroCollectionMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export type HeroCollectionUnfollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type HeroCollectionUnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | (
    { __typename: 'Follow' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Community' } | { __typename: 'Thread' } | { __typename: 'User' }> }
  ) | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export type HeroCollectionFollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type HeroCollectionFollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & { context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Community' } | { __typename: 'Thread' } | { __typename: 'User' }> }
  )> }
);

export const HeroCollectionDataFragmentDoc = gql`
    fragment HeroCollectionData on Collection {
  id
  name
  displayUsername
  summary
  icon
  community {
    id
    name
    icon
  }
  followers {
    totalCount
  }
  myFollow {
    id
  }
  myFlag {
    id
  }
  creator {
    id
  }
}
    `;
export const HeroCollectionMeDataFragmentDoc = gql`
    fragment HeroCollectionMeData on Me {
  user {
    id
  }
}
    `;
export const HeroCollectionDocument = gql`
    query heroCollection($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...HeroCollectionData
  }
}
    ${HeroCollectionDataFragmentDoc}`;
export type HeroCollectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroCollectionQuery, HeroCollectionQueryVariables>, 'query'> & ({ variables: HeroCollectionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const HeroCollectionComponent = (props: HeroCollectionComponentProps) => (
      <ApolloReactComponents.Query<HeroCollectionQuery, HeroCollectionQueryVariables> query={HeroCollectionDocument} {...props} />
    );
    
export type HeroCollectionProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroCollectionQuery, HeroCollectionQueryVariables> & TChildProps;
export function withHeroCollection<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCollectionQuery,
  HeroCollectionQueryVariables,
  HeroCollectionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroCollectionQuery, HeroCollectionQueryVariables, HeroCollectionProps<TChildProps>>(HeroCollectionDocument, {
      alias: 'heroCollection',
      ...operationOptions
    });
};

/**
 * __useHeroCollectionQuery__
 *
 * To run a query within a React component, call `useHeroCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroCollectionQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useHeroCollectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroCollectionQuery, HeroCollectionQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroCollectionQuery, HeroCollectionQueryVariables>(HeroCollectionDocument, baseOptions);
      }
export function useHeroCollectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroCollectionQuery, HeroCollectionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroCollectionQuery, HeroCollectionQueryVariables>(HeroCollectionDocument, baseOptions);
        }
export type HeroCollectionQueryHookResult = ReturnType<typeof useHeroCollectionQuery>;
export type HeroCollectionLazyQueryHookResult = ReturnType<typeof useHeroCollectionLazyQuery>;
export type HeroCollectionQueryResult = ApolloReactCommon.QueryResult<HeroCollectionQuery, HeroCollectionQueryVariables>;
export const HeroCollectionMeDocument = gql`
    query heroCollectionMe {
  me {
    ...HeroCollectionMeData
  }
}
    ${HeroCollectionMeDataFragmentDoc}`;
export type HeroCollectionMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>, 'query'>;

    export const HeroCollectionMeComponent = (props: HeroCollectionMeComponentProps) => (
      <ApolloReactComponents.Query<HeroCollectionMeQuery, HeroCollectionMeQueryVariables> query={HeroCollectionMeDocument} {...props} />
    );
    
export type HeroCollectionMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroCollectionMeQuery, HeroCollectionMeQueryVariables> & TChildProps;
export function withHeroCollectionMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCollectionMeQuery,
  HeroCollectionMeQueryVariables,
  HeroCollectionMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HeroCollectionMeQuery, HeroCollectionMeQueryVariables, HeroCollectionMeProps<TChildProps>>(HeroCollectionMeDocument, {
      alias: 'heroCollectionMe',
      ...operationOptions
    });
};

/**
 * __useHeroCollectionMeQuery__
 *
 * To run a query within a React component, call `useHeroCollectionMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroCollectionMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroCollectionMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroCollectionMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>(HeroCollectionMeDocument, baseOptions);
      }
export function useHeroCollectionMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>(HeroCollectionMeDocument, baseOptions);
        }
export type HeroCollectionMeQueryHookResult = ReturnType<typeof useHeroCollectionMeQuery>;
export type HeroCollectionMeLazyQueryHookResult = ReturnType<typeof useHeroCollectionMeLazyQuery>;
export type HeroCollectionMeQueryResult = ApolloReactCommon.QueryResult<HeroCollectionMeQuery, HeroCollectionMeQueryVariables>;
export const HeroCollectionUnfollowDocument = gql`
    mutation heroCollectionUnfollow($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Follow {
      context {
        ... on Collection {
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
export type HeroCollectionUnfollowMutationFn = ApolloReactCommon.MutationFunction<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables>;
export type HeroCollectionUnfollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables>, 'mutation'>;

    export const HeroCollectionUnfollowComponent = (props: HeroCollectionUnfollowComponentProps) => (
      <ApolloReactComponents.Mutation<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables> mutation={HeroCollectionUnfollowDocument} {...props} />
    );
    
export type HeroCollectionUnfollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables> & TChildProps;
export function withHeroCollectionUnfollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCollectionUnfollowMutation,
  HeroCollectionUnfollowMutationVariables,
  HeroCollectionUnfollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables, HeroCollectionUnfollowProps<TChildProps>>(HeroCollectionUnfollowDocument, {
      alias: 'heroCollectionUnfollow',
      ...operationOptions
    });
};

/**
 * __useHeroCollectionUnfollowMutation__
 *
 * To run a mutation, you first call `useHeroCollectionUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroCollectionUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroCollectionUnfollowMutation, { data, loading, error }] = useHeroCollectionUnfollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useHeroCollectionUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables>(HeroCollectionUnfollowDocument, baseOptions);
      }
export type HeroCollectionUnfollowMutationHookResult = ReturnType<typeof useHeroCollectionUnfollowMutation>;
export type HeroCollectionUnfollowMutationResult = ApolloReactCommon.MutationResult<HeroCollectionUnfollowMutation>;
export type HeroCollectionUnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroCollectionUnfollowMutation, HeroCollectionUnfollowMutationVariables>;
export const HeroCollectionFollowDocument = gql`
    mutation heroCollectionFollow($contextId: String!) {
  createFollow(contextId: $contextId) {
    context {
      ... on Collection {
        id
        myFollow {
          id
        }
      }
    }
  }
}
    `;
export type HeroCollectionFollowMutationFn = ApolloReactCommon.MutationFunction<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables>;
export type HeroCollectionFollowComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables>, 'mutation'>;

    export const HeroCollectionFollowComponent = (props: HeroCollectionFollowComponentProps) => (
      <ApolloReactComponents.Mutation<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables> mutation={HeroCollectionFollowDocument} {...props} />
    );
    
export type HeroCollectionFollowProps<TChildProps = {}> = ApolloReactHoc.MutateProps<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables> & TChildProps;
export function withHeroCollectionFollow<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HeroCollectionFollowMutation,
  HeroCollectionFollowMutationVariables,
  HeroCollectionFollowProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables, HeroCollectionFollowProps<TChildProps>>(HeroCollectionFollowDocument, {
      alias: 'heroCollectionFollow',
      ...operationOptions
    });
};

/**
 * __useHeroCollectionFollowMutation__
 *
 * To run a mutation, you first call `useHeroCollectionFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHeroCollectionFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [heroCollectionFollowMutation, { data, loading, error }] = useHeroCollectionFollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useHeroCollectionFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables>) {
        return ApolloReactHooks.useMutation<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables>(HeroCollectionFollowDocument, baseOptions);
      }
export type HeroCollectionFollowMutationHookResult = ReturnType<typeof useHeroCollectionFollowMutation>;
export type HeroCollectionFollowMutationResult = ApolloReactCommon.MutationResult<HeroCollectionFollowMutation>;
export type HeroCollectionFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<HeroCollectionFollowMutation, HeroCollectionFollowMutationVariables>;


export interface HeroCollectionQueryOperation {
  operationName: 'heroCollection'
  result: HeroCollectionQuery
  variables: HeroCollectionQueryVariables
  type: 'query'
}


export interface HeroCollectionMeQueryOperation {
  operationName: 'heroCollectionMe'
  result: HeroCollectionMeQuery
  variables: HeroCollectionMeQueryVariables
  type: 'query'
}


export interface HeroCollectionUnfollowMutationOperation {
  operationName: 'heroCollectionUnfollow'
  result: HeroCollectionUnfollowMutation
  variables: HeroCollectionUnfollowMutationVariables
  type: 'mutation'
}


export interface HeroCollectionFollowMutationOperation {
  operationName: 'heroCollectionFollow'
  result: HeroCollectionFollowMutation
  variables: HeroCollectionFollowMutationVariables
  type: 'mutation'
}
