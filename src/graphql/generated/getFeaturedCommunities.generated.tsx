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
  one: Types.Scalars['String'];
  two: Types.Scalars['String'];
  three: Types.Scalars['String'];
  four: Types.Scalars['String'];
  five: Types.Scalars['String'];
  six: Types.Scalars['String'];
  seven: Types.Scalars['String'];
};

export type GetFeaturedCommunitiesQuery = { __typename?: 'RootQueryType' } & {
  one: { __typename?: 'Community' } & BasicCommunityFragment;
  two: { __typename?: 'Community' } & BasicCommunityFragment;
  three: { __typename?: 'Community' } & BasicCommunityFragment;
  four: { __typename?: 'Community' } & BasicCommunityFragment;
  five: { __typename?: 'Community' } & BasicCommunityFragment;
  six: { __typename?: 'Community' } & BasicCommunityFragment;
  seven: { __typename?: 'Community' } & BasicCommunityFragment;
};

export const GetFeaturedCommunitiesDocument = gql`
  query getFeaturedCommunities(
    $one: String!
    $two: String!
    $three: String!
    $four: String!
    $five: String!
    $six: String!
    $seven: String!
  ) {
    one: community(communityId: $one) {
      ...BasicCommunity
    }
    two: community(communityId: $two) {
      ...BasicCommunity
    }
    three: community(communityId: $three) {
      ...BasicCommunity
    }
    four: community(communityId: $four) {
      ...BasicCommunity
    }
    five: community(communityId: $five) {
      ...BasicCommunity
    }
    six: community(communityId: $six) {
      ...BasicCommunity
    }
    seven: community(communityId: $seven) {
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
            name: 'Country'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Language'
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
