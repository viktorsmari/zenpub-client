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


export type CommunityPreviewQueryVariables = {
  communityId: Types.Scalars['String']
};


export type CommunityPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & CommunityPreviewFragment
  )> }
);


export const CommunityPreviewDocument = gql`
    query communityPreview($communityId: String!) {
  community(communityId: $communityId) {
    id
    ...CommunityPreview
  }
}
    ${CommunityPreviewFragmentDoc}`;
export type CommunityPreviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPreviewQuery, CommunityPreviewQueryVariables>, 'query'> & ({ variables: CommunityPreviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPreviewComponent = (props: CommunityPreviewComponentProps) => (
      <ApolloReactComponents.Query<CommunityPreviewQuery, CommunityPreviewQueryVariables> query={CommunityPreviewDocument} {...props} />
    );
    
export type CommunityPreviewProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPreviewQuery, CommunityPreviewQueryVariables> & TChildProps;
export function withCommunityPreview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPreviewQuery,
  CommunityPreviewQueryVariables,
  CommunityPreviewProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPreviewQuery, CommunityPreviewQueryVariables, CommunityPreviewProps<TChildProps>>(CommunityPreviewDocument, {
      alias: 'communityPreview',
      ...operationOptions
    });
};

/**
 * __useCommunityPreviewQuery__
 *
 * To run a query within a React component, call `useCommunityPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPreviewQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPreviewQuery, CommunityPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPreviewQuery, CommunityPreviewQueryVariables>(CommunityPreviewDocument, baseOptions);
      }
export function useCommunityPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPreviewQuery, CommunityPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPreviewQuery, CommunityPreviewQueryVariables>(CommunityPreviewDocument, baseOptions);
        }
export type CommunityPreviewQueryHookResult = ReturnType<typeof useCommunityPreviewQuery>;
export type CommunityPreviewLazyQueryHookResult = ReturnType<typeof useCommunityPreviewLazyQuery>;
export type CommunityPreviewQueryResult = ApolloReactCommon.QueryResult<CommunityPreviewQuery, CommunityPreviewQueryVariables>;


export interface CommunityPreviewQueryOperation {
  operationName: 'communityPreview'
  result: CommunityPreviewQuery
  variables: CommunityPreviewQueryVariables
  type: 'query'
}
