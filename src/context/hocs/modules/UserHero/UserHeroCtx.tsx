import React, { SFC } from 'react';
import { User } from 'graphql/types.generated';
import { HeroUserCtx } from 'HOC/modules/HeroUser/HeroUserHOC';
import * as GQL from './HeroUser.graphql';

export interface UserHeroCtxProvider {
  userId: User['id'];
}
export const UserHeroCtxProvider: SFC<UserHeroCtxProvider> = ({
  userId,
  children
}) => {
  const ctx: HeroUserCtx = {
    me,
    toggleFollow,
    user
  };
  return <HeroUserCtx.Provider value={ctx}>{children}</HeroUserCtx.Provider>;
};
