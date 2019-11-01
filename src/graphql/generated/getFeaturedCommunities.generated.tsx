import * as Types from '../types.d';

import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import gql from 'graphql-tag';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetFeaturedCommunitiesQueryVariables = {
  one: Types.Scalars['Int'];
  two: Types.Scalars['Int'];
  three: Types.Scalars['Int'];
  four: Types.Scalars['Int'];
  five: Types.Scalars['Int'];
  six: Types.Scalars['Int'];
  seven: Types.Scalars['Int'];
};

export type GetFeaturedCommunitiesQuery = { __typename?: 'RootQueryType' } & {
  one: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  two: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  three: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  four: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  five: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  six: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
  seven: Types.Maybe<{ __typename?: 'Community' } & BasicCommunityFragment>;
};

export const GetFeaturedCommunitiesDocument = gql`
  query getFeaturedCommunities(
    $one: Int!
    $two: Int!
    $three: Int!
    $four: Int!
    $five: Int!
    $six: Int!
    $seven: Int!
  ) {
    one: community(localId: $one) {
      ...BasicCommunity
    }
    two: community(localId: $two) {
      ...BasicCommunity
    }
    three: community(localId: $three) {
      ...BasicCommunity
    }
    four: community(localId: $four) {
      ...BasicCommunity
    }
    five: community(localId: $five) {
      ...BasicCommunity
    }
    six: community(localId: $six) {
      ...BasicCommunity
    }
    seven: community(localId: $seven) {
      ...BasicCommunity
    }
  }
  ${BasicCommunityFragmentDoc}
`;
export type GetFeaturedCommunitiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetFeaturedCommunitiesQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetFeaturedCommunitiesComponent = (
  props: GetFeaturedCommunitiesComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
    query={GetFeaturedCommunitiesDocument}
    {...props}
  />
);

export type GetFeaturedCommunitiesProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetFeaturedCommunitiesQuery,
  GetFeaturedCommunitiesQueryVariables
> &
  TChildProps;
export function withGetFeaturedCommunities<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables,
    GetFeaturedCommunitiesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables,
    GetFeaturedCommunitiesProps<TChildProps>
  >(GetFeaturedCommunitiesDocument, {
    alias: 'getFeaturedCommunities',
    ...operationOptions
  });
}

/**
 * __useGetFeaturedCommunitiesQuery__
 *
 * To run a query within a React component, call `useGetFeaturedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedCommunitiesQuery({
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
export function useGetFeaturedCommunitiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >(GetFeaturedCommunitiesDocument, baseOptions);
}
export function useGetFeaturedCommunitiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetFeaturedCommunitiesQuery,
    GetFeaturedCommunitiesQueryVariables
  >(GetFeaturedCommunitiesDocument, baseOptions);
}
export type GetFeaturedCommunitiesQueryHookResult = ReturnType<
  typeof useGetFeaturedCommunitiesQuery
>;
export type GetFeaturedCommunitiesLazyQueryHookResult = ReturnType<
  typeof useGetFeaturedCommunitiesLazyQuery
>;
export type GetFeaturedCommunitiesQueryResult = ApolloReactCommon.QueryResult<
  GetFeaturedCommunitiesQuery,
  GetFeaturedCommunitiesQueryVariables
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
