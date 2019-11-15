import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type LoginMutationMutationVariables = {
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
};

export type LoginMutationMutation = { __typename?: 'RootMutationType' } & {
  createSession: Types.Maybe<
    { __typename?: 'AuthPayload' } & Pick<Types.AuthPayload, 'token'> & {
        me: { __typename?: 'Me' } & Pick<
          Types.Me,
          | 'email'
          | 'wantsEmailDigest'
          | 'wantsNotifications'
          | 'isConfirmed'
          | 'isInstanceAdmin'
        > & {
            user: { __typename?: 'User' } & Pick<
              Types.User,
              | 'id'
              | 'canonicalUrl'
              | 'preferredUsername'
              | 'name'
              | 'summary'
              | 'location'
              | 'icon'
              | 'isPublic'
              | 'isDisabled'
              | 'createdAt'
              | 'updatedAt'
              | 'lastActivity'
            >;
          };
      }
  >;
};

export const LoginMutationDocument = gql`
  mutation loginMutation($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      token
      me {
        email
        wantsEmailDigest
        wantsNotifications
        isConfirmed
        isInstanceAdmin
        user {
          id
          canonicalUrl
          preferredUsername
          name
          summary
          location
          icon
          isPublic
          isDisabled
          createdAt
          updatedAt
          lastActivity
        }
      }
    }
  }
`;
export type LoginMutationMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export type LoginMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >,
  'mutation'
>;

export const LoginMutationComponent = (props: LoginMutationComponentProps) => (
  <ApolloReactComponents.Mutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >
    mutation={LoginMutationDocument}
    {...props}
  />
);

export type LoginMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  LoginMutationMutation,
  LoginMutationMutationVariables
> &
  TChildProps;
export function withLoginMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps>
  >(LoginMutationDocument, {
    alias: 'loginMutation',
    ...operationOptions
  });
}

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >(LoginMutationDocument, baseOptions);
}
export type LoginMutationMutationHookResult = ReturnType<
  typeof useLoginMutationMutation
>;
export type LoginMutationMutationResult = ApolloReactCommon.MutationResult<
  LoginMutationMutation
>;
export type LoginMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutationMutation,
  LoginMutationMutationVariables
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
