import * as Types from '../../../graphql/types.generated';

import { SidebarFollowedCommunityFragment } from '../../../HOC/modules/Sidebar/Sidebar.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { SidebarFollowedCommunityFragmentDoc } from '../../../HOC/modules/Sidebar/Sidebar.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type MyFollowedCommunitiesQueryVariables = {};


export type MyFollowedCommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & MyFollowedCommunitiesMeDataFragment
  )> }
);

export type MyFollowedCommunitiesMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { followedCommunities: Types.Maybe<(
      { __typename: 'FollowedCommunitiesPage' }
      & Pick<Types.FollowedCommunitiesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'FollowedCommunity' }
        & { community: (
          { __typename: 'Community' }
          & SidebarFollowedCommunityFragment
        ), follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        ) }
      )> }
    )> }
  ) }
);

export const MyFollowedCommunitiesMeDataFragmentDoc = gql`
    fragment MyFollowedCommunitiesMeData on Me {
  user {
    id
    followedCommunities {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        community {
          ...SidebarFollowedCommunity
        }
        follow {
          id
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${SidebarFollowedCommunityFragmentDoc}`;
export const MyFollowedCommunitiesDocument = gql`
    query myFollowedCommunities {
  me @connection(key: "myFollowedCommunities") {
    ...MyFollowedCommunitiesMeData
  }
}
    ${MyFollowedCommunitiesMeDataFragmentDoc}`;

/**
 * __useMyFollowedCommunitiesQuery__
 *
 * To run a query within a React component, call `useMyFollowedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFollowedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFollowedCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFollowedCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyFollowedCommunitiesQuery, MyFollowedCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<MyFollowedCommunitiesQuery, MyFollowedCommunitiesQueryVariables>(MyFollowedCommunitiesDocument, baseOptions);
      }
export function useMyFollowedCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyFollowedCommunitiesQuery, MyFollowedCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyFollowedCommunitiesQuery, MyFollowedCommunitiesQueryVariables>(MyFollowedCommunitiesDocument, baseOptions);
        }
export type MyFollowedCommunitiesQueryHookResult = ReturnType<typeof useMyFollowedCommunitiesQuery>;
export type MyFollowedCommunitiesLazyQueryHookResult = ReturnType<typeof useMyFollowedCommunitiesLazyQuery>;
export type MyFollowedCommunitiesQueryResult = ApolloReactCommon.QueryResult<MyFollowedCommunitiesQuery, MyFollowedCommunitiesQueryVariables>;


export interface MyFollowedCommunitiesQueryOperation {
  operationName: 'myFollowedCommunities'
  result: MyFollowedCommunitiesQuery
  variables: MyFollowedCommunitiesQueryVariables
  type: 'query'
}
export const MyFollowedCommunitiesQueryName:MyFollowedCommunitiesQueryOperation['operationName'] = 'myFollowedCommunities'
