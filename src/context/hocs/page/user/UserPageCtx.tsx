import { HeroUserCtxProvider } from 'context/hocs/modules/HeroUser/HeroUserCtx';
import { Activity, User } from 'graphql/types.generated';
import { UserPageCtx } from 'HOC/pages/user/UserPageHOC';
import React, { SFC, useMemo } from 'react';
import * as GQL from './UserPage.generated';

export interface UserPageCtxProvider {
  userId: User['id'];
}
export const UserPageCtxProvider: SFC<UserPageCtxProvider> = ({
  userId,
  children
}) => {
  const activitiesQ = GQL.useUserPageOutboxQuery({ variables: { userId } });

  const activitiesIds = useMemo<Activity['id'][]>(() => {
    return (activitiesQ.data?.user?.outbox?.edges || [])
      .map(edge => edge?.node.id)
      .filter((_): _ is Activity['id'] => !!_);
  }, [activitiesQ]);

  const userPageCtx = useMemo<UserPageCtx>(() => {
    const ctx: UserPageCtx = {
      activitiesIds,
      userId
    };
    return ctx;
  }, [userId, activitiesIds]);

  return (
    <UserPageCtx.Provider value={userPageCtx}>
      <HeroUserCtxProvider userId={userId}>{children}</HeroUserCtxProvider>
    </UserPageCtx.Provider>
  );
};
