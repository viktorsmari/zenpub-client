import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { MyCommunityFollowsQueryRefetch } from '../myFollowed/myFollowedCommunities.generated';
import { useCreateCommunityMutation } from './useCreateCommunity.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';

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

      return createMut({
        variables: {
          icon: getMaybeUploadInput(icon, null),
          community: {
            name: community.name,
            summary: community.summary,
            preferredUsername: community.preferredUsername
          }
        },
        refetchQueries: [
          MyCommunityFollowsQueryRefetch({}),
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE })
        ]
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
