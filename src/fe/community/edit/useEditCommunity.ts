import { Community, CommunityUpdateInput } from 'graphql/types.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { useUpdateCommunityMutation } from 'fe/mutation/community/update/useUpdateCommunity.generated';
import { useCallback, useMemo } from 'react';

export const useEditCommunity = (communityId: Maybe<Community['id']>) => {
  const [update, status] = useUpdateCommunityMutation();

  const edit = useCallback(
    async (community: CommunityUpdateInput) => {
      if (!communityId || status.loading) {
        return;
      }
      return update({ variables: { communityId, community } });
    },
    [communityId, status]
  );

  return useMemo(() => {
    return {
      edit
    };
  }, [edit]);
};
