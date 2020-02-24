import * as Types from '../../../graphql/types.generated';

import { FeaturedCollectionInfoFragment } from '../../collection/featured/featuredCollections.generated';
import gql from 'graphql-tag';
import { FeaturedCollectionInfoFragmentDoc } from '../../collection/featured/featuredCollections.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type InstanceFeaturedQueryVariables = {};


export type InstanceFeaturedQuery = (
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
    )>, featuredCommunities: Types.Maybe<(
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


export const InstanceFeaturedDocument = gql`
    query instanceFeatured {
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
    featuredCommunities {
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
export type InstanceFeaturedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>, 'query'>;

    export const InstanceFeaturedComponent = (props: InstanceFeaturedComponentProps) => (
      <ApolloReactComponents.Query<InstanceFeaturedQuery, InstanceFeaturedQueryVariables> query={InstanceFeaturedDocument} {...props} />
    );
    
export type InstanceFeaturedProps<TChildProps = {}> = ApolloReactHoc.DataProps<InstanceFeaturedQuery, InstanceFeaturedQueryVariables> & TChildProps;
export function withInstanceFeatured<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InstanceFeaturedQuery,
  InstanceFeaturedQueryVariables,
  InstanceFeaturedProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, InstanceFeaturedQuery, InstanceFeaturedQueryVariables, InstanceFeaturedProps<TChildProps>>(InstanceFeaturedDocument, {
      alias: 'instanceFeatured',
      ...operationOptions
    });
};

/**
 * __useInstanceFeaturedQuery__
 *
 * To run a query within a React component, call `useInstanceFeaturedQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceFeaturedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceFeaturedQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstanceFeaturedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>(InstanceFeaturedDocument, baseOptions);
      }
export function useInstanceFeaturedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>(InstanceFeaturedDocument, baseOptions);
        }
export type InstanceFeaturedQueryHookResult = ReturnType<typeof useInstanceFeaturedQuery>;
export type InstanceFeaturedLazyQueryHookResult = ReturnType<typeof useInstanceFeaturedLazyQuery>;
export type InstanceFeaturedQueryResult = ApolloReactCommon.QueryResult<InstanceFeaturedQuery, InstanceFeaturedQueryVariables>;


export interface InstanceFeaturedQueryOperation {
  operationName: 'instanceFeatured'
  result: InstanceFeaturedQuery
  variables: InstanceFeaturedQueryVariables
  type: 'query'
}
