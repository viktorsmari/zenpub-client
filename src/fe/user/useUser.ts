import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUser.generated';
import { useMe } from 'fe/session/me';
import { useFollowContext } from 'fe/context/follow/useFollowContext';

export const useUser = (userId: User['id']) => {
  const userQ = GQL.useUserDataQuery({ variables: { userId } });
  const { me, isAdmin } = useMe();

  const user = userQ.data?.user;
  const isMe = !!(me && user && me.user.id == user.id);

  const { toggleFollow } = useFollowContext(user?.id, user?.myFollow);

  return useMemo(() => {
    return {
      isMe,
      isAdmin,
      user,
      toggleFollow
    };
  }, [me, user, toggleFollow]);
};
