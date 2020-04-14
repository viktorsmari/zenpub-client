import * as Types from '../../graphql/types.generated';

import { CommunityPageDataFragment } from '../../HOC/pages/community/CommunityPage.generated';
import gql from 'graphql-tag';
import { CommunityPageDataFragmentDoc } from '../../HOC/pages/community/CommunityPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CommunityDataQueryVariables = {
  communityId: Types.Scalars['String']
};


export type CommunityDataQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & CommunityPageDataFragment
  )> }
);


export const CommunityDataDocument = gql`
    query communityData($communityId: String!) {
  community(communityId: $communityId) {
    ...CommunityPageData
  }
}
    ${CommunityPageDataFragmentDoc}`;
export type CommunityDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityDataQuery, CommunityDataQueryVariables>, 'query'> & ({ variables: CommunityDataQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityDataComponent = (props: CommunityDataComponentProps) => (
      <ApolloReactComponents.Query<CommunityDataQuery, CommunityDataQueryVariables> query={CommunityDataDocument} {...props} />
    );
    
export type CommunityDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityDataQuery, CommunityDataQueryVariables> & TChildProps;
export function withCommunityData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityDataQuery,
  CommunityDataQueryVariables,
  CommunityDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityDataQuery, CommunityDataQueryVariables, CommunityDataProps<TChildProps>>(CommunityDataDocument, {
      alias: 'communityData',
      ...operationOptions
    });
};

/**
 * __useCommunityDataQuery__
 *
 * To run a query within a React component, call `useCommunityDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityDataQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityDataQuery, CommunityDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityDataQuery, CommunityDataQueryVariables>(CommunityDataDocument, baseOptions);
      }
export function useCommunityDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityDataQuery, CommunityDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityDataQuery, CommunityDataQueryVariables>(CommunityDataDocument, baseOptions);
        }
export type CommunityDataQueryHookResult = ReturnType<typeof useCommunityDataQuery>;
export type CommunityDataLazyQueryHookResult = ReturnType<typeof useCommunityDataLazyQuery>;
export type CommunityDataQueryResult = ApolloReactCommon.QueryResult<CommunityDataQuery, CommunityDataQueryVariables>;


export interface CommunityDataQueryOperation {
  operationName: 'communityData'
  result: CommunityDataQuery
  variables: CommunityDataQueryVariables
  type: 'query'
}
