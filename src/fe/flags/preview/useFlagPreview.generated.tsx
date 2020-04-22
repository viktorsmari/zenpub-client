import * as Types from '../../../graphql/types.generated';

import { FlagPreviewFragment } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import gql from 'graphql-tag';
import { FlagPreviewFragmentDoc } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type FlagPreviewDataQueryVariables = {
  flagId: Types.Scalars['String']
};


export type FlagPreviewDataQuery = (
  { __typename: 'RootQueryType' }
  & { flag: Types.Maybe<(
    { __typename: 'Flag' }
    & FlagPreviewFragment
  )> }
);


export const FlagPreviewDataDocument = gql`
    query flagPreviewData($flagId: String!) {
  flag(flagId: $flagId) {
    ...FlagPreview
  }
}
    ${FlagPreviewFragmentDoc}`;

/**
 * __useFlagPreviewDataQuery__
 *
 * To run a query within a React component, call `useFlagPreviewDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlagPreviewDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlagPreviewDataQuery({
 *   variables: {
 *      flagId: // value for 'flagId'
 *   },
 * });
 */
export function useFlagPreviewDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>) {
        return ApolloReactHooks.useQuery<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>(FlagPreviewDataDocument, baseOptions);
      }
export function useFlagPreviewDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>(FlagPreviewDataDocument, baseOptions);
        }
export type FlagPreviewDataQueryHookResult = ReturnType<typeof useFlagPreviewDataQuery>;
export type FlagPreviewDataLazyQueryHookResult = ReturnType<typeof useFlagPreviewDataLazyQuery>;
export type FlagPreviewDataQueryResult = ApolloReactCommon.QueryResult<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>;


export interface FlagPreviewDataQueryOperation {
  operationName: 'flagPreviewData'
  result: FlagPreviewDataQuery
  variables: FlagPreviewDataQueryVariables
  type: 'query'
}
export const FlagPreviewDataQueryName:FlagPreviewDataQueryOperation['operationName'] = 'flagPreviewData'
