import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FeaturedCommunitiesQueryVariables = {};


export type FeaturedCommunitiesQuery = (
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
            & FeaturedCommunityInfoFragment
          )> }
        ) }
      )>> }
    )> }
  )> }
);

export type FeaturedCommunityInfoFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'icon' | 'name'>
);

export const FeaturedCommunityInfoFragmentDoc = gql`
    fragment FeaturedCommunityInfo on Community {
  id
  icon
  name
}
    `;
export const FeaturedCommunitiesDocument = gql`
    query featuredCommunities {
  instance {
    featuredCommunities {
      edges {
        node {
          id
          context {
            ...FeaturedCommunityInfo
          }
        }
      }
    }
  }
}
    ${FeaturedCommunityInfoFragmentDoc}`;
export type FeaturedCommunitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>, 'query'>;

    export const FeaturedCommunitiesComponent = (props: FeaturedCommunitiesComponentProps) => (
      <ApolloReactComponents.Query<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables> query={FeaturedCommunitiesDocument} {...props} />
    );
    
export type FeaturedCommunitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables> & TChildProps;
export function withFeaturedCommunities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeaturedCommunitiesQuery,
  FeaturedCommunitiesQueryVariables,
  FeaturedCommunitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables, FeaturedCommunitiesProps<TChildProps>>(FeaturedCommunitiesDocument, {
      alias: 'featuredCommunities',
      ...operationOptions
    });
};

/**
 * __useFeaturedCommunitiesQuery__
 *
 * To run a query within a React component, call `useFeaturedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>(FeaturedCommunitiesDocument, baseOptions);
      }
export function useFeaturedCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>(FeaturedCommunitiesDocument, baseOptions);
        }
export type FeaturedCommunitiesQueryHookResult = ReturnType<typeof useFeaturedCommunitiesQuery>;
export type FeaturedCommunitiesLazyQueryHookResult = ReturnType<typeof useFeaturedCommunitiesLazyQuery>;
export type FeaturedCommunitiesQueryResult = ApolloReactCommon.QueryResult<FeaturedCommunitiesQuery, FeaturedCommunitiesQueryVariables>;


export interface FeaturedCommunitiesQueryOperation {
  operationName: 'featuredCommunities'
  result: FeaturedCommunitiesQuery
  variables: FeaturedCommunitiesQueryVariables
  type: 'query'
}
