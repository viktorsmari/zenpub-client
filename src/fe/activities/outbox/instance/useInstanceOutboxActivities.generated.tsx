import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type InstanceOutboxActivitiesQueryVariables = {
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type InstanceOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { pageInfo: Types.Maybe<(
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      )>, edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'Activity' }
        & InstanceOutboxActivityFragment
      )>>> }
    )> }
  )> }
);

export type InstanceOutboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewFragment
);

export const InstanceOutboxActivityFragmentDoc = gql`
    fragment InstanceOutboxActivity on Activity {
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
export const InstanceOutboxActivitiesDocument = gql`
    query instanceOutboxActivities($after: [Cursor], $before: [Cursor], $limit: Int) {
  instance {
    outbox(after: $after, before: $before, limit: $limit) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...InstanceOutboxActivity
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${InstanceOutboxActivityFragmentDoc}`;
export type InstanceOutboxActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>, 'query'>;

    export const InstanceOutboxActivitiesComponent = (props: InstanceOutboxActivitiesComponentProps) => (
      <ApolloReactComponents.Query<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables> query={InstanceOutboxActivitiesDocument} {...props} />
    );
    
export type InstanceOutboxActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables> & TChildProps;
export function withInstanceOutboxActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InstanceOutboxActivitiesQuery,
  InstanceOutboxActivitiesQueryVariables,
  InstanceOutboxActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables, InstanceOutboxActivitiesProps<TChildProps>>(InstanceOutboxActivitiesDocument, {
      alias: 'instanceOutboxActivities',
      ...operationOptions
    });
};

/**
 * __useInstanceOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useInstanceOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceOutboxActivitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useInstanceOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>(InstanceOutboxActivitiesDocument, baseOptions);
      }
export function useInstanceOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>(InstanceOutboxActivitiesDocument, baseOptions);
        }
export type InstanceOutboxActivitiesQueryHookResult = ReturnType<typeof useInstanceOutboxActivitiesQuery>;
export type InstanceOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useInstanceOutboxActivitiesLazyQuery>;
export type InstanceOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>;


export interface InstanceOutboxActivitiesQueryOperation {
  operationName: 'instanceOutboxActivities'
  result: InstanceOutboxActivitiesQuery
  variables: InstanceOutboxActivitiesQueryVariables
  type: 'query'
}
