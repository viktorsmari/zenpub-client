import { User } from 'graphql/types.generated';
import { useUserPreviewQuery } from './useUserPreview.generated';
import { useMemo } from 'react';

export const useUserPreview = (userId: User['id']) => {
  const userPreviewQ = useUserPreviewQuery({ variables: { userId } });
  return useMemo(() => {
    return {
      user: userPreviewQ.data?.user
    };
  }, [userPreviewQ]);
};
