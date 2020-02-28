import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../HOC/modules/previews/activity/ActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewFragmentDoc } from '../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type ActivityPreviewQueryVariables = {
  activityId: Types.Scalars['String']
};


export type ActivityPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { activity: Types.Maybe<(
    { __typename: 'Activity' }
    & Pick<Types.Activity, 'id'>
    & ActivityPreviewFragment
  )> }
);


export const ActivityPreviewDocument = gql`
    query activityPreview($activityId: String!) {
  activity(activityId: $activityId) {
    id
    ...ActivityPreview
  }
}
    ${ActivityPreviewFragmentDoc}`;
export type ActivityPreviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ActivityPreviewQuery, ActivityPreviewQueryVariables>, 'query'> & ({ variables: ActivityPreviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ActivityPreviewComponent = (props: ActivityPreviewComponentProps) => (
      <ApolloReactComponents.Query<ActivityPreviewQuery, ActivityPreviewQueryVariables> query={ActivityPreviewDocument} {...props} />
    );
    
export type ActivityPreviewProps<TChildProps = {}> = ApolloReactHoc.DataProps<ActivityPreviewQuery, ActivityPreviewQueryVariables> & TChildProps;
export function withActivityPreview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ActivityPreviewQuery,
  ActivityPreviewQueryVariables,
  ActivityPreviewProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ActivityPreviewQuery, ActivityPreviewQueryVariables, ActivityPreviewProps<TChildProps>>(ActivityPreviewDocument, {
      alias: 'activityPreview',
      ...operationOptions
    });
};

/**
 * __useActivityPreviewQuery__
 *
 * To run a query within a React component, call `useActivityPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityPreviewQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useActivityPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivityPreviewQuery, ActivityPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivityPreviewQuery, ActivityPreviewQueryVariables>(ActivityPreviewDocument, baseOptions);
      }
export function useActivityPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivityPreviewQuery, ActivityPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivityPreviewQuery, ActivityPreviewQueryVariables>(ActivityPreviewDocument, baseOptions);
        }
export type ActivityPreviewQueryHookResult = ReturnType<typeof useActivityPreviewQuery>;
export type ActivityPreviewLazyQueryHookResult = ReturnType<typeof useActivityPreviewLazyQuery>;
export type ActivityPreviewQueryResult = ApolloReactCommon.QueryResult<ActivityPreviewQuery, ActivityPreviewQueryVariables>;


export interface ActivityPreviewQueryOperation {
  operationName: 'activityPreview'
  result: ActivityPreviewQuery
  variables: ActivityPreviewQueryVariables
  type: 'query'
}
