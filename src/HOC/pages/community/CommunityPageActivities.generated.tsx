import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewDataFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CommunityPageActivitiesQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CommunityPageActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesEdges' }
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'ActivitiesEdge' }
        & { node: (
          { __typename: 'Activity' }
          & ActivityPreviewDataFragment
        ) }
      )>>> }
    )> }
  )> }
);


export const CommunityPageActivitiesDocument = gql`
    query communityPageActivities($communityId: String!, $limit: Int, $before: String, $after: String) {
  community(communityId: $communityId) {
    id
    outbox(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...ActivityPreviewData
        }
      }
    }
  }
}
    ${ActivityPreviewDataFragmentDoc}`;
export type CommunityPageActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>, 'query'> & ({ variables: CommunityPageActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPageActivitiesComponent = (props: CommunityPageActivitiesComponentProps) => (
      <ApolloReactComponents.Query<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables> query={CommunityPageActivitiesDocument} {...props} />
    );
    
export type CommunityPageActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables> & TChildProps;
export function withCommunityPageActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageActivitiesQuery,
  CommunityPageActivitiesQueryVariables,
  CommunityPageActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables, CommunityPageActivitiesProps<TChildProps>>(CommunityPageActivitiesDocument, {
      alias: 'communityPageActivities',
      ...operationOptions
    });
};

/**
 * __useCommunityPageActivitiesQuery__
 *
 * To run a query within a React component, call `useCommunityPageActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPageActivitiesQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityPageActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>(CommunityPageActivitiesDocument, baseOptions);
      }
export function useCommunityPageActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>(CommunityPageActivitiesDocument, baseOptions);
        }
export type CommunityPageActivitiesQueryHookResult = ReturnType<typeof useCommunityPageActivitiesQuery>;
export type CommunityPageActivitiesLazyQueryHookResult = ReturnType<typeof useCommunityPageActivitiesLazyQuery>;
export type CommunityPageActivitiesQueryResult = ApolloReactCommon.QueryResult<CommunityPageActivitiesQuery, CommunityPageActivitiesQueryVariables>;


export interface CommunityPageActivitiesQueryOperation {
  operationName: 'communityPageActivities'
  result: CommunityPageActivitiesQuery
  variables: CommunityPageActivitiesQueryVariables
  type: 'query'
}
