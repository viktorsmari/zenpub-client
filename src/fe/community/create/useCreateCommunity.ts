import { PureQueryOptions } from 'apollo-client';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { useCreateCommunityMutation } from './useCreateCommunity.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';

export const useCreateCommunity = () => {
  const [createMut, createMutStatus] = useCreateCommunityMutation();

  const create = useCallback(
    async (communityInput: CommunityInput, iconFile: Maybe<File | string>) => {
      if (createMutStatus.loading) {
        return;
      }
      const refetchQueries: PureQueryOptions[] = [];

      return createMut({
        variables: {
          icon: getMaybeUploadInput(iconFile),
          community: {
            name: communityInput.name,
            summary: communityInput.summary,
            preferredUsername: communityInput.preferredUsername
          }
        },
        refetchQueries
      });
    },
    [createMutStatus, createMut]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
