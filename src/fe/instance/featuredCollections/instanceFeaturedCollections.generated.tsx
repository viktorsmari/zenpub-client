import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCollectionInfoFragment } from '../../../HOC/pages/discover/DiscoverPage.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { DiscoverPageFeaturedCollectionInfoFragmentDoc } from '../../../HOC/pages/discover/DiscoverPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type InstanceFeaturedCollectionsQueryVariables = {};


export type InstanceFeaturedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { featuredCollections: Types.Maybe<(
      { __typename: 'FeaturesPage' }
      & Pick<Types.FeaturesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Feature' }
        & Pick<Types.Feature, 'id'>
        & { context: Types.Maybe<(
          { __typename: 'Collection' }
          & DiscoverPageFeaturedCollectionInfoFragment
        ) | { __typename: 'Community' }> }
      )> }
    )> }
  )> }
);


export const InstanceFeaturedCollectionsDocument = gql`
    query instanceFeaturedCollections {
  instance @connection(key: "instanceFeaturedCollections") {
    featuredCollections {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        context {
          ...DiscoverPageFeaturedCollectionInfo
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
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


export interface InstanceFeaturedCollectionsQueryOperation {
  operationName: 'instanceFeaturedCollections'
  result: InstanceFeaturedCollectionsQuery
  variables: InstanceFeaturedCollectionsQueryVariables
  type: 'query'
}
