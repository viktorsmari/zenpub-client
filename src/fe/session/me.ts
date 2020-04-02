import { useMemo } from 'react';
import * as GQL from './me.generated';

export const useMe = () => {
  const meQ = GQL.useMeQuery();
  const [loginMut, loginStatus] = GQL.useLoginMutation();
  const [logoutMut, logoutStatus] = GQL.useLogoutMutation();

  return useMemo(() => {
    const me = meQ.data?.me;
    const isAdmin = !!me?.isInstanceAdmin;

    const login = (email: string, password: string) => {
      if (loginStatus.loading || me?.user) {
        return;
      }
      return loginMut({
        variables: { email, password },
        refetchQueries: [{ query: GQL.MeDocument }]
      });
    };

    const logout = () => {
      if (logoutStatus.loading || !me?.user) {
        return;
      }
      return logoutMut({
        update: proxy => {
          proxy.writeQuery<GQL.MeQuery>({
            data: {
              __typename: 'RootQueryType',
              me: null
            },
            query: GQL.MeDocument
          });
        }
      });
    };

    return {
      me,
      isAdmin,
      login,
      logout,
      loading: meQ.loading
    };
  }, [meQ, loginStatus, logoutStatus]);
};
