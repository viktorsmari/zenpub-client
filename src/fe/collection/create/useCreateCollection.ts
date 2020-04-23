import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CollectionInput, Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { CommunityCollectionsQueryRefetch } from '../community/useCommunityCollections.generated';
import { useCreateCollectionMutation } from './useCreateCollection.generated';

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
          icon: getMaybeUploadInput(icon),
          collection: {
            name: collection.name,
            summary: collection.summary,
            preferredUsername: collection.preferredUsername
          }
        },
        refetchQueries: [CommunityCollectionsQueryRefetch({ communityId })]
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
