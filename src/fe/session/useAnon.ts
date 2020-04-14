import { useMemo } from 'react';
import * as GQL from './anon.generated';

export const useAnon = () => {
  const [loginMut, loginStatus] = GQL.useAnonLoginMutation();
  const [resetPwdMut, resetPwdStatus] = GQL.useAnonResetPasswordMutation();
  const [
    resetPwdReqMut,
    resetPwdReqStatus
  ] = GQL.useAnonResetPasswordRequestMutation();

  return useMemo(() => {
    const resetPwd = ({
      password,
      token
    }: {
      token: string;
      password: string;
    }) => {
      if (resetPwdStatus.loading) {
        return;
      }
      return resetPwdMut({
        variables: { password, token }
      });
    };

    const resetPwdReq = (email: string) => {
      if (resetPwdReqStatus.loading) {
        return;
      }
      return resetPwdReqMut({
        variables: { email }
      });
    };

    const login = (email: string, password: string) => {
      if (loginStatus.loading) {
        return;
      }
      return loginMut({
        variables: { email, password }
      });
    };

    return {
      login,
      resetPwd,
      resetPwdReq
    };
  }, [
    loginMut,
    loginStatus,
    resetPwdMut,
    resetPwdStatus,
    resetPwdReqMut,
    resetPwdReqStatus
  ]);
};
