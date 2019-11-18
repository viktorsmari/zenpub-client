import * as React from 'react';
import * as Types from '../types.d';

import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import gql from 'graphql-tag';
import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import { BasicResourceFragmentDoc } from '../fragments/generated/basicResource.generated';
import { BasicResourceFragment } from '../fragments/generated/basicResource.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetCollectionQueryVariables = {
  id: Types.Scalars['String'];
};

export type GetCollectionQuery = { __typename?: 'RootQueryType' } & {
  collection: Types.Maybe<
    { __typename?: 'Collection' } & {
      resources: { __typename?: 'ResourcesEdges' } & Pick<
        Types.ResourcesEdges,
        'totalCount'
      > & {
          edges: Array<
            Types.Maybe<
              { __typename?: 'ResourcesEdge' } & {
                node: { __typename?: 'Resource' } & BasicResourceFragment;
              }
            >
          >;
        };
    } & BasicCollectionFragment
  >;
};

export const GetCollectionDocument = gql`
  query getCollection($id: String!) {
    collection(collectionId: $id) {
      ...BasicCollection
      resources {
        totalCount
        edges {
          node {
            ...BasicResource
          }
        }
      }
    }
  }
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
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
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'DeleteContext',
        possibleTypes: [
          {
            name: 'Activity'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Like'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
