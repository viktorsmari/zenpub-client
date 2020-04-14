import { PureQueryOptions } from 'apollo-client';
import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';
import Maybe from 'graphql/tsutils/Maybe';
import {
  Collection,
  Community,
  CollectionInput
} from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { CommunityCollectionsDocument } from '../community/useCommunityCollections.generated';
import { useCreateCollectionMutation } from './useCreateCollection.generated';

export const useCreateCollection = (communityId: Community['id']) => {
  const [createMut, createMutStatus] = useCreateCollectionMutation();
  const [uploadIconMut, uploadIconStatus] = useUploadIconMutation();
  const mutating = createMutStatus.loading || uploadIconStatus.loading;

  const create = useCallback(
    async (collectionInput: CollectionInput, iconFile: Maybe<File>) => {
      if (mutating) {
        return;
      }
      const refetchQueries: PureQueryOptions[] = [
        {
          query: CommunityCollectionsDocument,
          variables: { communityId }
        }
      ];

      const uploadIcon = async (collectionId: Maybe<Collection['id']>) => {
        return (
          iconFile &&
          collectionId &&
          uploadIconMut({
            variables: { contextId: collectionId, upload: iconFile },
            refetchQueries: refetchQueries
          })
        );
      };

      return createMut({
        variables: {
          communityId: communityId,
          collection: {
            name: collectionInput.name,
            icon: iconFile ? undefined : collectionInput.icon,
            summary: collectionInput.summary,
            preferredUsername: collectionInput.preferredUsername
          }
        },
        refetchQueries: iconFile ? [] : refetchQueries
      }).then(({ data }) => {
        const createdCollectionId = data?.createCollection?.id;
        return iconFile && createdCollectionId
          ? uploadIcon(createdCollectionId).then(() => createdCollectionId)
          : createdCollectionId;
      });
    },
    [communityId, mutating]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
