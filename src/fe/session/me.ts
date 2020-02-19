import { useMemo, useCallback } from 'react';
import * as GQL from './me.generated';

export const useMe = () => {
  const meQ = GQL.useMeQuery();
  const [loginMut, loginStatus] = GQL.useLoginMutation();
  const [logoutMut, logoutStatus] = GQL.useLogoutMutation();

  const me = meQ.data?.me;
  const isAdmin = !!me?.isInstanceAdmin;

  const login = useCallback(
    async (email: string, password: string) => {
      if (loginStatus.loading || me?.user) {
        return;
      }
      return loginMut({ variables: { email, password } });
    },
    [loginMut, loginStatus, me]
  );

  const logout = useCallback(async () => {
    if (logoutStatus.loading || !me?.user) {
      return;
    }
    return logoutMut();
  }, [loginStatus, logoutStatus, me]);

  return useMemo(() => {
    return {
      me,
      isAdmin,
      login,
      logout
    };
  }, [me, isAdmin, login, logout]);
};
