import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CollectionInput, Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { CommunityCollectionsQueryRefetch } from '../community/useCommunityCollections.generated';
import { useCreateCollectionMutation } from './useCreateCollection.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { CommunityOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/community/useCommunityOutboxActivities.generated';
import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import { AllCollectionsQueryRefetch } from '../all/useAllCollections.generated';
import { MyCollectionFollowsQueryRefetch } from '../myFollowed/myFollowedCollections.generated';

export interface CreateCollection {
  collection: CollectionInput;
  icon: Maybe<File | string>;
}
export const useCreateCollection = (communityId: Community['id']) => {
  const [createMut, createMutStatus] = useCreateCollectionMutation();

  const create = useCallback(
    async ({ collection, icon }: CreateCollection) => {
      if (createMutStatus.loading) {
        return;
      }

      return createMut({
        variables: {
          communityId: communityId,
          icon: getMaybeUploadInput(icon, null),
          collection: {
            name: collection.name,
            summary: collection.summary,
            preferredUsername: collection.preferredUsername
          }
        },
        refetchQueries: [
          CommunityCollectionsQueryRefetch({
            communityId,
            limit: DEFAULT_PAGE_SIZE
          }),
          CommunityOutboxActivitiesQueryRefetch({
            communityId,
            limit: DEFAULT_PAGE_SIZE
          }),
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          AllCollectionsQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          MyCollectionFollowsQueryRefetch({ limit: DEFAULT_PAGE_SIZE })
        ]
      });
    },
    [communityId, createMutStatus, createMut]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
