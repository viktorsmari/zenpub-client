import * as Types from '../../../graphql/types.generated';

import { CommunityPageCollectionBaseFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import { CollectionPreviewDataFragment } from '../../../HOC/modules/CollectionPreview/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewDataFragmentDoc } from '../../../HOC/modules/CollectionPreview/CollectionPreview.generated';
import { CommunityPageCollectionBaseFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CommunityCollectionsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CommunityCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { collections: Types.Maybe<(
      { __typename: 'CollectionsEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'CollectionsEdge' }
        & { node: (
          { __typename: 'Collection' }
          & CommunityCollectionFragment
        ) }
      )>> }
    )> }
  )> }
);

export type CommunityCollectionFragment = (
  { __typename: 'Collection' }
  & CollectionPreviewDataFragment
  & CommunityPageCollectionBaseFragment
);

export const CommunityCollectionFragmentDoc = gql`
    fragment CommunityCollection on Collection {
  ...CollectionPreviewData
  ...CommunityPageCollectionBase
}
    ${CollectionPreviewDataFragmentDoc}
${CommunityPageCollectionBaseFragmentDoc}`;
export const CommunityCollectionsDocument = gql`
    query communityCollections($communityId: String!, $limit: Int, $before: String, $after: String) {
  community(communityId: $communityId) {
    id
    collections(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...CommunityCollection
        }
      }
    }
  }
}
    ${CommunityCollectionFragmentDoc}`;
export type CommunityCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>, 'query'> & ({ variables: CommunityCollectionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityCollectionsComponent = (props: CommunityCollectionsComponentProps) => (
      <ApolloReactComponents.Query<CommunityCollectionsQuery, CommunityCollectionsQueryVariables> query={CommunityCollectionsDocument} {...props} />
    );
    
export type CommunityCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityCollectionsQuery, CommunityCollectionsQueryVariables> & TChildProps;
export function withCommunityCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityCollectionsQuery,
  CommunityCollectionsQueryVariables,
  CommunityCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityCollectionsQuery, CommunityCollectionsQueryVariables, CommunityCollectionsProps<TChildProps>>(CommunityCollectionsDocument, {
      alias: 'communityCollections',
      ...operationOptions
    });
};

/**
 * __useCommunityCollectionsQuery__
 *
 * To run a query within a React component, call `useCommunityCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityCollectionsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>(CommunityCollectionsDocument, baseOptions);
      }
export function useCommunityCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>(CommunityCollectionsDocument, baseOptions);
        }
export type CommunityCollectionsQueryHookResult = ReturnType<typeof useCommunityCollectionsQuery>;
export type CommunityCollectionsLazyQueryHookResult = ReturnType<typeof useCommunityCollectionsLazyQuery>;
export type CommunityCollectionsQueryResult = ApolloReactCommon.QueryResult<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>;


export interface CommunityCollectionsQueryOperation {
  operationName: 'communityCollections'
  result: CommunityCollectionsQuery
  variables: CommunityCollectionsQueryVariables
  type: 'query'
}
