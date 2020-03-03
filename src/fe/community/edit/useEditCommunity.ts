import Maybe from 'graphql/tsutils/Maybe';
import { Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCommunityDataQuery,
  useEditCommunityMutation,
  EditCommunityMutationVariables
} from './useEditCommunity.generated';
import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';

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
    async (
      community: EditCommunityMutationVariables['community'],
      iconFile: Maybe<File>
    ) => {
      if (mutating) {
        return;
      }
      return uploadIcon(iconFile).then(() =>
        editMut({
          variables: {
            communityId,
            community: {
              name: community.name,
              icon: iconFile ? undefined : community.icon,
              image: iconFile ? undefined : community.image,
              summary: community.summary
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
