import * as Types from '../../../../graphql/types.generated';

import { UserPreviewFragment } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { UserPreviewFragmentDoc } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CommunityFollowersQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type CommunityFollowersQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { followers: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { creator: Types.Maybe<(
          { __typename: 'User' }
          & CommunityFollowerFragment
        )> }
      )> }
    )> }
  )> }
);

export type CommunityFollowerFragment = (
  { __typename: 'User' }
  & UserPreviewFragment
);

export const CommunityFollowerFragmentDoc = gql`
    fragment CommunityFollower on User {
  ...UserPreview
}
    ${UserPreviewFragmentDoc}`;
export const CommunityFollowersDocument = gql`
    query communityFollowers($communityId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  community(communityId: $communityId) @connection(key: "communityFollowers", filter: ["communityId"]) {
    id
    followers(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        creator {
          ...CommunityFollower
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommunityFollowerFragmentDoc}`;
export type CommunityFollowersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityFollowersQuery, CommunityFollowersQueryVariables>, 'query'> & ({ variables: CommunityFollowersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityFollowersComponent = (props: CommunityFollowersComponentProps) => (
      <ApolloReactComponents.Query<CommunityFollowersQuery, CommunityFollowersQueryVariables> query={CommunityFollowersDocument} {...props} />
    );
    
export type CommunityFollowersProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityFollowersQuery, CommunityFollowersQueryVariables> & TChildProps;
export function withCommunityFollowers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityFollowersQuery,
  CommunityFollowersQueryVariables,
  CommunityFollowersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityFollowersQuery, CommunityFollowersQueryVariables, CommunityFollowersProps<TChildProps>>(CommunityFollowersDocument, {
      alias: 'communityFollowers',
      ...operationOptions
    });
};

/**
 * __useCommunityFollowersQuery__
 *
 * To run a query within a React component, call `useCommunityFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityFollowersQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityFollowersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityFollowersQuery, CommunityFollowersQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityFollowersQuery, CommunityFollowersQueryVariables>(CommunityFollowersDocument, baseOptions);
      }
export function useCommunityFollowersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityFollowersQuery, CommunityFollowersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityFollowersQuery, CommunityFollowersQueryVariables>(CommunityFollowersDocument, baseOptions);
        }
export type CommunityFollowersQueryHookResult = ReturnType<typeof useCommunityFollowersQuery>;
export type CommunityFollowersLazyQueryHookResult = ReturnType<typeof useCommunityFollowersLazyQuery>;
export type CommunityFollowersQueryResult = ApolloReactCommon.QueryResult<CommunityFollowersQuery, CommunityFollowersQueryVariables>;


export interface CommunityFollowersQueryOperation {
  operationName: 'communityFollowers'
  result: CommunityFollowersQuery
  variables: CommunityFollowersQueryVariables
  type: 'query'
}
