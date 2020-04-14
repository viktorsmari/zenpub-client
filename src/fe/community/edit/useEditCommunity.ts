import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Community, CommunityUpdateInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCommunityDataQuery,
  useEditCommunityMutation
} from './useEditCommunity.generated';

export const useEditCommunity = (communityId: Community['id']) => {
  const [editMut, editMutStatus] = useEditCommunityMutation();
  const [uploadIconMut, uploadIconStatus] = useUploadIconMutation();
  const communityEditQ = useEditCommunityDataQuery({
    variables: { communityId }
  });
  const mutating = editMutStatus.loading || uploadIconStatus.loading;

  const uploadIcon = useCallback(
    async (icon: Maybe<File>) => {
      if (mutating) {
        return;
      }
      return (
        icon &&
        uploadIconMut({
          variables: { contextId: communityId, upload: icon }
        })
      );
    },
    [communityId, mutating]
  );
  const edit = useCallback(
    async (communityInput: CommunityUpdateInput, iconFile: Maybe<File>) => {
      if (mutating) {
        return;
      }
      return uploadIcon(iconFile).then(() =>
        editMut({
          variables: {
            communityId,
            community: {
              name: communityInput.name,
              icon: iconFile ? undefined : communityInput.icon,
              image: iconFile ? undefined : communityInput.image,
              summary: communityInput.summary
            }
          }
        })
      );
    },
    [communityId, mutating]
  );

  return useMemo(() => {
    const community = communityEditQ.data?.community;
    return {
      edit,
      uploadIcon,
      community
    };
  }, [edit, uploadIcon, communityEditQ]);
};
