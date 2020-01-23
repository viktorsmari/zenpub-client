import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { CollectionPreviewDataFragment } from '../../modules/CollectionPreview/CollectionPreview.generated';
import { HeroCommunityDataFragment } from '../../modules/HeroCommunity/getHeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../modules/HeroCommunity/getHeroCommunity.generated';
import { CollectionPreviewDataFragmentDoc } from '../../modules/CollectionPreview/CollectionPreview.generated';
import { ActivityPreviewDataFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;




export type CommunityPageQueryVariables = {
  id: Types.Scalars['String']
};


export type CommunityPageQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & { collections: Types.Maybe<(
      { __typename: 'CollectionsEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'CollectionsEdge' }
        & { node: (
          { __typename: 'Collection' }
          & CollectionPreviewDataFragment
        ) }
      )>> }
    )>, outbox: Types.Maybe<(
      { __typename: 'ActivitiesEdges' }
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'ActivitiesEdge' }
        & { node: (
          { __typename: 'Activity' }
          & ActivityPreviewDataFragment
        ) }
      )>>> }
    )> }
    & HeroCommunityDataFragment
  )> }
);


export const CommunityPageDocument = gql`
    query communityPage($id: String!) {
  community(communityId: $id) {
    ...HeroCommunityData
    collections {
      edges {
        node {
          ...CollectionPreviewData
        }
      }
    }
    outbox {
      edges {
        node {
          ...ActivityPreviewData
        }
      }
    }
  }
}
    ${HeroCommunityDataFragmentDoc}
${CollectionPreviewDataFragmentDoc}
${ActivityPreviewDataFragmentDoc}`;
export type CommunityPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPageQuery, CommunityPageQueryVariables>, 'query'> & ({ variables: CommunityPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPageComponent = (props: CommunityPageComponentProps) => (
      <ApolloReactComponents.Query<CommunityPageQuery, CommunityPageQueryVariables> query={CommunityPageDocument} {...props} />
    );
    
export type CommunityPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPageQuery, CommunityPageQueryVariables> & TChildProps;
export function withCommunityPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageQuery,
  CommunityPageQueryVariables,
  CommunityPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPageQuery, CommunityPageQueryVariables, CommunityPageProps<TChildProps>>(CommunityPageDocument, {
      alias: 'communityPage',
      ...operationOptions
    });
};

/**
 * __useCommunityPageQuery__
 *
 * To run a query within a React component, call `useCommunityPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommunityPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPageQuery, CommunityPageQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPageQuery, CommunityPageQueryVariables>(CommunityPageDocument, baseOptions);
      }
export function useCommunityPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPageQuery, CommunityPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPageQuery, CommunityPageQueryVariables>(CommunityPageDocument, baseOptions);
        }
export type CommunityPageQueryHookResult = ReturnType<typeof useCommunityPageQuery>;
export type CommunityPageLazyQueryHookResult = ReturnType<typeof useCommunityPageLazyQuery>;
export type CommunityPageQueryResult = ApolloReactCommon.QueryResult<CommunityPageQuery, CommunityPageQueryVariables>;


export interface CommunityPageQueryOperation {
  operationName: 'communityPage'
  result: CommunityPageQuery
  variables: CommunityPageQueryVariables
  type: 'query'
}
