import * as Types from '../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type AllCommunitiesQueryVariables = {};


export type AllCommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { communities: (
    { __typename: 'CommunitiesPage' }
    & Pick<Types.CommunitiesPage, 'totalCount'>
    & { edges: Array<(
      { __typename: 'Community' }
      & CommunityPreviewFragment
    )> }
  ) }
);


export const AllCommunitiesDocument = gql`
    query allCommunities {
  communities {
    edges {
      ...CommunityPreview
    }
    totalCount
  }
}
    ${CommunityPreviewFragmentDoc}`;
export type AllCommunitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>, 'query'>;

    export const AllCommunitiesComponent = (props: AllCommunitiesComponentProps) => (
      <ApolloReactComponents.Query<AllCommunitiesQuery, AllCommunitiesQueryVariables> query={AllCommunitiesDocument} {...props} />
    );
    
export type AllCommunitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCommunitiesQuery, AllCommunitiesQueryVariables> & TChildProps;
export function withAllCommunities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCommunitiesQuery,
  AllCommunitiesQueryVariables,
  AllCommunitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCommunitiesQuery, AllCommunitiesQueryVariables, AllCommunitiesProps<TChildProps>>(AllCommunitiesDocument, {
      alias: 'allCommunities',
      ...operationOptions
    });
};

/**
 * __useAllCommunitiesQuery__
 *
 * To run a query within a React component, call `useAllCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
      }
export function useAllCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
        }
export type AllCommunitiesQueryHookResult = ReturnType<typeof useAllCommunitiesQuery>;
export type AllCommunitiesLazyQueryHookResult = ReturnType<typeof useAllCommunitiesLazyQuery>;
export type AllCommunitiesQueryResult = ApolloReactCommon.QueryResult<AllCommunitiesQuery, AllCommunitiesQueryVariables>;


export interface AllCommunitiesQueryOperation {
  operationName: 'allCommunities'
  result: AllCommunitiesQuery
  variables: AllCommunitiesQueryVariables
  type: 'query'
}
