import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, CollectionUpdateInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import {
  useEditCollectionDataQuery,
  useEditCollectionMutation
} from './useEditCollection.generated';

export const useEditCollection = (collectionId: Collection['id']) => {
  const [editMut, editMutStatus] = useEditCollectionMutation();
  const [uploadIconMut, uploadIconStatus] = useUploadIconMutation();
  const collectionEditQ = useEditCollectionDataQuery({
    variables: { collectionId }
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
          variables: { contextId: collectionId, upload: icon }
        })
      );
    },
    [collectionId, mutating]
  );

  const edit = useCallback(
    async (collectionInput: CollectionUpdateInput, iconFile: Maybe<File>) => {
      if (mutating) {
        return;
      }
      return uploadIcon(iconFile).then(() =>
        editMut({
          variables: {
            collectionId,
            collection: {
              name: collectionInput.name,
              icon: iconFile ? undefined : collectionInput.icon,
              summary: collectionInput.summary,
              preferredUsername: collectionInput.preferredUsername
            }
          }
        })
      );
    },
    [collectionId, mutating]
  );
  return useMemo(() => {
    const collection = collectionEditQ.data?.collection;
    return {
      edit,
      collection,
      uploadIcon
    };
  }, [edit, collectionEditQ, uploadIcon]);
};
