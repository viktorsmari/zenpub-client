import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
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

export type HeroCommunityDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'displayUsername' | 'name' | 'summary' | 'icon'>
  & { followers: Types.Maybe<(
    { __typename: 'FollowsEdges' }
    & Pick<Types.FollowsEdges, 'totalCount'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, creator: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
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

export type HeroCommunityMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export const HeroCommunityDataFragmentDoc = gql`
    fragment HeroCommunityData on Community {
  id
  displayUsername
  name
  summary
  icon
  followers {
    totalCount
  }
  myFollow {
    id
  }
  creator {
    id
  }
}
    `;
export const HeroCommunityMeDataFragmentDoc = gql`
    fragment HeroCommunityMeData on Me {
  user {
    id
  }
}
    `;
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
