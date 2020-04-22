import { PureQueryOptions } from 'apollo-client';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { useCreateCommunityMutation } from './useCreateCommunity.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';

export interface CreateCommunity {
  community: CommunityInput;
  icon: Maybe<File | string>;
}
export const useCreateCommunity = () => {
  const [createMut, createMutStatus] = useCreateCommunityMutation();

  const create = useCallback(
    async ({ community, icon }: CreateCommunity) => {
      if (createMutStatus.loading) {
        return;
      }
      const refetchQueries: PureQueryOptions[] = [];

      return createMut({
        variables: {
          icon: getMaybeUploadInput(icon),
          community: {
            name: community.name,
            summary: community.summary,
            preferredUsername: community.preferredUsername
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
