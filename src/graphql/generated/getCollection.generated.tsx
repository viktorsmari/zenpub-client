import * as Types from '../types.d';

import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import gql from 'graphql-tag';
import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetCollectionQueryVariables = {
  id: Types.Scalars['Int'];
};

export type GetCollectionQuery = { __typename?: 'RootQueryType' } & {
  collection: Types.Maybe<
    { __typename?: 'Collection' } & {
      resources: Types.Maybe<
        { __typename?: 'CollectionResourcesConnection' } & Pick<
          Types.CollectionResourcesConnection,
          'totalCount'
        > & {
            edges: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'CollectionResourcesEdge' } & {
                    node: Types.Maybe<
                      { __typename?: 'Resource' } & Pick<
                        Types.Resource,
                        'id' | 'localId' | 'name' | 'summary' | 'url' | 'icon'
                      >
                    >;
                  }
                >
              >
            >;
          }
      >;
    } & BasicCollectionFragment
  >;
};

export const GetCollectionDocument = gql`
  query getCollection($id: Int!) {
    collection(localId: $id) {
      ...BasicCollection
      resources {
        totalCount
        edges {
          node {
            id
            localId
            name
            summary
            url
            icon
          }
        }
      }
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export type GetCollectionComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetCollectionQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetCollectionComponent = (props: GetCollectionComponentProps) => (
  <ApolloReactComponents.Query<GetCollectionQuery, GetCollectionQueryVariables>
    query={GetCollectionDocument}
    {...props}
  />
);

export type GetCollectionProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetCollectionQuery,
  GetCollectionQueryVariables
> &
  TChildProps;
export function withGetCollection<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCollectionQuery,
    GetCollectionQueryVariables,
    GetCollectionProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCollectionQuery,
    GetCollectionQueryVariables,
    GetCollectionProps<TChildProps>
  >(GetCollectionDocument, {
    alias: 'getCollection',
    ...operationOptions
  });
}

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >(GetCollectionDocument, baseOptions);
}
export function useGetCollectionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCollectionQuery,
    GetCollectionQueryVariables
  >(GetCollectionDocument, baseOptions);
}
export type GetCollectionQueryHookResult = ReturnType<
  typeof useGetCollectionQuery
>;
export type GetCollectionLazyQueryHookResult = ReturnType<
  typeof useGetCollectionLazyQuery
>;
export type GetCollectionQueryResult = ApolloReactCommon.QueryResult<
  GetCollectionQuery,
  GetCollectionQueryVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
