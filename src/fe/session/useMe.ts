import { useMemo, useCallback } from 'react';
import { mnCtx } from 'fe/lib/graphql/ctx';
import * as GQL from './me.generated';

export const useMe = () => {
  const meQ = GQL.useMeQuery({ context: mnCtx({ noShowError: true }) });
  const [logoutMut, logoutStatus] = GQL.useMeLogoutMutation();

  const me = meQ.data?.me;
  const loading = meQ.loading;
  const isAdmin = !!me?.isInstanceAdmin;
  const logout = useCallback(() => {
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
  }, [me, logoutStatus.loading]);

  return useMemo(() => {
    return {
      me,
      isAdmin,
      logout,
      loading
    };
  }, [me, loading, isAdmin, logout]);
};
