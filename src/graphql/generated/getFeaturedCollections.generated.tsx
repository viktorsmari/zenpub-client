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

export type GetFeaturedCollectionsQueryVariables = {
  one: Types.Scalars['String'];
  two: Types.Scalars['String'];
  three: Types.Scalars['String'];
  four: Types.Scalars['String'];
  five: Types.Scalars['String'];
  six: Types.Scalars['String'];
  seven: Types.Scalars['String'];
};

export type GetFeaturedCollectionsQuery = { __typename?: 'RootQueryType' } & {
  one: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  two: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  three: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  four: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  five: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  six: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
  seven: Types.Maybe<{ __typename?: 'Collection' } & BasicCollectionFragment>;
};

export const GetFeaturedCollectionsDocument = gql`
  query getFeaturedCollections(
    $one: String!
    $two: String!
    $three: String!
    $four: String!
    $five: String!
    $six: String!
    $seven: String!
  ) {
    one: collection(collectionId: $one) {
      ...BasicCollection
    }
    two: collection(collectionId: $two) {
      ...BasicCollection
    }
    three: collection(collectionId: $three) {
      ...BasicCollection
    }
    four: collection(collectionId: $four) {
      ...BasicCollection
    }
    five: collection(collectionId: $five) {
      ...BasicCollection
    }
    six: collection(collectionId: $six) {
      ...BasicCollection
    }
    seven: collection(collectionId: $seven) {
      ...BasicCollection
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export type GetFeaturedCollectionsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetFeaturedCollectionsQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetFeaturedCollectionsComponent = (
  props: GetFeaturedCollectionsComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
    query={GetFeaturedCollectionsDocument}
    {...props}
  />
);

export type GetFeaturedCollectionsProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFeaturedCollectionsQuery,
  GetFeaturedCollectionsQueryVariables
> &
  TChildProps;
export function withGetFeaturedCollections<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables,
    GetFeaturedCollectionsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables,
    GetFeaturedCollectionsProps<TChildProps>
  >(GetFeaturedCollectionsDocument, {
    alias: 'getFeaturedCollections',
    ...operationOptions
  });
}

/**
 * __useGetFeaturedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCollectionsQuery({
 *   variables: {
 *      one: // value for 'one'
 *      two: // value for 'two'
 *      three: // value for 'three'
 *      four: // value for 'four'
 *      five: // value for 'five'
 *      six: // value for 'six'
 *      seven: // value for 'seven'
 *   },
 * });
 */
export function useGetFeaturedCollectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >(GetFeaturedCollectionsDocument, baseOptions);
}
export function useGetFeaturedCollectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFeaturedCollectionsQuery,
    GetFeaturedCollectionsQueryVariables
  >(GetFeaturedCollectionsDocument, baseOptions);
}
export type GetFeaturedCollectionsQueryHookResult = ReturnType<
  typeof useGetFeaturedCollectionsQuery
>;
export type GetFeaturedCollectionsLazyQueryHookResult = ReturnType<
  typeof useGetFeaturedCollectionsLazyQuery
>;
export type GetFeaturedCollectionsQueryResult = ApolloReactCommon.QueryResult<
  GetFeaturedCollectionsQuery,
  GetFeaturedCollectionsQueryVariables
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
