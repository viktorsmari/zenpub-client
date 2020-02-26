import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FeaturedCollectionsQueryVariables = {};


export type FeaturedCollectionsQuery = (
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
            & FeaturedCollectionInfoFragment
          ) | { __typename: 'Community' }> }
        ) }
      )>> }
    )> }
  )> }
);

export type FeaturedCollectionInfoFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'icon' | 'name'>
);

export const FeaturedCollectionInfoFragmentDoc = gql`
    fragment FeaturedCollectionInfo on Collection {
  id
  icon
  name
}
    `;
export const FeaturedCollectionsDocument = gql`
    query featuredCollections {
  instance {
    featuredCollections {
      edges {
        node {
          id
          context {
            ...FeaturedCollectionInfo
          }
        }
      }
    }
  }
}
    ${FeaturedCollectionInfoFragmentDoc}`;
export type FeaturedCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>, 'query'>;

    export const FeaturedCollectionsComponent = (props: FeaturedCollectionsComponentProps) => (
      <ApolloReactComponents.Query<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables> query={FeaturedCollectionsDocument} {...props} />
    );
    
export type FeaturedCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables> & TChildProps;
export function withFeaturedCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeaturedCollectionsQuery,
  FeaturedCollectionsQueryVariables,
  FeaturedCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables, FeaturedCollectionsProps<TChildProps>>(FeaturedCollectionsDocument, {
      alias: 'featuredCollections',
      ...operationOptions
    });
};

/**
 * __useFeaturedCollectionsQuery__
 *
 * To run a query within a React component, call `useFeaturedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>(FeaturedCollectionsDocument, baseOptions);
      }
export function useFeaturedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>(FeaturedCollectionsDocument, baseOptions);
        }
export type FeaturedCollectionsQueryHookResult = ReturnType<typeof useFeaturedCollectionsQuery>;
export type FeaturedCollectionsLazyQueryHookResult = ReturnType<typeof useFeaturedCollectionsLazyQuery>;
export type FeaturedCollectionsQueryResult = ApolloReactCommon.QueryResult<FeaturedCollectionsQuery, FeaturedCollectionsQueryVariables>;


export interface FeaturedCollectionsQueryOperation {
  operationName: 'featuredCollections'
  result: FeaturedCollectionsQuery
  variables: FeaturedCollectionsQueryVariables
  type: 'query'
}
