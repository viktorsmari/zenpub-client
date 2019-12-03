import * as Types from '../types.generated';

import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import gql from 'graphql-tag';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type GetFeaturedCommunitiesQueryVariables = {
  one: Types.Scalars['String'],
  two: Types.Scalars['String'],
  three: Types.Scalars['String'],
  four: Types.Scalars['String']
};


export type GetFeaturedCommunitiesQuery = (
  { __typename?: 'RootQueryType' }
  & { one: Types.Maybe<(
    { __typename?: 'Community' }
    & BasicCommunityFragment
  )>, two: Types.Maybe<(
    { __typename?: 'Community' }
    & BasicCommunityFragment
  )>, three: Types.Maybe<(
    { __typename?: 'Community' }
    & BasicCommunityFragment
  )>, four: Types.Maybe<(
    { __typename?: 'Community' }
    & BasicCommunityFragment
  )> }
);


export const GetFeaturedCommunitiesDocument = gql`
    query getFeaturedCommunities($one: String!, $two: String!, $three: String!, $four: String!) {
  one: community(communityId: $one) {
    ...BasicCommunity
  }
  two: community(communityId: $two) {
    ...BasicCommunity
  }
  three: community(communityId: $three) {
    ...BasicCommunity
  }
  four: community(communityId: $four) {
    ...BasicCommunity
  }
}
    ${BasicCommunityFragmentDoc}`;
export type GetFeaturedCommunitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>, 'query'> & ({ variables: GetFeaturedCommunitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetFeaturedCommunitiesComponent = (props: GetFeaturedCommunitiesComponentProps) => (
      <ApolloReactComponents.Query<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables> query={GetFeaturedCommunitiesDocument} {...props} />
    );
    
export type GetFeaturedCommunitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables> & TChildProps;
export function withGetFeaturedCommunities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetFeaturedCommunitiesQuery,
  GetFeaturedCommunitiesQueryVariables,
  GetFeaturedCommunitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables, GetFeaturedCommunitiesProps<TChildProps>>(GetFeaturedCommunitiesDocument, {
      alias: 'getFeaturedCommunities',
      ...operationOptions
    });
};

/**
 * __useGetFeaturedCommunitiesQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCommunitiesQuery({
 *   variables: {
 *      one: // value for 'one'
 *      two: // value for 'two'
 *      three: // value for 'three'
 *      four: // value for 'four'
 *   },
 * });
 */
export function useGetFeaturedCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>(GetFeaturedCommunitiesDocument, baseOptions);
      }
export function useGetFeaturedCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>(GetFeaturedCommunitiesDocument, baseOptions);
        }
export type GetFeaturedCommunitiesQueryHookResult = ReturnType<typeof useGetFeaturedCommunitiesQuery>;
export type GetFeaturedCommunitiesLazyQueryHookResult = ReturnType<typeof useGetFeaturedCommunitiesLazyQuery>;
export type GetFeaturedCommunitiesQueryResult = ApolloReactCommon.QueryResult<GetFeaturedCommunitiesQuery, GetFeaturedCommunitiesQueryVariables>;


export interface GetFeaturedCommunitiesQueryOperation {
  operationName: 'getFeaturedCommunities'
  result: GetFeaturedCommunitiesQuery
  variables: GetFeaturedCommunitiesQueryVariables
  type: 'query'
}
