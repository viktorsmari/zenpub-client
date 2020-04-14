import * as Types from '../../graphql/types.generated';

import { UseMeDataFragment } from './me.generated';
import gql from 'graphql-tag';
import { UseMeDataFragmentDoc } from './me.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type AnonResetPasswordMutationVariables = {
  password: Types.Scalars['String'],
  token: Types.Scalars['String']
};


export type AnonResetPasswordMutation = (
  { __typename: 'RootMutationType' }
  & { resetPassword: Types.Maybe<(
    { __typename: 'AuthPayload' }
    & AuthDataFragment
  )> }
);

export type AnonResetPasswordRequestMutationVariables = {
  email: Types.Scalars['String']
};


export type AnonResetPasswordRequestMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'resetPasswordRequest'>
);

export type AnonLoginMutationVariables = {
  email: Types.Scalars['String'],
  password: Types.Scalars['String']
};


export type AnonLoginMutation = (
  { __typename: 'RootMutationType' }
  & { createSession: Types.Maybe<(
    { __typename: 'AuthPayload' }
    & AuthDataFragment
  )> }
);

export type AuthDataFragment = (
  { __typename: 'AuthPayload' }
  & Pick<Types.AuthPayload, 'token'>
  & { me: (
    { __typename: 'Me' }
    & UseMeDataFragment
  ) }
);

export const AuthDataFragmentDoc = gql`
    fragment AuthData on AuthPayload {
  me {
    ...useMeData
  }
  token
}
    ${UseMeDataFragmentDoc}`;
export const AnonResetPasswordDocument = gql`
    mutation anonResetPassword($password: String!, $token: String!) {
  resetPassword(token: $token, password: $password) {
    ...AuthData
  }
}
    ${AuthDataFragmentDoc}`;
export type AnonResetPasswordMutationFn = ApolloReactCommon.MutationFunction<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>;
export type AnonResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>, 'mutation'>;

    export const AnonResetPasswordComponent = (props: AnonResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<AnonResetPasswordMutation, AnonResetPasswordMutationVariables> mutation={AnonResetPasswordDocument} {...props} />
    );
    
export type AnonResetPasswordProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AnonResetPasswordMutation, AnonResetPasswordMutationVariables> & TChildProps;
export function withAnonResetPassword<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AnonResetPasswordMutation,
  AnonResetPasswordMutationVariables,
  AnonResetPasswordProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AnonResetPasswordMutation, AnonResetPasswordMutationVariables, AnonResetPasswordProps<TChildProps>>(AnonResetPasswordDocument, {
      alias: 'anonResetPassword',
      ...operationOptions
    });
};

/**
 * __useAnonResetPasswordMutation__
 *
 * To run a mutation, you first call `useAnonResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonResetPasswordMutation, { data, loading, error }] = useAnonResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAnonResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>(AnonResetPasswordDocument, baseOptions);
      }
export type AnonResetPasswordMutationHookResult = ReturnType<typeof useAnonResetPasswordMutation>;
export type AnonResetPasswordMutationResult = ApolloReactCommon.MutationResult<AnonResetPasswordMutation>;
export type AnonResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>;
export const AnonResetPasswordRequestDocument = gql`
    mutation anonResetPasswordRequest($email: String!) {
  resetPasswordRequest(email: $email)
}
    `;
export type AnonResetPasswordRequestMutationFn = ApolloReactCommon.MutationFunction<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>;
export type AnonResetPasswordRequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>, 'mutation'>;

    export const AnonResetPasswordRequestComponent = (props: AnonResetPasswordRequestComponentProps) => (
      <ApolloReactComponents.Mutation<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables> mutation={AnonResetPasswordRequestDocument} {...props} />
    );
    
export type AnonResetPasswordRequestProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables> & TChildProps;
export function withAnonResetPasswordRequest<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AnonResetPasswordRequestMutation,
  AnonResetPasswordRequestMutationVariables,
  AnonResetPasswordRequestProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables, AnonResetPasswordRequestProps<TChildProps>>(AnonResetPasswordRequestDocument, {
      alias: 'anonResetPasswordRequest',
      ...operationOptions
    });
};

/**
 * __useAnonResetPasswordRequestMutation__
 *
 * To run a mutation, you first call `useAnonResetPasswordRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonResetPasswordRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonResetPasswordRequestMutation, { data, loading, error }] = useAnonResetPasswordRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAnonResetPasswordRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>(AnonResetPasswordRequestDocument, baseOptions);
      }
export type AnonResetPasswordRequestMutationHookResult = ReturnType<typeof useAnonResetPasswordRequestMutation>;
export type AnonResetPasswordRequestMutationResult = ApolloReactCommon.MutationResult<AnonResetPasswordRequestMutation>;
export type AnonResetPasswordRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>;
export const AnonLoginDocument = gql`
    mutation anonLogin($email: String!, $password: String!) {
  createSession(email: $email, password: $password) {
    ...AuthData
  }
}
    ${AuthDataFragmentDoc}`;
export type AnonLoginMutationFn = ApolloReactCommon.MutationFunction<AnonLoginMutation, AnonLoginMutationVariables>;
export type AnonLoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AnonLoginMutation, AnonLoginMutationVariables>, 'mutation'>;

    export const AnonLoginComponent = (props: AnonLoginComponentProps) => (
      <ApolloReactComponents.Mutation<AnonLoginMutation, AnonLoginMutationVariables> mutation={AnonLoginDocument} {...props} />
    );
    
export type AnonLoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AnonLoginMutation, AnonLoginMutationVariables> & TChildProps;
export function withAnonLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AnonLoginMutation,
  AnonLoginMutationVariables,
  AnonLoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AnonLoginMutation, AnonLoginMutationVariables, AnonLoginProps<TChildProps>>(AnonLoginDocument, {
      alias: 'anonLogin',
      ...operationOptions
    });
};

/**
 * __useAnonLoginMutation__
 *
 * To run a mutation, you first call `useAnonLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonLoginMutation, { data, loading, error }] = useAnonLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAnonLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonLoginMutation, AnonLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonLoginMutation, AnonLoginMutationVariables>(AnonLoginDocument, baseOptions);
      }
export type AnonLoginMutationHookResult = ReturnType<typeof useAnonLoginMutation>;
export type AnonLoginMutationResult = ApolloReactCommon.MutationResult<AnonLoginMutation>;
export type AnonLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonLoginMutation, AnonLoginMutationVariables>;


export interface AnonResetPasswordMutationOperation {
  operationName: 'anonResetPassword'
  result: AnonResetPasswordMutation
  variables: AnonResetPasswordMutationVariables
  type: 'mutation'
}


export interface AnonResetPasswordRequestMutationOperation {
  operationName: 'anonResetPasswordRequest'
  result: AnonResetPasswordRequestMutation
  variables: AnonResetPasswordRequestMutationVariables
  type: 'mutation'
}


export interface AnonLoginMutationOperation {
  operationName: 'anonLogin'
  result: AnonLoginMutation
  variables: AnonLoginMutationVariables
  type: 'mutation'
}
