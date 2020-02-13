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
