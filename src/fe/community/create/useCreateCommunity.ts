import { PureQueryOptions } from 'apollo-client';
import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Community, CommunityInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { useCreateCommunityMutation } from './useCreateCommunity.generated';
import { GetSidebarQueryDocument } from 'graphql/getSidebar.generated';

export const useCreateCommunity = () => {
  const [createMut, createMutStatus] = useCreateCommunityMutation();
  const [uploadIconMut, uploadIconStatus] = useUploadIconMutation();
  const mutating = createMutStatus.loading || uploadIconStatus.loading;

  const create = useCallback(
    async (communityInput: CommunityInput, iconFile: Maybe<File>) => {
      if (mutating) {
        return;
      }
      const refetchQueries: PureQueryOptions[] = [
        { query: GetSidebarQueryDocument }
      ];

      const uploadIcon = async (communityId: Maybe<Community['id']>) => {
        return (
          iconFile &&
          communityId &&
          uploadIconMut({
            variables: { contextId: communityId, upload: iconFile },
            refetchQueries: refetchQueries
          })
        );
      };

      return createMut({
        variables: {
          community: {
            name: communityInput.name,
            icon: iconFile ? undefined : communityInput.icon,
            summary: communityInput.summary,
            preferredUsername: communityInput.preferredUsername
          }
        },
        refetchQueries: iconFile ? [] : refetchQueries
      }).then(({ data }) => {
        const createdCommunityId = data?.createCommunity?.id;
        return iconFile && createdCommunityId
          ? uploadIcon(createdCommunityId).then(() => createdCommunityId)
          : createdCommunityId;
      });
    },
    [mutating]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
