import * as React from 'react';
import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCommunityInfoFragment } from '../../../HOC/pages/discover/DiscoverPage.generated';
import gql from 'graphql-tag';
import { DiscoverPageFeaturedCommunityInfoFragmentDoc } from '../../../HOC/pages/discover/DiscoverPage.generated';
import { DiscoverPageFeaturedCollectionInfoFragmentDoc } from '../../../HOC/pages/discover/DiscoverPage.generated';
import { DiscoverPageFeaturedCollectionInfoFragment } from '../../../HOC/pages/discover/DiscoverPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type InstanceFeaturedCommunitiesQueryVariables = {};


export type InstanceFeaturedCommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { featuredCommunities: Types.Maybe<(
      { __typename: 'FeaturesEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'FeaturesEdge' }
        & { node: (
          { __typename: 'Feature' }
          & Pick<Types.Feature, 'id'>
          & { context: Types.Maybe<{ __typename: 'Collection' } | (
            { __typename: 'Community' }
            & DiscoverPageFeaturedCommunityInfoFragment
          )> }
        ) }
      )>> }
    )> }
  )> }
);

export type InstanceFeaturedCollectionsQueryVariables = {};


export type InstanceFeaturedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { featuredCollections: Types.Maybe<(
      { __typename: 'FeaturesEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'FeaturesEdge' }
        & { node: (
          { __typename: 'Feature' }
          & Pick<Types.Feature, 'id'>
          & { context: Types.Maybe<(
            { __typename: 'Collection' }
            & DiscoverPageFeaturedCollectionInfoFragment
          ) | { __typename: 'Community' }> }
        ) }
      )>> }
    )> }
  )> }
);


export const InstanceFeaturedCommunitiesDocument = gql`
    query instanceFeaturedCommunities {
  instance {
    featuredCommunities {
      edges {
        node {
          id
          context {
            ...DiscoverPageFeaturedCommunityInfo
          }
        }
      }
    }
  }
}
    ${DiscoverPageFeaturedCommunityInfoFragmentDoc}`;
export type InstanceFeaturedCommunitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>, 'query'>;

    export const InstanceFeaturedCommunitiesComponent = (props: InstanceFeaturedCommunitiesComponentProps) => (
      <ApolloReactComponents.Query<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables> query={InstanceFeaturedCommunitiesDocument} {...props} />
    );
    
export type InstanceFeaturedCommunitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables> & TChildProps;
export function withInstanceFeaturedCommunities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InstanceFeaturedCommunitiesQuery,
  InstanceFeaturedCommunitiesQueryVariables,
  InstanceFeaturedCommunitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables, InstanceFeaturedCommunitiesProps<TChildProps>>(InstanceFeaturedCommunitiesDocument, {
      alias: 'instanceFeaturedCommunities',
      ...operationOptions
    });
};

/**
 * __useInstanceFeaturedCommunitiesQuery__
 *
 * To run a query within a React component, call `useInstanceFeaturedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceFeaturedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceFeaturedCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstanceFeaturedCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>(InstanceFeaturedCommunitiesDocument, baseOptions);
      }
export function useInstanceFeaturedCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>(InstanceFeaturedCommunitiesDocument, baseOptions);
        }
export type InstanceFeaturedCommunitiesQueryHookResult = ReturnType<typeof useInstanceFeaturedCommunitiesQuery>;
export type InstanceFeaturedCommunitiesLazyQueryHookResult = ReturnType<typeof useInstanceFeaturedCommunitiesLazyQuery>;
export type InstanceFeaturedCommunitiesQueryResult = ApolloReactCommon.QueryResult<InstanceFeaturedCommunitiesQuery, InstanceFeaturedCommunitiesQueryVariables>;
export const InstanceFeaturedCollectionsDocument = gql`
    query instanceFeaturedCollections {
  instance {
    featuredCollections {
      edges {
        node {
          id
          context {
            ...DiscoverPageFeaturedCollectionInfo
          }
        }
      }
    }
  }
}
    ${DiscoverPageFeaturedCollectionInfoFragmentDoc}`;
export type InstanceFeaturedCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>, 'query'>;

    export const InstanceFeaturedCollectionsComponent = (props: InstanceFeaturedCollectionsComponentProps) => (
      <ApolloReactComponents.Query<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables> query={InstanceFeaturedCollectionsDocument} {...props} />
    );
    
export type InstanceFeaturedCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables> & TChildProps;
export function withInstanceFeaturedCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InstanceFeaturedCollectionsQuery,
  InstanceFeaturedCollectionsQueryVariables,
  InstanceFeaturedCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables, InstanceFeaturedCollectionsProps<TChildProps>>(InstanceFeaturedCollectionsDocument, {
      alias: 'instanceFeaturedCollections',
      ...operationOptions
    });
};

/**
 * __useInstanceFeaturedCollectionsQuery__
 *
 * To run a query within a React component, call `useInstanceFeaturedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceFeaturedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceFeaturedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstanceFeaturedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>(InstanceFeaturedCollectionsDocument, baseOptions);
      }
export function useInstanceFeaturedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>(InstanceFeaturedCollectionsDocument, baseOptions);
        }
export type InstanceFeaturedCollectionsQueryHookResult = ReturnType<typeof useInstanceFeaturedCollectionsQuery>;
export type InstanceFeaturedCollectionsLazyQueryHookResult = ReturnType<typeof useInstanceFeaturedCollectionsLazyQuery>;
export type InstanceFeaturedCollectionsQueryResult = ApolloReactCommon.QueryResult<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>;


export interface InstanceFeaturedCommunitiesQueryOperation {
  operationName: 'instanceFeaturedCommunities'
  result: InstanceFeaturedCommunitiesQuery
  variables: InstanceFeaturedCommunitiesQueryVariables
  type: 'query'
}


export interface InstanceFeaturedCollectionsQueryOperation {
  operationName: 'instanceFeaturedCollections'
  result: InstanceFeaturedCollectionsQuery
  variables: InstanceFeaturedCollectionsQueryVariables
  type: 'query'
}
