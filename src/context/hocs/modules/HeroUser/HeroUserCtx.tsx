import { User } from 'graphql/types.generated';
import { HeroUserCtx } from 'HOC/modules/HeroUser/HeroUserHOC';
import React, { SFC, useMemo } from 'react';
import * as GQL from './HeroUser.generated';

export interface HeroUserCtxProvider {
  userId: User['id'];
}
export const HeroUserCtxProvider: SFC<HeroUserCtxProvider> = ({
  userId,
  children
}) => {
  const userQ = GQL.useHeroUserDataQuery({ variables: { userId } });
  const meQ = GQL.useHeroUserMeQuery({ variables: { userId } });
  const [follow, followStatus] = GQL.useHeroUserFollowMutation();
  const [unfollow, unfollowStatus] = GQL.useHeroUserUnfollowMutation();

  const me = useMemo<HeroUserCtx['me']>(() => {
    return meQ.data?.me;
  }, [meQ]);

  const user = useMemo<HeroUserCtx['user']>(() => {
    return userQ.data?.user;
  }, [userQ]);
  const toggleFollow = useMemo<HeroUserCtx['toggleFollow']>(() => {
    return () => {
      if (
        followStatus.loading ||
        unfollowStatus.loading ||
        !userQ.data ||
        !userQ.data.user
      ) {
        return;
      }
      const user = userQ.data.user;
      if (user.myFollow) {
        return unfollow({ variables: { followId: user.myFollow.id } });
      } else {
        return follow({ variables: { userId } });
      }
    };
  }, [userQ, followStatus, unfollowStatus]);

  const heroUserCtx = useMemo<HeroUserCtx>(() => {
    const ctx: HeroUserCtx = {
      me,
      user,
      toggleFollow
    };
    return ctx;
  }, [me, user, toggleFollow]);

  return (
    <HeroUserCtx.Provider value={heroUserCtx}>{children}</HeroUserCtx.Provider>
  );
};
