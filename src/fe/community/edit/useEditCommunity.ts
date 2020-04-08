import Maybe from 'graphql/tsutils/Maybe';
import { Community, CommunityUpdateInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCommunityDataQuery,
  useEditCommunityMutation
} from './useEditCommunity.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';

export const useEditCommunity = (communityId: Community['id']) => {
  const [editMut, editMutStatus] = useEditCommunityMutation();
  const communityEditQ = useEditCommunityDataQuery({
    variables: { communityId }
  });

  const edit = useCallback(
    async (
      communityInput: CommunityUpdateInput,
      iconFile: Maybe<File | string>
    ) => {
      if (editMutStatus.loading) {
        return;
      }
      return editMut({
        variables: {
          communityId,
          icon: getMaybeUploadInput(iconFile),
          community: {
            name: communityInput.name,
            summary: communityInput.summary
          }
        }
      });
    },
    [communityId, editMutStatus, editMut]
  );

  return useMemo(() => {
    const community = communityEditQ.data?.community;
    return {
      edit,
      community
    };
  }, [edit, communityEditQ]);
};
