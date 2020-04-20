import { PureQueryOptions } from 'apollo-client';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CollectionInput, Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { CommunityCollectionsDocument } from '../community/useCommunityCollections.generated';
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
      const refetchQueries: PureQueryOptions[] = [
        {
          query: CommunityCollectionsDocument,
          variables: { communityId }
        }
      ];

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
        refetchQueries: refetchQueries
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
