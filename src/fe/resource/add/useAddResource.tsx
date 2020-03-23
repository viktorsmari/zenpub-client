import { useUploadIconMutation } from 'fe/mutation/upload/icon/useUploadIcon.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, ResourceInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { CollectionResourcesDocument } from '../collection/useCollectionResources.generated';
import * as GQL from './useAddResource.generated';

export const useAddResource = () => {
  const [
    createResource /* , result */
  ] = GQL.useAddResourceCreateResourceMutation();
  const [mutateResource] = GQL.useAddResourceUploadMutation();
  const [mutateIcon] = useUploadIconMutation();
  return useMemo(() => {
    const create = (
      collectionId: Collection['id'],
      input: ResourceInput,
      fileToUpload: Maybe<Blob>,
      iconToUpload: Maybe<Blob>
    ) => {
      const refetchQueries = [
        {
          query: CollectionResourcesDocument,
          variables: { collectionId }
        }
      ];

      return createResource({
        variables: {
          collectionId: collectionId,
          resource: input
        },
        refetchQueries: fileToUpload || iconToUpload ? [] : refetchQueries
      })
        .then(res => {
          const createdResourceId = res.data!.createResource!.id;

          if (fileToUpload) {
            return mutateResource({
              variables: {
                contextId: createdResourceId,
                upload: fileToUpload
              },
              refetchQueries: iconToUpload ? [] : refetchQueries
            }).then(() => createdResourceId);
          }
          return createdResourceId;
        })
        .then(createdResourceId => {
          if (iconToUpload) {
            return mutateIcon({
              variables: {
                contextId: createdResourceId,
                upload: iconToUpload
              },
              refetchQueries
            });
          }
          return;
        });
    };
    return {
      create
    };
  }, []);
};
