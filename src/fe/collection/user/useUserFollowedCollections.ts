import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCollections = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCollectionsQuery({
    variables: { userId }
  });

  const followedCollectionsPage = usePage(
    userQ.data?.user?.followedCollections
  );

  return useMemo(
    () => ({
      followedCollectionsPage
    }),
    [followedCollectionsPage]
  );
};
