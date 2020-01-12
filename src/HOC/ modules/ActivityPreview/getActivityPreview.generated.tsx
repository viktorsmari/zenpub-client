import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetActivityPreviewQueryVariables = {
  activityId: Types.Scalars['String']
};


export type GetActivityPreviewQuery = (
  { __typename?: 'RootQueryType' }
  & { activity: Types.Maybe<(
    { __typename?: 'Activity' }
    & Pick<Types.Activity, 'createdAt' | 'id' | 'verb'>
    & { user: (
      { __typename?: 'User' }
      & Pick<Types.User, 'icon' | 'image' | 'id' | 'name' | 'preferredUsername'>
    ), context: (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'icon' | 'name' | 'summary' | 'canonicalUrl'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<Types.User, 'id' | 'name'>
      ) }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'content' | 'canonicalUrl'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<Types.User, 'id' | 'name'>
      ), inReplyTo: Types.Maybe<(
        { __typename?: 'Comment' }
        & Pick<Types.Comment, 'content'>
        & { creator: (
          { __typename?: 'User' }
          & Pick<Types.User, 'id' | 'name'>
        ) }
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'icon' | 'name' | 'summary' | 'canonicalUrl'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<Types.User, 'id' | 'name'>
      ) }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'icon' | 'name' | 'summary' | 'canonicalUrl'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<Types.User, 'id' | 'name'>
      ) }
    ) }
  )> }
);


export const GetActivityPreviewDocument = gql`
    query getActivityPreview($activityId: String!) {
  activity(activityId: $activityId) {
    createdAt
    id
    verb
    user {
      icon
      image
      id
      name
      preferredUsername
    }
    context {
      __typename
      ... on Collection {
        icon
        name
        summary
        canonicalUrl
        creator {
          id
          name
        }
      }
      ... on Comment {
        content
        canonicalUrl
        creator {
          id
          name
        }
        inReplyTo {
          content
          creator {
            id
            name
          }
        }
      }
      ... on Community {
        icon
        name
        summary
        canonicalUrl
        creator {
          id
          name
        }
      }
      ... on Resource {
        icon
        name
        summary
        canonicalUrl
        creator {
          id
          name
        }
      }
    }
  }
}
    `;
export type GetActivityPreviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>, 'query'> & ({ variables: GetActivityPreviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetActivityPreviewComponent = (props: GetActivityPreviewComponentProps) => (
      <ApolloReactComponents.Query<GetActivityPreviewQuery, GetActivityPreviewQueryVariables> query={GetActivityPreviewDocument} {...props} />
    );
    
export type GetActivityPreviewProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetActivityPreviewQuery, GetActivityPreviewQueryVariables> & TChildProps;
export function withGetActivityPreview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetActivityPreviewQuery,
  GetActivityPreviewQueryVariables,
  GetActivityPreviewProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetActivityPreviewQuery, GetActivityPreviewQueryVariables, GetActivityPreviewProps<TChildProps>>(GetActivityPreviewDocument, {
      alias: 'getActivityPreview',
      ...operationOptions
    });
};

/**
 * __useGetActivityPreviewQuery__
 *
 * To run a query within a React component, call `useGetActivityPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityPreviewQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useGetActivityPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>(GetActivityPreviewDocument, baseOptions);
      }
export function useGetActivityPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>(GetActivityPreviewDocument, baseOptions);
        }
export type GetActivityPreviewQueryHookResult = ReturnType<typeof useGetActivityPreviewQuery>;
export type GetActivityPreviewLazyQueryHookResult = ReturnType<typeof useGetActivityPreviewLazyQuery>;
export type GetActivityPreviewQueryResult = ApolloReactCommon.QueryResult<GetActivityPreviewQuery, GetActivityPreviewQueryVariables>;


export interface GetActivityPreviewQueryOperation {
  operationName: 'getActivityPreview'
  result: GetActivityPreviewQuery
  variables: GetActivityPreviewQueryVariables
  type: 'query'
}
