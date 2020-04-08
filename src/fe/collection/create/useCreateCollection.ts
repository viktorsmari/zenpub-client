import { PureQueryOptions } from 'apollo-client';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CollectionInput, Community } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { CommunityCollectionsDocument } from '../community/useCommunityCollections.generated';
import { useCreateCollectionMutation } from './useCreateCollection.generated';

export const useCreateCollection = (communityId: Community['id']) => {
  const [createMut, createMutStatus] = useCreateCollectionMutation();

  const create = useCallback(
    async (collectionInput: CollectionInput, icon: Maybe<File | string>) => {
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
            name: collectionInput.name,
            summary: collectionInput.summary,
            preferredUsername: collectionInput.preferredUsername
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
