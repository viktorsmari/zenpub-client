import { useMemo } from 'react';
import * as GQL from './me.generated';

export const useMe = () => {
  const meQ = GQL.useMeQuery();
  const [logoutMut, logoutStatus] = GQL.useMeLogoutMutation();

  return useMemo(() => {
    const me = meQ.data?.me;
    const isAdmin = !!me?.isInstanceAdmin;

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
      logout,
      loading: meQ.loading
    };
  }, [meQ, logoutStatus]);
};
